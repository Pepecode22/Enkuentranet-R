const EncontrarSection = () => {
  return (
    <section id="encontrar" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Encuentra lo que necesitas</h2>
          <p className="lead">Busca por categorías y ubicación</p>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="map-placeholder">
              <img 
                src="https://via.placeholder.com/600x400?text=Mapa+Interactivo" 
                alt="Mapa" 
                className="img-fluid rounded" 
              />
              <p className="mt-3 text-muted">Espacio reservado para integración con mapa interactivo</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Categorías principales</h3>
            <ul className="category-list">
              <li><i className="fas fa-utensils me-2"></i> Alimentos y Bebidas</li>
              <li><i className="fas fa-tshirt me-2"></i> Moda y Accesorios</li>
              <li><i className="fas fa-home me-2"></i> Hogar y Decoración</li>
              <li><i className="fas fa-spa me-2"></i> Bienestar y Salud</li>
              <li><i className="fas fa-tools me-2"></i> Servicios Técnicos</li>
            </ul>
            <div className="search-box mt-4">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Buscar productos o servicios..." 
                />
                <button className="btn btn-primary" type="button">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncontrarSection;