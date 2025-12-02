export default function Inicio() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 hero-content fade-in">
                        <h1>Hola, soy <span>Hans</span></h1>
                        <h2>Futuro, Ingeniero en Sistemas e Infomatica</h2>
                        <p>
                            Bienvenido a mi portafolio. Revisa distincas cosas sobre mí, habilidades,
                            proyectos y formas de contacto.
                        </p>
                        <a href="/proyectos" className="btn">Proyectos</a>
                    </div>
                    <div className="col-md-6 hero-img fade-in text-center text-md-end">
                        <img src="/img/perfil.jpg" alt="Foto de perfil" />
                    </div>
                </div>
            </div>
        </section>
    )
}
