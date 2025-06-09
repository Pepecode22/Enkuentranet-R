import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onClose, onLogin, onRegistro }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }
    setError('');
    onLogin();
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100" style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex: 2000, background: 'rgba(0,0,0,0.3)'}}>
      <div className="card p-4" style={{ width: '400px', position: 'relative' }}>
        <button type="button" className="btn-close" style={{position:'absolute', right:10, top:10}} onClick={onClose}></button>
        <div className="text-center mb-4">
          <img 
            src="src/assets/images/logo.svg" 
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
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Ingresar
          </button>
        </form>
        <div className="text-center">
          <p className="mb-0">
            ¿No tienes cuenta?{' '}
            <button className="btn btn-link p-0" style={{color:'#6400E0'}} onClick={onRegistro}>
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;