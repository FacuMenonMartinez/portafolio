import avatar from "../../recursos/avatar.png";
import linkedin from "../../recursos/iconos/linkedin-ico.png";
import gmail from "../../recursos/iconos/gmail-ico.png";
import github from "../../recursos/iconos/github-ico.png";
import'animate.css';




import './sobre_mi.css';
function Sobre_mi() {
    return (
        <section className="animate__animated animate__fadeIn contenedor-seccion">
            <article className="contenedor-sobreMi">

                <header className="encabezado-sobreMi">
                    <div className="contenedor-avatar">
                    <img className="avatar" src={avatar} />

                    </div>
                    <div className="titulo-sobreMi">
                        <h1>Facundo Menon Martinez</h1>
                        <h3>Desarrollador Frontend</h3>
                    </div>
                </header>

                <main>
                    <p className="texto-sobreMi">Siempre me gustó la tecnología y el desarrollo, saber como funcionan las cosas y poder crearlas.
                        También soy músico, y creo que el lado front del desarrollo web tiene un enfoque mas artístico y creativo, por eso decidí comenzar los estudios en este área.
                    </p>
                </main>
                <footer className="footer-sobreMi">
                <a href="https://www.linkedin.com/in/facundo-menon-martinez-870947258/" target="_blank"><img className="img-contacto-sobreMi" src={linkedin}/></a>
                <a href="mailto:facundomenon.m@gmail.com" target="_blank"><img className="img-contacto-sobreMi" src={gmail}/></a>
                <a href="https://github.com/FacuMenonMartinez?tab=repositories" target="_blank"><img className="img-contacto-sobreMi" src={github}/></a>
                </footer>
            </article>

        </section>
    )
}

export default Sobre_mi