import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    ),
    title: "Visibilidad Local",
    text: "Aparece en los resultados de búsqueda cuando clientes buscan productos o servicios como el tuyo en tu zona."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>
    ),
    title: "Perfil Seguro",
    text: "Controla qué información compartes y mantén tus datos de contacto protegidos."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
      </svg>
    ),
    title: "Gestión de Inventario",
    text: "Actualiza fácilmente tus productos y servicios disponibles en tiempo real."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
      </svg>
    ),
    title: "Soporte Personalizado",
    text: "Asesoría gratuita para optimizar tu perfil y destacar entre la competencia."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg>
    ),
    title: "Acceso Rápido",
    text: "Los clientes pueden contactarte directamente desde tu perfil con un solo clic."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#6400E0" viewBox="0 0 16 16">
        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
      </svg>
    ),
    title: "Estadísticas",
    text: "Mide el impacto de tu perfil con datos reales sobre visitas y contactos."
  }
];

const EmprendedoresSection = ({ onLoginClick, onRegistroClick }) => {
  return (
    <section id="emprendedores" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <h2 className="titulo-principal text-center">Beneficios para Emprendedores</h2>
          <p className="lead text-center">¡Maximiza tu visibilidad y conecta con más clientes!</p>
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-4 col-lg-4">
              <BenefitCard 
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
              />
            </div>
          ))}
        </div>
        <div className="text-center mb-4 mt-5">
          <button
            className="btn cta-btn me-2 cta-btn-primary"
            onClick={onLoginClick}
          >
            Ingresar a mi cuenta
          </button>
          <button
            className="btn cta-btn cta-btn-success"
            onClick={onRegistroClick}
          >
            Registrar emprendimiento
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmprendedoresSection;