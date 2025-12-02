export default function Proyectos() {
    return (
        <section className="projects">
            <div className="container">
                <h2 className="section-title fade-in text-center">Mis Proyectos</h2>
                <p className="section-subtitle fade-in text-center">Algunos de mis proyectos más recientes</p>

                <div className="row g-4 justify-content-center projects-container">
                    <div className="col-md-6 col-lg-5">
                        <div className="project-card fade-in card h-100">
                            <img src="/img/proyecto1.png" className="card-img-top" alt="Proyecto 1" />
                            <div className="project-info card-body">
                                <h3 className="card-title">Landing Page de cosmetologia-yudit</h3>
                                <p className="card-text">Diseño simple con enfoque visual para una cosmetologia local.</p>
                                <div className="project-links d-flex gap-2">
                                    <a
                                        href="https://cosmetologia-yudit.vercel.app/index.html"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://github.com/Hans-OM-23/COSMETOLOGIA/tree/main"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="project-card fade-in card h-100">
                            <img src="/img/proyecto2.png" className="card-img-top" alt="Proyecto 2" />
                            <div className="project-info card-body">
                                <h3 className="card-title">ASTEROID-ASSAULT</h3>
                                <p className="card-text">Videjuego sobre destruir asteroides en Unity.</p>
                                <div className="project-links d-flex gap-2">
                                    <a
                                        href="https://www.figma.com/proto/WCYSuYtT4UMatCR0MUYcPI/ASTEROID-ASSAULT?node-id=7-2&node-type=canvas&t=iwofygeibr5MsFJD-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2&show-proto-sidebar=1"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://drive.google.com/drive/folders/1IVZd5-Dvcp6F2F1iOFvAkwlDG_1g0YCi?usp=sharing"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="project-card fade-in card h-100">
                            <img src="/img/proyecto3.png" className="card-img-top" alt="Proyecto 3" />
                            <div className="project-info card-body">
                                <h3 className="card-title">Proyecto 3</h3>
                                <p className="card-text">Diseño simple con enfoque visual para una Jugueteria en React.</p>
                                <div className="project-links d-flex gap-2">
                                    <a
                                        href="https://toysperu-jugueteria.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://github.com/Hans-OM-23/TOYSPERU_JUGUETERIA.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="project-card fade-in card h-100">
                            <img src="/img/proyecto4.png" className="card-img-top" alt="Proyecto 4" />
                            <div className="project-info card-body">
                                <h3 className="card-title">Proyecto 4</h3>
                                <p className="card-text">Diseño simple con enfoque visual para una Panaderia, que es un proyecto creado en clase.</p>
                                <div className="project-links d-flex gap-2">
                                    <a
                                        href="https://supabase-delicia-s15.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://github.com/yanpol14/supabase-delicia_S15.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="project-card fade-in card h-100">
                            <img src="/img/proyecto5.png" className="card-img-top" alt="Proyecto 5" />
                            <div className="project-info card-body">
                                <h3 className="card-title">Proyecto 5</h3>
                                <p className="card-text">Diseño simple con enfoque visual para una plastiqueria comun   .</p>
                                <div className="project-links d-flex gap-2">
                                    <a
                                        href="https://cosmetologia-yudit.vercel.app/index.html"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href="https://github.com/RickCrispin/HuancaPlastic.git"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards de destacados */}
                <div className="container mt-5 pt-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 border-0" style={{ backgroundColor: '#4E2A2A', color: '#F5F5F5' }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#D4AF37' }}>Desarrollo Front-End</h5>
                                    <p className="card-text">
                                        Construyo interfaces modernas con HTML, CSS y JavaScript,
                                        cuidando la claridad y la experiencia del usuario.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0" style={{ backgroundColor: '#4E2A2A', color: '#F5F5F5' }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#D4AF37' }}>UX / UI</h5>
                                    <p className="card-text">
                                        Me enfoco en diseños limpios, legibles y consistentes,
                                        con una paleta elegante vino y dorado.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border-0" style={{ backgroundColor: '#4E2A2A', color: '#F5F5F5' }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#D4AF37' }}>Proyectos Académicos</h5>
                                    <p className="card-text">
                                        Desarrollo proyectos que integran buenas prácticas,
                                        diseño responsive y el uso de librerías como Bootstrap.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
