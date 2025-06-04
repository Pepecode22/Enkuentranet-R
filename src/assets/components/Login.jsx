import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }
    
    // Aquí iría la lógica de autenticación real
    console.log('Login attempt with:', { email, password });
    
    // Simulamos login exitoso
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <img 
            src="/images/logo.svg" 
            alt="Enkuentranet Logo" 
            width="150" 
            className="mb-3"
          />
          <h2>Iniciar Sesión</h2>
        </div>
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Ingresar
          </button>
          
          <div className="text-center">
            <p className="mb-0">
              ¿No tienes cuenta? <a href="/register" className="text-primary">Regístrate</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;