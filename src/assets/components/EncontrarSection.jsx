import './EncontrarSection.css';
import MapboxMap from './MapBoxMap.jsx';

import ArriendoEspacios from '../images/Categorias/ArriendoEspacios.svg';
import Educacion from '../images/Categorias/Educacion.svg';
import Estetica from '../images/Categorias/Estetica.svg';
import Familia from '../images/Categorias/Familia.svg';
import Gastronomia from '../images/Categorias/Gastronomia.svg';
import Oficios from '../images/Categorias/Oficios.svg';
import ServiciosHogar from '../images/Categorias/ServiciosHogar.svg';
import Tecnologia from '../images/Categorias/Tecnologia.svg';
import Transporte from '../images/Categorias/Transporte.svg';


const categorias = [
  { id: 'arriendo', nombre: 'Arriendo de Espacios', icon: ArriendoEspacios },
  { id: 'educacion', nombre: 'Educación', icon: Educacion },
  { id: 'estetica', nombre: 'Estética', icon: Estetica },
  { id: 'familia', nombre: 'Familia', icon: Familia },
  { id: 'gastronomia', nombre: 'Gastronomía', icon: Gastronomia },
  { id: 'oficios', nombre: 'Oficios', icon: Oficios },
  { id: 'servicioshogar', nombre: 'Servicios para el Hogar', icon: ServiciosHogar },
  { id: 'tecnologia', nombre: 'Tecnología', icon: Tecnologia },
  { id: 'transporte', nombre: 'Transporte', icon: Transporte },
];

const EncontrarSection = () => {
  return (
    <section id="encontrar" className="encontrar-section p-4">
      <h2 className="titulo-principal text-center">Encuentra lo que necesitas</h2>
      <p className="lead text-center">Puedes buscar por categorías o zona.</p>
      <div className="encontrar-container">
        {/* Menú lateral */}
        <aside className="categorias-menu">
          <ul>
            {categorias.map(cat => (
              <li key={cat.id} id={cat.id} title={cat.nombre}>
                <img src={cat.icon} alt={cat.nombre} className="categoria-icon" />
              </li>
            ))}
          </ul>
        </aside>
        {/* Zona de mapa */}
        <div className="mapa-zona">
          <MapboxMap latitude={-33.438} longitude={-70.651} zoom={10}/>
        </div>
      </div>
    </section>
  );
};

export default EncontrarSection;