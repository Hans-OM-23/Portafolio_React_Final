export default function SobreMi() {
    return (
        <section className="about">
            <div className="container">
                <h2 className="text-center mb-5">Sobre mí</h2>
                <div className="about-container row align-items-start g-5">
                    <div className="about-img fade-in col-lg-4 text-center order-1 order-lg-1">
                        <img src="/img/Hans.png" alt="Mi foto" />
                    </div>

                    <div className="about-content fade-in col-lg-8 order-2 order-lg-2">
                        <p>
                            ¡Hola! Soy <strong>HANS</strong>, Estudiante y colaborador que empieza a experimentar el mundo laboral.
                            Tengo experiencia en <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>HTML, CSS, JavaScript</span> y frameworks
                            actuales.
                        </p>

                        <ul className="list-group mb-4">
                            <li className="list-group-item bg-transparent border-0 px-0 py-2 text-light d-flex justify-content-between align-items-center">
                                <span className="fw-semibold">Ciudad:</span>
                                <span className="text-muted">Huancayo, Perú</span>
                            </li>
                            <li className="list-group-item bg-transparent border-0 px-0 py-2 text-light d-flex justify-content-between align-items-center">
                                <span className="fw-semibold">Carrera:</span>
                                <span className="text-muted">Ing. de Sistemas e Informática</span>
                            </li>
                            <li className="list-group-item bg-transparent border-0 px-0 py-2 text-light d-flex justify-content-between align-items-center">
                                <span className="fw-semibold">Enfoque:</span>
                                <span className="text-muted">Desarrollo web y experiencia de usuario</span>
                            </li>
                        </ul>

                        <div className="stats-vertical mb-4">
                            <div className="stat-card fade-in mb-3 d-flex align-items-center justify-content-center">
                                🚀 3 Proyectos
                            </div>
                            <div className="stat-card fade-in d-flex align-items-center justify-content-center">
                                ⏳ 1 año de experiencia
                            </div>
                        </div>

                        <div className="mb-3">
                            <span className="fw-semibold" style={{ color: '#D4AF37', fontSize: '1.2em' }}>Intereses:</span>
                        </div>
                        <div className="d-flex flex-wrap gap-3">
                            <span className="badge rounded-pill" style={{ backgroundColor: '#D4AF37', color: '#2A0505', fontSize: '1.05em', padding: '10px 18px' }}>Front‑End</span>
                            <span className="badge rounded-pill" style={{ backgroundColor: '#D4AF37', color: '#2A0505', fontSize: '1.05em', padding: '10px 18px' }}>UX / UI</span>
                            <span className="badge rounded-pill" style={{ backgroundColor: '#D4AF37', color: '#2A0505', fontSize: '1.05em', padding: '10px 18px' }}>Diseño responsivo</span>
                            <span className="badge rounded-pill" style={{ backgroundColor: '#D4AF37', color: '#2A0505', fontSize: '1.05em', padding: '10px 18px' }}>Aprendizaje continuo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
