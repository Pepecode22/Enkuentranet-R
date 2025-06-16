import './EncontrarSection.css';

const categorias = [
  { id: 'sofa', nombre: 'Muebles', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M2 13v-2a4 4 0 0 1 8 0v2h4v-2a4 4 0 0 1 8 0v2h-2v6a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-2 0v3H7v-3a1 1 0 0 0-2 0v3H3a1 1 0 0 1-1-1v-6H2zm2 0h4v-2a2 2 0 0 0-4 0v2zm14 0h4v-2a2 2 0 0 0-4 0v2z"/></svg>
  )},
  { id: 'paint', nombre: 'Pintura', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M2 22v-2h20v2H2zm2-4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14H4zm2-2h8V4H6v12zm10 2v-2h2v2h-2z"/></svg>
  )},
  { id: 'shirt', nombre: 'Ropa', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M16 3l5 4-2 2-3-2.5V21h-2V6.5L8 9.5V21H6V6.5L3 9.5 1 7l5-4h10z"/></svg>
  )},
  { id: 'bottle', nombre: 'Cosmética', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M7 2v2h2v2h6V4h2V2H7zm2 4v2h6V6H9zm-2 4v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10H7z"/></svg>
  )},
  { id: 'microphone', nombre: 'Música', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-1 19.93V23h2v-2.07A8.001 8.001 0 0 0 20 13h-2a6 6 0 0 1-12 0H2a8.001 8.001 0 0 0 9 7.93z"/></svg>
  )},
  { id: 'apple', nombre: 'Alimentos', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M17.5 7.5c-1.38 0-2.5-1.12-2.5-2.5S16.12 2.5 17.5 2.5 20 3.62 20 5s-1.12 2.5-2.5 2.5zm-11 0C5.12 7.5 4 6.38 4 5s1.12-2.5 2.5-2.5S9 3.62 9 5s-1.12 2.5-2.5 2.5zm8.5 2.5c-2.21 0-4 1.79-4 4v6h8v-6c0-2.21-1.79-4-4-4zm-8 0c-2.21 0-4 1.79-4 4v6h8v-6c0-2.21-1.79-4-4-4z"/></svg>
  )},
  { id: 'tools', nombre: 'Servicios Técnicos', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M21.7 20.3l-2.4-2.4c.6-1.1.9-2.3.9-3.6 0-4.4-3.6-8-8-8-1.3 0-2.5.3-3.6.9l2.4 2.4c.4.4.4 1 0 1.4l-2.4 2.4c-.4.4-1 .4-1.4 0l-2.4-2.4C2.3 8.5 2 9.7 2 11c0 4.4 3.6 8 8 8 1.3 0 2.5-.3 3.6-.9l2.4 2.4c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z"/></svg>
  )},
  { id: 'home', nombre: 'Hogar', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M12 3l10 9h-3v9h-6v-6H9v6H3v-9H0l12-9z"/></svg>
  )},
  { id: 'printer', nombre: 'Impresión 3D', icon: (
    <svg width="32" height="32" fill="#6400E0" viewBox="0 0 24 24"><path d="M19 7V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3H1v13h22V7h-4zm-2 0H7V4h10v3zm4 2v9H3V9h18zm-2 2H5v5h14v-5z"/></svg>
  )}
];

const EncontrarSection = () => {
  return (
    <section id="encontrar" className="encontrar-section">
      <div className="encontrar-container">
        {/* Menú lateral */}
        <aside className="categorias-menu">
          <ul>
            {categorias.map(cat => (
              <li key={cat.id} id={cat.id} title={cat.nombre}>
                {cat.icon}
              </li>
            ))}
          </ul>
        </aside>
        {/* Zona de mapa */}
        <div className="mapa-zona">
          {/* Aquí irá el mapa en el futuro */}
        </div>
      </div>
    </section>
  );
};

export default EncontrarSection;