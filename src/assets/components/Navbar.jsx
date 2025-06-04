import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
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
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <div className="col-md-3 text-center">
          <a className="navbar-brand" href="#home">
            <img src="src/assets/images/logo.svg" alt="Logo" width="150" className="align-top" />
          </a>
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
            <li className="nav-item">
            </li>
            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  to="emprendedores"
                  spy={false}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${activeLink === 'emprendedores' ? 'active' : ''}`}
                >
                  Emprendedores
                </ScrollLink>
              ) : (
                <RouterLink className="nav-link" to="/#emprendedores">
                  Emprendedores
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  to="encontrar"
                  spy={false}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${activeLink === 'encontrar' ? 'active' : ''}`}
                >
                  Encontrar
                </ScrollLink>
              ) : (
                <RouterLink className="nav-link" to="/#encontrar">
                  Encontrar
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  to="ayuda"
                  spy={false}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${activeLink === 'ayuda' ? 'active' : ''}`}
                >
                  Ayuda
                </ScrollLink>
              ) : (
                <RouterLink className="nav-link" to="/#ayuda">
                  Ayuda
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Router">Router</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 text-center">
          <a className="navbar-login" href="/login">
            <img src="src/assets/images/perfil.svg" alt="login" width="40" className="d-inline-block align-top" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;