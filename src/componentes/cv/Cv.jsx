import pdf from "../../recursos/iconos/pdf-ico.png";
import descargar from "../../recursos/iconos/descargar-ico.png";
import curriculum from "../../recursos/cv/FacundoMenonMartinez.pdf";
import "./cv.css";
import'animate.css';

function Cv() {
    return (
        <section className="animate__animated animate__fadeIn contenedor-seccion">
            <article className="contenedor-cv">
                <div className="curriculum-item">
                    <a href={curriculum} target="_blank"><img className="cv-icono" src={pdf} /></a>
                    <p>verCurriculum.pdf</p>
                </div>
                <div className="curriculum-item">
                    <a href={curriculum} download="FacundoMenonMartinez.pdf"><img className="cv-icono" src={descargar} /></a>
                    <p>descargarCurriculum.exe</p>
                </div>

            </article>
        </section>
    )
}

export default Cv