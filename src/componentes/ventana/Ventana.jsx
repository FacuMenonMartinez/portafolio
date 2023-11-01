import Sobre_mi from '../sobre_mi/Sobre_mi';
import Tecnologias from '../tecnologias/Tecnologias';
import Cv from '../cv/Cv';
import Proyectos from '../proyectos/Proyectos';
import './ventana.css';
import { useEffect, useState } from 'react';

function Ventana({seccion, icono}) {

    const [seccionRender, setSeccionRender] = useState('Sobre Mi');
    // const [iconoBarra, setIconoBarra]=useState()

    useEffect(()=>{
        setSeccionRender(seccion);

    },[seccion])

    return (
        <section className="ventana-renderizado">

            <div className='barra-superior'>
                <img src={icono} />
                <h4>{seccion}</h4>
                <div className='contenedor-botonera'>
                    <span class="material-symbols-outlined">minimize</span>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>
            {seccionRender === 'Proyectos'
            ?<Proyectos/>
            :seccionRender === 'Curriculum'
            ?<Cv/>
            :seccionRender === 'Sobre Mi'
            ?<Sobre_mi/>
            :seccionRender === 'Tecnologias'
            ?<Tecnologias />
            :<Sobre_mi/>}
            
        </section>
    )
}

export default Ventana