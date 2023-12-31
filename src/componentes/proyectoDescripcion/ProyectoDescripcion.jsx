import github from "../../recursos/iconos/github-ico.png";
import internet from "../../recursos/iconos/internet-ico.png";
import "./proyectoDescripcion.css";
import'animate.css';

function ProyectoDescripcion({ nombre, descripcion, img, enlace, repositorio }) {


    return (
        <article className="animate__animated animate__zoomIn contenedor-proyecto-descripcion">
            <hader className="proyecto-header">
                <h3>{nombre}</h3>
            </hader>

            <main className="proyecto-main" >
                <p className="proyecto-descripcion">{descripcion}</p>
                <img className="proyecto-imagen" src={img} />
            </main>

            <footer className="proyecto-footer">
                <a target="_blank" href={enlace}><img className="proyecto-footer-img" src={internet} /></a>
                <a target="_blank" href={repositorio}><img className="proyecto-footer-img" src={github} /></a>
            </footer>


        </article>
    )
}

export default ProyectoDescripcion