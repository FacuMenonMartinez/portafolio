import Sobre_mi from '../sobre_mi/Sobre_mi';
import Tecnologias from '../tecnologias/Tecnologias';
import './ventana.css';

function Ventana() {
    return (
        <section className="ventana-renderizado">

            <div className='barra-superior'>
                <img />
                <h4>Nombre de la app</h4>
                <div>
                    <button>Minimizar</button>
                    <button>Restaurar</button>
                    <button>Cerrar</button>
                </div>
            </div>
            {/* <Sobre_mi/> */}
            <Tecnologias/>
        </section>
    )
}

export default Ventana