import * as ReactScroll from 'react-scroll';
const { Link } = ReactScroll;

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1>Conectando emprendedores con la comunidad</h1>
            <p className="lead">Descubre productos y servicios locales cerca de ti o promociona tu emprendimiento en nuestra página. ¡Es completamente gratuito!</p>
            <div className="cta-buttons">
              <Link 
                to="emprendedores" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="btn btn-primary"
              >
                Soy Emprendedor
              </Link>
              <Link 
                to="encontrar" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className="btn btn-outline-primary"
              >
                Buscar Servicios
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="src/assets/images/emprendedores.png" 
              alt="Comunidad" 
              className="img-fluid" 
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          margin-bottom: 0; /* Reduce or remove bottom margin */
          padding-bottom: 0; /* Reduce or remove bottom padding */
        }

        .hero-section + .encontrar {
          margin-top: 0;
        }

        .encontrar {
          margin-top: 0; /* Reduce or remove top margin */
          padding-top: 0; /* Reduce or remove top padding */
        }
      `}</style>
    </section>
  );
};

export default HeroSection;