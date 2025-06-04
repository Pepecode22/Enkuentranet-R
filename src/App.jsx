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
import RouterPage from './assets/Pages/RouterPage';
import { useEffect } from 'react';

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
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Router" element={<RouterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;