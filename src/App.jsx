import cv from "./recursos/iconos/pdf-ico.png";
import proyectos from "./recursos/iconos/proyecto-ico.png";
import tecnologias from "./recursos/iconos/tecnologia-ico.png";
import sobreMi from "./recursos/avatar-2.jpeg";

import Ventana from "./componentes/ventana/Ventana";
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [menu, setMenu] = useState('Sobre Mi');
  const [imgBarra, setImgBarra] =useState(sobreMi);


  const handleClick = (seccion,icono) => {
    setMenu(seccion);
    setImgBarra(icono)
  }

  useEffect(() => {
    if (menu === 'Sobre Mi') {
      document.getElementById('sobreMi-item').classList.add('icono-item-seleccionado');
      document.getElementById('tecnologias-item').classList.remove('icono-item-seleccionado');
      document.getElementById('proyectos-item').classList.remove('icono-item-seleccionado');
      document.getElementById('cv-item').classList.remove('icono-item-seleccionado');

    } else if (menu === 'Tecnologias') {
      document.getElementById('tecnologias-item').classList.add('icono-item-seleccionado');
      document.getElementById('sobreMi-item').classList.remove('icono-item-seleccionado');
      document.getElementById('proyectos-item').classList.remove('icono-item-seleccionado');
      document.getElementById('cv-item').classList.remove('icono-item-seleccionado');
    } else if (menu === 'Proyectos') {
      document.getElementById('proyectos-item').classList.add('icono-item-seleccionado');
      document.getElementById('tecnologias-item').classList.remove('icono-item-seleccionado');
      document.getElementById('sobreMi-item').classList.remove('icono-item-seleccionado');
      document.getElementById('cv-item').classList.remove('icono-item-seleccionado');
    } else if (menu === 'Curriculum') {
      document.getElementById('cv-item').classList.add('icono-item-seleccionado');
      document.getElementById('tecnologias-item').classList.remove('icono-item-seleccionado');
      document.getElementById('proyectos-item').classList.remove('icono-item-seleccionado');
      document.getElementById('sobreMi-item').classList.remove('icono-item-seleccionado');
    }
  }, [menu])

  return (
    <div className="contenedor-general">
      <section className="iconos-secciones">
        <div id="sobreMi-item" className="icono-item" onClick={() => { handleClick('Sobre Mi', sobreMi) }}>
          <img className="iconos-escritorio" src={sobreMi} />
          <p>Sobre Mí</p>
        </div>
        <div id="tecnologias-item" className="icono-item" onClick={() => { handleClick('Tecnologias', tecnologias) }}>
          <img className="iconos-escritorio" src={tecnologias} />
          <p>Tecnologías</p>
        </div>
        <div id="proyectos-item" className="icono-item" onClick={() => { handleClick('Proyectos', proyectos) }}>
          <img className="iconos-escritorio" src={proyectos} />
          <p>Proyectos</p>
        </div>
        <div id="cv-item" className="icono-item" onClick={() => { handleClick('Curriculum', cv) }}>
          <img className="iconos-escritorio" src={cv} />
          <p>Curriculum</p>
        </div>

      </section>
      <Ventana seccion={menu} icono={imgBarra} />
    </div>
  )
}

export default App
