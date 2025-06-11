import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './assets/components/Navbar';
import HeroSection from './assets/components/HeroSection';
import EmprendedoresSection from './assets/components/EmprendedoresSection';
import EncontrarSection from './assets/components/EncontrarSection';
import AyudaSection from './assets/components/AyudaSection';
import Footer from './assets/components/Footer';
import Login from './assets/components/Login';
import RegistroEmprendimiento from './assets/components/RegistroEmprendimiento';
import { useEffect, useState } from 'react';

function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <HeroSection />
      <EmprendedoresSection />
      <EncontrarSection />
      <AyudaSection />
    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar onLoginClick={() => setShowLogin(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <EmprendedoresSection
                  onLoginClick={() => setShowLogin(true)}
                  onRegistroClick={() => window.location.assign('/registro')}
                />
                <EncontrarSection />
                <AyudaSection />
              </>
            }
          />
          <Route
            path="/registro"
            element={<RegistroEmprendimiento />}
          />
        </Routes>
        <Footer />
        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            onLogin={() => setShowLogin(false)}
            onRegistro={() => {
              setShowLogin(false);
              window.location.assign('/registro');
            }}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;