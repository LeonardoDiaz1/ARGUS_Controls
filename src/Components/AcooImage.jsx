import './css/CompImg.css'
import { MdMyLocation } from "react-icons/md";
import Swal from "sweetalert2";

function AcooImg() {
  const mostrarAlerta = () => {
    Swal.fire({
      icon: "info",
      title: "Llámanos!",
      text: "Tel. 01 800 024 0384",
    });
  };
  return (
    <section id="hero">
      <h2 style={{ color: 'white' }}>Controles para Procesos Industriales</h2>
      <br />
      <MdMyLocation style={{ color: "white" }} />
      <br />
      <p>Tenancingo, Estado de México</p>
      <br /><br />
      <div className='d-grid gap-2 col-1 mx-auto'>
        <button onClick={mostrarAlerta} className="btn btn-outline-light">Contactar</button>
      </div>
    </section>
  );
}

export default AcooImg;
