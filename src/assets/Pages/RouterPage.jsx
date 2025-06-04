import { useState } from 'react';

const loginFormJson = {
  title: "Iniciar Sesión",
  fields: [
    {
      name: "email",
      label: "Correo Electrónico",
      type: "email",
      placeholder: "Ingresa tu correo",
      required: true
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      placeholder: "Ingresa tu contraseña",
      required: true
    }
  ],
  buttonText: "Ingresar"
};

const RouterPage = () => {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState(
    loginFormJson.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const field of loginFormJson.fields) {
      if (field.required && !formData[field.name]) {
        setError("Por favor completa todos los campos");
        return;
      }
    }
    setError("");
    alert("Login exitoso (simulado)");
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <img 
            src="src/assets/images/logo.svg" 
            alt="Enkuentranet Logo" 
            width="150" 
            className="mb-3"
          />
          <h2>{loginFormJson.title}</h2>
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {loginFormJson.fields.map(field => (
            <div className="mb-3" key={field.name}>
              <label htmlFor={field.name} className="form-label">{field.label}</label>
              <input
                type={field.type}
                className="form-control"
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">
            {loginFormJson.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RouterPage;