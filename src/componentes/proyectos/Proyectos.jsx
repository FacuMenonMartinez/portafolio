import proyectoCatar from "../../recursos/proyectos/proyectoCatar-min.webp";
import elBibliotecario from "../../recursos/proyectos/elBibliotecario-min.webp";
import notaDePaso from "../../recursos/proyectos/notaDePaso-min.webp";
import sombreroSeleccionador from "../../recursos/proyectos/sombreroSeleccionador-min.webp";
import github from "../../recursos/iconos/github-ico.png";
import "./proyectos.css";

function Proyectos() {
    return (
        <section className="contenedor-seccion">
            <article className="contenedor-proyectos">
                <div className="proyecto-item">
                    <img className="proyecto-img" src={proyectoCatar} />
                    <p>proyectoCatar.exe</p>
                    <div className="proyecto-descripcion">
                        <p>Sitio realizado como proyecto final de desarrollo web en Coderhouse<br />
                            Fue desarrollado con HTML, CSS y librerías de animaciones</p>
                        <div className="proyecto-enlaces">
                            <img src={github} />
                            <img src={github} />
                        </div>
                    </div>
                </div>
                <div className="proyecto-item">
                    <img className="proyecto-img" src={proyectoCatar} />
                    <p>proyectoCatar.exe</p>
                    <div className="proyecto-descripcion">
                        <p>Sitio realizado como proyecto final de desarrollo web en Coderhouse<br />
                            Fue desarrollado con HTML, CSS y librerías de animaciones</p>
                        <div className="proyecto-enlaces">
                            <img src={github} />
                            <img src={github} />
                        </div>
                    </div>
                </div>
                <div className="proyecto-item">
                    <img className="proyecto-img" src={proyectoCatar} />
                    <p>proyectoCatar.exe</p>
                    <div className="proyecto-descripcion">
                        <p>Sitio realizado como proyecto final de desarrollo web en Coderhouse<br />
                            Fue desarrollado con HTML, CSS y librerías de animaciones</p>
                        <div className="proyecto-enlaces">
                            <img src={github} />
                            <img src={github} />
                        </div>
                    </div>
                </div>
                <div className="proyecto-item">
                    <img className="proyecto-img" src={proyectoCatar} />
                    <p>proyectoCatar.exe</p>
                    <div className="proyecto-descripcion">
                        <p>Sitio realizado como proyecto final de desarrollo web en Coderhouse<br />
                            Fue desarrollado con HTML, CSS y librerías de animaciones</p>
                        <div className="proyecto-enlaces">
                            <img src={github} />
                            <img src={github} />
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Proyectos