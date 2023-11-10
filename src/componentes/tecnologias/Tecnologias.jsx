import bootstrap from "../../recursos/iconos/bootstrap-ico.png"
import css from "../../recursos/iconos/css-ico.png"
import html from "../../recursos/iconos/html-ico.png"
import javaScript from "../../recursos/iconos/js-ico.png"
import git from "../../recursos/iconos/git-ico.png"
import sass from "../../recursos/iconos/sass-ico.png"
import react from "../../recursos/iconos/react-ico.png"

import "./tecnologias.css";
import'animate.css';


function Tecnologias() {
    return (
        <section className="contenedor-seccion">

            <article className="animate__animated animate__fadeIn tecnologias-contenedor">
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={sass} />
                    <p>sass.exe</p>

                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={bootstrap} />
                    <p>bootstrap.exe</p>


                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={git} />
                    <p>git.exe</p>


                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={react} />
                    <p>react.exe</p>

                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={javaScript} />
                    <p>javaScript.exe</p>


                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={css} />
                    <p>css.exe</p>

                </div>
                <div className="contenedor-iconos">
                    <img className="tecnologias-iconos" src={html} />
                    <p>html.exe</p>

                </div>
            </article>
        </section>
    )
}

export default Tecnologias