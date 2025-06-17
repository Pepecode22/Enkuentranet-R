import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

const Navbar = ({ onLoginClick }) => {
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    const handleScroll = () => {
      const sections = ['home', 'emprendedores', 'encontrar', 'ayuda'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <div className="col-md-3 text-center">
          <RouterLink
            className="navbar-brand"
            to="/"
            onClick={e => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              // Si no está en home, deja que RouterLink navegue normalmente
            }}
          >
            <img src="src/assets/images/logo.svg" alt="Logo" width="150" className="align-top" />
          </RouterLink>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarCenteredLinks"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col-md-6 collapse navbar-collapse" id="navbarCenteredLinks">
          <ul className="navbar-nav mx-auto justify-content-center">
            {location.pathname === '/' ? (
              <>
                <li className="nav-item">
                  <ScrollLink
                    to="encontrar"
                    spy={false}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`nav-link ${activeLink === 'encontrar' ? 'active' : ''}`}
                  >
                    Encontrar
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="emprendedores"
                    spy={false}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`nav-link ${activeLink === 'emprendedores' ? 'active' : ''}`}
                  >
                    Emprendedores
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to="ayuda"
                    spy={false}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`nav-link ${activeLink === 'ayuda' ? 'active' : ''}`}
                  >
                    Ayuda
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <RouterLink className="nav-link" to="/">Emprendedores</RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink className="nav-link" to="/">Encontrar</RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink className="nav-link" to="/">Ayuda</RouterLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-md-3 text-center">
          <button className="navbar-login btn btn-link p-0" onClick={onLoginClick}>
            <img src="src/assets/images/perfil.svg" alt="login" width="40" className="d-inline-block align-top" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;