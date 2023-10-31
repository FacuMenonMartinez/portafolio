import pdf from "../../recursos/iconos/pdf-ico.png";
import descargar from "../../recursos/iconos/descargar-ico.png";
import curriculum from "../../recursos/cv/FacundoMenonMartinez.pdf";
import "./cv.css";

function Cv() {
    return (
        <section className="contenedor-seccion">
            <article className="contenedor-cv">
                <div className="curriculum-item">
                    <a href={curriculum} target="_blank"><img src={pdf} /></a>
                    <p>verCurriculum.pdf</p>
                </div>
                <div className="curriculum-item">
                    <a href={curriculum} download="FacundoMenonMartinez.pdf"><img src={descargar} /></a>
                    <p>descargarCurriculum.exe</p>
                </div>

            </article>
        </section>
    )
}

export default Cv