import avatar from "../../recursos/avatar.png";
import linkedin from "../../recursos/iconos/linkedin-ico.png";
import gmail from "../../recursos/iconos/gmail-ico.png";
import github from "../../recursos/iconos/github-ico.png";



import './sobre_mi.css';
function Sobre_mi() {
    return (
        <section className="contenedor-seccion">
            <article className="contenedor-sobreMi">

                <header className="encabezado-sobreMi">
                    <img className="avatar" src={avatar} />
                    <div className="titulo-sobreMi">
                        <h1>¡Hola! soy Facundo Menon Martinez</h1>
                        <h3>Desarrollador Frontend</h3>
                    </div>
                </header>

                <main>
                    <p className="texto-sobreMi">Siempre me gustó la tecnología y el desarrollo, saber como funcionan las cosas y poder crearlas.
                        También soy músico, y creo que el lado front del desarrollo web tiene un enfoque mas artístico y creativo, por eso decidí comenzar los estudios en este área.
                    </p>
                </main>
                <footer className="footer-sobreMi">
                <a><img className="img-contacto-sobreMi" src={linkedin}/></a>
                <a><img className="img-contacto-sobreMi" src={gmail}/></a>
                <a><img className="img-contacto-sobreMi" src={github}/></a>
                </footer>
            </article>

        </section>
    )
}

export default Sobre_mi