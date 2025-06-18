import { useState } from 'react';

const AyudaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Mensaje enviado con éxito');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert(data.msg || 'Error al enviar el mensaje');
      }
    } catch (err) {
      alert('Error de conexión');
    }
  };

  return (
    <section id="ayuda" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Centro de Ayuda</h2>
          <p className="lead">Encuentra respuestas o contáctanos directamente.</p>
        </div>
        
        <div className="row g-4">
          {/* FAQ */}
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion">
              {/* Pregunta 1 */}
              <div className="accordion-item mb-3">
                <h3 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne"
                  >
                    ¿Cómo me registro como emprendedor?
                  </button>
                </h3>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Para registrarte como emprendedor:</p>
                    <ol>
                      <li>Haz clic en "Emprendedores" en el menú superior o en el Ícono de perfil.</li>
                      <li>Selecciona "Registrarme".</li>
                      <li>Completa el formulario con tus datos.</li>
                      <li>Verifica tu correo electrónico.</li>
                      <li>¡Listo! Ya puedes configurar tu perfil.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Pregunta 2 */}
              <div className="accordion-item mb-3">
                <h3 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo"
                  >
                    ¿Cómo busco productos o servicios?
                  </button>
                </h3>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingTwo" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Puedes buscar productos o servicios de dos formas:</p>
                    <ul>
                      <li>Usando el buscador en la página "Encontrar".</li>
                      <li>Explorando las categorías disponibles.</li>
                    </ul>
                    <p>También puedes filtrar por ubicación para encontrar emprendedores cerca de ti.</p>
                  </div>
                </div>
              </div>

              {/* Pregunta 3 */}
              <div className="accordion-item mb-3">
                <h3 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree"
                  >
                    ¿Cómo actualizo mi información de contacto?
                  </button>
                </h3>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingThree" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Para actualizar tu información:</p>
                    <ol>
                      <li>Inicia sesión en tu cuenta.</li>
                      <li>Ve a "Mi Perfil".</li>
                      <li>Haz clic en "Editar Información".</li>
                      <li>Realiza los cambios necesarios.</li>
                      <li>Guarda los cambios.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Pregunta 4 */}
              <div className="accordion-item mb-3">
                <h3 className="accordion-header" id="headingFour">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour"
                  >
                    ¿Es gratis registrarse en Enkuentranet?
                  </button>
                </h3>
                <div 
                  id="collapseFour" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingFour" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>Sí, registrarse y usar Enkuentranet es completamente gratuito tanto para emprendedores.</p>
                    <p>Ofrecemos funcionalidades básicas sin costo y en el futuro podríamos ofrecer servicios premium opcionales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario de Contacto */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="contactform">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <select 
                  className="form-select" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecciona un asunto</option>
                  <option value="technical">Problema técnico</option>
                  <option value="account">Consulta sobre mi cuenta</option>
                  <option value="suggestions">Sugerencias</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyudaSection;