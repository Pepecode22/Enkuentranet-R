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
import { useEffect, useState } from 'react';


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
  const [selectedTab, setSelectedTab] = useState('arriendo');

  return (
    <section id="encontrar" className="encontrar-section">
      <h2 className="titulo-principal text-center">Encuentra productos y servicios en tu barrio</h2>
      <p className="lead text-center">Más de 1.000 emprendedores disponibles en nuestra red.</p>
      <div className="encontrar-container">
        {/* Menú lateral */}
        <aside className="categorias-menu">
          <ul>
            {categorias.map(cat => (
              <li key={cat.id} id={cat.id} title={cat.nombre} onClick={() => setSelectedTab(cat.id)} className={selectedTab === cat.id ? 'active' : ''}>
                <img src={cat.icon} alt={cat.nombre} className="categoria-icon" />
              </li>
            ))}
          </ul>
        </aside>
        {/* Zona de mapa */}
        <div className="mapa-zona">
          <MapboxMap latitude={-33.438} longitude={-70.651} zoom={10} selectedTab={selectedTab} />
        </div>
      </div>
    </section>
  );
};

export default EncontrarSection;