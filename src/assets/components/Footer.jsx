const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Enkuentranet</h5>
            <p>Conectando emprendedores con su comunidad local.</p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p><i className="fas fa-envelope me-2"></i> Devs@DevErgentes.com</p>
          </div>
          <div className="col-md-4">
            <h5>Desarrollado por</h5>
            <p>DevErgentes™</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy;Enkuentranet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;