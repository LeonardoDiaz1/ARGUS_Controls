import './css/Contact.css'

export default function Contact() {
  return (
    <section className="text-center">
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 style={{ color: "black" }} className="pb-2 border-bottom">Nosotros te Contáctamos!</h2>
        <br /><br />
        <h5 style={{ color: "black" }}>Ingresa tus Datos Correctamente!</h5>
        <br />
        <center>
          <div className="inputbox">
            <input type="text" required="required" />
            <span>Nombre</span>
          </div>
        </center>
        <br />
        <center>
          <div className="inputbox">
            <input type="email" required="required" />
            <span>Correo electrónico</span>
            <small className="text-body-secondary">example@example.com</small>
          </div>
        </center>
        <br />
        <center>
          <div className="inputbox">
            <input type="tel" required="required" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            <span>Teléfono</span>
            <small className="text-body-secondary">Example: 722-360-4694</small>
          </div>
        </center>
        <br /><br />
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-dark rounded-pill">Enviar</button>
        </div>
      </div>
    </section>
  );
}
