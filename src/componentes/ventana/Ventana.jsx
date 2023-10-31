import Sobre_mi from '../sobre_mi/Sobre_mi';
import Tecnologias from '../tecnologias/Tecnologias';
import Cv from '../cv/Cv';
import Proyectos from '../proyectos/Proyectos';
import './ventana.css';

function Ventana() {
    return (
        <section className="ventana-renderizado">

            <div className='barra-superior'>
                <img />
                <h4>Nombre de la app</h4>
                <div>
                    <span class="material-symbols-outlined">minimize</span>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>
            {/* <Sobre_mi/> */}
            {/* <Tecnologias /> */}
            {/* <Cv/> */}
            <Proyectos/>
        </section>
    )
}

export default Ventana