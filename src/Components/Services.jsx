import { FcDocument, FcInspection, FcShop } from "react-icons/fc"
import Swal from "sweetalert2"

export default function Services() {
  const mostrarAlerta = () => {
    Swal.fire({
      title: "Nuestros Productos",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/10/07/15/game-2389215_1280.png",
      imageWidth: 450,
      imageHeight: 400,
      text: "Visita nuetro catalogo de productos para mas información.",
    });
  };

  const mostrarAlerta1 = () => {
    Swal.fire({
      icon: "info",
      title: "Soporte",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas libero vestibulum ex egestas laoreet. Cras venenatis laoreet nisi et bibendum. Aliquam sagittis purus eget augue ultricies facilisis. Nunc non facilisis nunc. Cras molestie, eros nec dignissim condimentum, sapien ex pretium orci, et suscipit justo lectus in velit. Vestibulum suscipit purus ac fermentum posuere. Praesent in ligula felis. In ut vestibulum augue, in consectetur urna. Fusce rutrum ornare viverra.",
    });
  };

  const mostrarAlerta2 = () => {
    Swal.fire({
      title: "Documentación",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png",
      imageWidth: 400,
      imageHeight: 400,
      html: "<nav><a href='#' >Visita el Link</a></nav>",
    });
  };
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 style={{ color: "black" }} className="pb-2 border-bottom">
        Nuestros Servicios!
      </h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h2 style={{ color: "black" }}>Productos</h2>
          <br />
          <FcShop />
          <br /><br />
          <p style={{ color: "black" }}>
            Paragraph of text beneath the heading to explain the heading. We ll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={mostrarAlerta} className="btn btn-dark rounded-pill">+ Info</button>
          </div>
        </div>
        <div className="feature col">
          <h2 style={{ color: "black" }}>Soporte</h2>
          <br />
          <FcInspection />
          <br /><br />
          <p style={{ color: "black" }}>
            Paragraph of text beneath the heading to explain the heading. We ll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={mostrarAlerta1} className="btn btn-dark rounded-pill">+ Info</button>
          </div>
        </div>
        <div className="feature col">
          <h2 style={{ color: "black" }}>Ducumentación</h2>
          <br />
          <FcDocument />
          <br /><br />
          <p style={{ color: "black" }}>
            Paragraph of text beneath the heading to explain the heading. We ll add onto it with another sentence and probably just keep going until we run out of words.
          </p>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={mostrarAlerta2} className="btn btn-dark rounded-pill">+ Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
