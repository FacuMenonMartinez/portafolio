import github from "../../recursos/iconos/github-ico.png";
import internet from "../../recursos/iconos/internet-ico.png";
import "./proyectoDescripcion.css";
function ProyectoDescripcion({ nombre, descripcion, img, enlace, repositorio }) {


    return (
        <article className="contenedor-proyecto-descripcion">
            <hader className="proyecto-header">
                <h3>{nombre}</h3>
            </hader>

            <main className="proyecto-main" >
                <p className="proyecto-descripcion">{descripcion}</p>
                <img className="proyecto-imagen" src={img} />
            </main>

            <footer className="proyecto-footer">
                <a target="_blank" href={enlace}><img src={internet} /></a>
                <a target="_blank" href={repositorio}><img src={github} /></a>
            </footer>


        </article>
    )
}

export default ProyectoDescripcion