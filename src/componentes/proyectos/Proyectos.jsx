import proyectoCatar from "../../recursos/proyectos/proyectoCatar-min.webp";
import elBibliotecario from "../../recursos/proyectos/elBibliotecario-min.webp";
import notaDePaso from "../../recursos/proyectos/notaDePaso-min.webp";
import sombreroSeleccionador from "../../recursos/proyectos/sombreroSeleccionador-min.webp";
import github from "../../recursos/iconos/github-ico.png";
import ProyectoDescripcion from "../proyectoDescripcion/ProyectoDescripcion";
import "./proyectos.css";
import { useState } from "react";

const proyectosData=[
    {
        nombre: "Nota de paso",
        img:`${notaDePaso}`,
        descripcion: "Este proyecto fue desarrollado con React js. Simula ser un ecommerce de productos musicales. Los productos y pedidos se cargan en una base de datos en firebase.",
        enlace: "https://notadepaso-30936.web.app/",
        repositorio: "https://github.com/FacuMenonMartinez/notaDePasoEcommerce"
    },
        {
        nombre: "Proyecto Catar",
        img:`${proyectoCatar}`,
        descripcion: "Este proyecto fue desarrollado con HTML, CSS y librerías de animación. Simula ser un sitio con el resumen del mundial Catar 2022 con información, videos y resúmenes.",
        enlace: "https://facumenonmartinez.github.io/PF-MenonMartinez/",
        repositorio: "https://github.com/FacuMenonMartinez/PF-MenonMartinez"
    },
        {
        nombre: "El bibliotecario",
        img:`${elBibliotecario}`,
        descripcion: "Este proyecto fue desarrollado con HTML, CSS y JavaScript. Simula ser un ecommerce de libros con clientes y carrito que se guardan en el storage.",
        enlace: "https://facumenonmartinez.github.io/proyectoFinalFacundoMenonMartinez/",
        repositorio: "https://github.com/FacuMenonMartinez/proyectoFinalFacundoMenonMartinez"
    },
        {
        nombre: "Sombrero seleccionador",
        img:`${sombreroSeleccionador}`,
        descripcion: "Este proyecto fue desarrollado con HTML, CSS y JavaScript. Simula ser un sitio fandom de Harry Potter con tienda virtual donde se pueden filtrar los productos.",
        enlace: "https://facumenonmartinez.github.io/sombreroSeleccionador/",
        repositorio: "https://github.com/FacuMenonMartinez/sombreroSeleccionador"

    }
]

function Proyectos() {

    const [mostrarProyectos, setMostrarProyectos] = useState('');


    const irAlProyecto=(proyecto)=>{
        const seleccionarProyecto = proyectosData.find(item=> item.nombre === proyecto);
        setMostrarProyectos(seleccionarProyecto);
    }

    const irAtras =()=>{
        setMostrarProyectos('');
    }

    return (
        <section className="contenedor-seccion">
            <article className="contenedor-proyectos">
                {mostrarProyectos === '' 
                ?(proyectosData.map(item=>{
                    return(
                    <div key={item.nombre} onClick={()=>{irAlProyecto(item.nombre)}} className="proyecto-item">
                    <img className="proyecto-img" src={item.img} />
                    <p>{item.nombre}</p>
                    </div>)
                }))
                :<section className="seccion-descripcion">
                    <div className="contenedor-irAtras" onClick={irAtras}>
                     <span className="material-symbols-outlined flecha-irAtras">arrow_back</span>
                    </div>
                    <ProyectoDescripcion nombre={mostrarProyectos.nombre} descripcion={mostrarProyectos.descripcion} img={mostrarProyectos.img} enlace={mostrarProyectos.enlace} repositorio={mostrarProyectos.repositorio}/> 
                </section>
                    }
            </article>
        </section>
    )
}

export default Proyectos