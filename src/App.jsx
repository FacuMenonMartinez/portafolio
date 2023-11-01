import cv from "./recursos/iconos/pdf-ico.png";
import proyectos from "./recursos/iconos/proyecto-ico.png";
import tecnologias from "./recursos/iconos/tecnologia-ico.png";
import sobreMi from "./recursos/avatar-2.jpeg";

import Ventana from "./componentes/ventana/Ventana";
import './App.css';

function App() {


  return (
    <div className="contenedor-general">
      <section className="iconos-secciones">
        <img className="iconos-escritorio" src={sobreMi} />
        <img className="iconos-escritorio" src={proyectos} />
        <img className="iconos-escritorio" src={tecnologias} />
        <img className="iconos-escritorio" src={cv} />
      </section>
      <Ventana />
    </div>
  )
}

export default App
