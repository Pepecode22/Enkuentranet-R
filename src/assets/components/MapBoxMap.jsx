import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, GeolocateControl, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZDFlZ28tYXJ0IiwiYSI6ImNtYnU0ZDJtdzAwZHEybG45OWo1cTIyZzEifQ.8Y_DuVk8DEoD-iNp17_klQ';
const mapStyle = "mapbox://styles/d1ego-art/cmbzabkwd01hs01s20pqp566c";

const categoryColors = {
  arriendo: '#E74C3C',         // Rojo
  educacion: '#2980D9',        // Azul
  estetica: '#9B59B6',         // Morado
  familia: '#27AE60',          // Verde
  gastronomia: '#C8F400',      // Limón
  oficios: '#13C6F0',          // Cian
  servicioshogar: '#16A085',   // Verde azulado
  tecnologia: '#E67E22',       // Naranjo oscuro
  transporte: '#8E44AD',       // Violeta
};

const MapboxMap = (selectedTab) => {
  const [markers, setMarkers] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const initialMarkers = [
      //Arriendo
      { longitude: -70.6463841, latitude: -33.4384638, category: 'arriendo', nombre: 'PRONTO Cowork', descripcion: 'Salas de Reuniones o Cowork.', dirección: 'Santa Lucía 344, Santiago Centro', telefono: '+56 9 1234 5678' },
      { longitude: -70.64266, latitude: -33.4560793, category: 'arriendo', nombre: 'Salas de ensayo CreaRock', descripcion: 'Espacios para shows y conciertos.', dirección: 'Carmen 973, Santiago Centro', telefono: '+56 9 1234 5678' },
      { longitude: -70.6294927, latitude: -33.4415738, category: 'arriendo', nombre: ' Rental Office', descripcion: 'Salas para clases o talleres.', dirección: 'Seminario 130, Santiago Centro', telefono: '+56 9 1234 5678' },
      { longitude: -70.6414258, latitude: -33.4287843, category: 'arriendo', nombre: 'Club Dominica Sport', descripcion: 'Espacios deportivos.', dirección: 'Dominica 136, Recoleta', telefono: '+56 9 1234 5678' },
// Educación
      { category: 'educacion', nombre: 'Academia Alhambra Músicos', descripcion: 'Clases particulares', direccion: 'Merced 305, Santiago Centro', telefono: '+56 9 12345678', longitude: -70.6438122, latitude: -33.4371029 },
      { category: 'educacion', nombre: 'Taller Firenze - Academia de Artes', descripcion: 'Talleres y cursos', direccion: 'Nueva de Lyon 124, Providencia', telefono: '+56 9 12345678', longitude: -70.613404, latitude: -33.4209559 },
      { category: 'educacion', nombre: 'Psicopedagoga Jenny Tarkowski', descripcion: 'Apoyo Psicopedagógico', direccion: 'Av. Nueva Providencia 1945, Providencia', telefono: '+56 9 12345678', longitude: -70.6154233, latitude: -33.4256209 },
      { category: 'educacion', nombre: 'Bar Academy', descripcion: 'Talleres y cursos', direccion: 'Av Salvador 800, Providencia', telefono: '+56 9 12345678', longitude: -70.620, latitude: -33.430 },

      // Belleza y estética
      { category: 'estetica', nombre: 'Real Barbershop', descripcion: 'Peluquería y barbería', direccion: 'Pío Nono 110, Recoleta', telefono: '+56 9 12345678', longitude: -70.641, latitude: -33.427 },
      { category: 'estetica', nombre: 'Vía Láser', descripcion: 'Depilación', direccion: 'Padre Mariano 210, Providencia', telefono: '+56 9 12345678', longitude: -70.617, latitude: -33.424 },
      { category: 'estetica', nombre: 'Makeup Studio EA', descripcion: 'Maquillaje', direccion: 'Lord Cochrane 181, Santiago', telefono: '+56 9 12345678', longitude: -70.654, latitude: -33.454 },
      { category: 'estetica', nombre: 'Salón Corazón de Pelo', descripcion: 'Peluquería y Barbería', direccion: 'Seminario 252, Providencia', telefono: '+56 9 12345678', longitude: -70.619, latitude: -33.431 },
      { category: 'estetica', nombre: 'Centro Integral Yin Salaaj', descripcion: 'Masajes y terapias de relajación', direccion: 'Enrique MacIver 484, Santiago Centro', telefono: '+56 9 12345678', longitude: -70.646, latitude: -33.437 },

      // Cuidado familiar
      { category: 'familia', nombre: 'Duko', descripcion: 'Paseadores de perros', direccion: 'Av apoquindo 6410, Las Condes', telefono: '+56 9 12345678', longitude: -70.563, latitude: -33.410 },
      { category: 'familia', nombre: 'Caninetrek', descripcion: 'Paseadores de perros', direccion: 'Av. Manquehue Sur 520, Las Condes', telefono: '+56 9 12345678', longitude: -70.570, latitude: -33.414 },
      { category: 'familia', nombre: 'Silver Care', descripcion: 'Cuidado de adultos mayores', direccion: 'Marchant Pereira 150, Providencia', telefono: '+56 9 12345678', longitude: -70.610, latitude: -33.426 },

      // Gastronomía
      { category: 'gastronomia', nombre: 'Mía_dulcería', descripcion: 'Pastelería refinada', direccion: 'Teniente Merino 196, Linderos', telefono: '+56987743596', longitude: -70.728, latitude: -33.789 },
      { category: 'gastronomia', nombre: 'Celeste Trattoria', descripcion: 'Especialidad en comida italiana', direccion: 'Capitán Ignacio Carrera Pinto, 4971, Macul', telefono: '+56951741055', longitude: -70.591, latitude: -33.496 },
      { category: 'gastronomia', nombre: 'Pastelería Encanto', descripcion: 'Pastelería y panadería', direccion: 'Balmaceda, 693 Buin', telefono: '+56954484310', longitude: -70.742, latitude: -33.732 },
      { category: 'gastronomia', nombre: 'Cicavideas', descripcion: 'Pastelería y coctelería', direccion: 'El Líbano 3146, Macul', telefono: '+56985636830', longitude: -70.599, latitude: -33.497 },

      // Oficios
      { category: 'oficios', nombre: 'NPFM Abogados', descripcion: 'Consultas, juicios y más', direccion: 'Dublé Almeida 2390, Ñuñoa', telefono: '+56968223042', longitude: -70.601, latitude: -33.463 },
      { category: 'oficios', nombre: 'CeramicasMolina', descripcion: 'Trabajo en cerámicas', direccion: 'Av Padre Hurtado Sur 542, Las Condes', telefono: '+56948309531', longitude: -70.552, latitude: -33.441 },
      { category: 'oficios', nombre: 'ko-fen', descripcion: 'Jardinería y paisajismo urbano', direccion: 'Lo Infante, San Bernardo', telefono: '+56963228502', longitude: -70.704, latitude: -33.592 },
      { category: 'oficios', nombre: 'SabalMagic', descripcion: 'Joyería y artesanía', direccion: 'María Luisa Bombal 948, Buin', telefono: '+56957558491', longitude: -70.736, latitude: -33.732 },

      // Servicios para el hogar
      { category: 'servicioshogar', nombre: 'Fibra Edén', descripcion: 'Acceso a Internet a través de fibra óptica', direccion: 'San Miguel', telefono: '+56971583820', longitude: -70.649, latitude: -33.494 },
      { category: 'servicioshogar', nombre: 'Limialo_reto', descripcion: 'Limpieza a domicilio', direccion: 'Ñuñoa', telefono: '+56910215081', longitude: -70.601, latitude: -33.463 },
      { category: 'servicioshogar', nombre: 'Pet_ Lovely', descripcion: 'Cuidado de mascotas', direccion: 'La Florida', telefono: '+56958712021', longitude: -70.569, latitude: -33.522 },
      { category: 'servicioshogar', nombre: 'Luis Ulloa', descripcion: 'Gasfitería', direccion: 'La Reina', telefono: '+56932616335', longitude: -70.543, latitude: -33.454 },

      // Tecnología
      { category: 'tecnologia', nombre: 'In_Fraint', descripcion: 'Sistema Alarmas, Seguridad y base de datos', direccion: 'Doctor Patricio Romero 115, Buin', telefono: '+56991925092', longitude: -70.742, latitude: -33.732 },
      { category: 'tecnologia', nombre: 'Tecnomix', descripcion: 'Especialista en tecnología', direccion: 'Av Providenia 1208, Providencia', telefono: '+56977476186', longitude: -70.620, latitude: -33.426 },
      { category: 'tecnologia', nombre: 'Maczone_Tecnología', descripcion: 'Servicio tecnológico apple', direccion: 'Consistorial 725, Pte Alto', telefono: '+56951966676', longitude: -70.579, latitude: -33.610 },
      { category: 'tecnologia', nombre: 'Space.cl', descripcion: 'Armados de pc, componentes, Venta de pc y más.', direccion: 'Luis Gandarillas 1161, Maipú', telefono: '+56991026820', longitude: -70.762, latitude: -33.513 },

      // Transporte
      { category: 'transporte', nombre: 'T_Salazar', descripcion: 'Sistema de transporte dentro y fuera de RM', direccion: 'Buin', telefono: '+56933255100', longitude: -70.742, latitude: -33.732 },
      { category: 'transporte', nombre: 'Segrúas', descripcion: 'Traslado y transporte de cargas, dentro y fuera de RM', direccion: 'San Bernardo', telefono: '+56909482868', longitude: -70.704, latitude: -33.592 },
      { category: 'transporte', nombre: 'Vergaratrans. spa', descripcion: 'Hoteles, turismo, Aeropuertos y más', direccion: 'Maipú', telefono: '+56960081923', longitude: -70.762, latitude: -33.513 },
      { category: 'transporte', nombre: 'Morado trans_porte', descripcion: 'Llega segura, viaja tranquilo', direccion: 'Pudahuel', telefono: '+56919182605', longitude: -70.751, latitude: -33.432 },
      
    ];
    setMarkers(initialMarkers);
  }, []);

  const initialCenter = {
    longitude: -70.651,
    latitude: -33.438,
    zoom: 10,
    pitch: 60,
    bearing: 0
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }}>
      <Map
        ref={mapRef}
        initialViewState={initialCenter}
        style={{ width: '100%', height: '110%' }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl
          position='top-right'
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showUserHeading={true}
        />
        {markers.map((marker, index) =>
          selectedTab.selectedTab === marker.category ? (
            <Marker
              key={index}
              longitude={marker.longitude}
              latitude={marker.latitude}
              anchor="bottom"
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: categoryColors[marker.category] || 'red',
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.1s',
                }}
                onMouseEnter={() => setHoveredMarker(marker)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7" />
                </svg>
              </div>
            </Marker>
          ) : null
        )}
        {hoveredMarker && (
          <Popup
            longitude={hoveredMarker.longitude}
            latitude={hoveredMarker.latitude}
            closeButton={false}
            anchor="top"
            offset={[0, -20]}
            onClose={() => setHoveredMarker(null)}
            style={{ zIndex: 10 }}
          >
            <div style={{ minWidth: 200 }}>
              <h5 style={{ marginBottom: 4 }}>{hoveredMarker.nombre}</h5>
              <p style={{ margin: 0, fontSize: 14 }}>{hoveredMarker.descripcion}</p>
              <p style={{ margin: 0, fontSize: 13 }}>{hoveredMarker.direccion}</p>
              <p style={{ margin: 0, fontSize: 13, color: '#6400E0', fontWeight: 600 }}>
                {hoveredMarker.telefono}
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapboxMap;


