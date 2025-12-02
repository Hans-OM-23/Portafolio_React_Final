export default function Habilidades() {
    return (
        <section className="skills">
            <div className="container">
                <h2 className="section-title fade-in text-center">Mis Habilidades</h2>
                <p className="section-subtitle fade-in text-center">Tecnologías y herramientas que domino</p>

                <div className="skills-container row g-4 justify-content-center">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="skill-card fade-in h-100 text-center">
                            <i className="fab fa-html5"></i>
                            <h3>HTML5</h3>
                            <p>Estructura web semántica y optimizada.</p>
                            <div className="progress mt-3" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '90%', backgroundColor: '#D4AF37' }}
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="skill-card fade-in h-100 text-center">
                            <i className="fab fa-css3-alt"></i>
                            <h3>CSS3</h3>
                            <p>Diseños modernos y responsivos.</p>
                            <div className="progress mt-3" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '85%', backgroundColor: '#D4AF37' }}
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="skill-card fade-in h-100 text-center">
                            <i className="fab fa-python"></i>
                            <h3>Python</h3>
                            <p>Desarrollo de programas de uso cotidiano en empresas.</p>
                            <div className="progress mt-3" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '75%', backgroundColor: '#D4AF37' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="skill-card fade-in h-100 text-center">
                            <i className="fab fa-unity"></i>
                            <h3>Unity</h3>
                            <p>Desarrollo de estructura artistica.</p>
                            <div className="progress mt-3" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '70%', backgroundColor: '#D4AF37' }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="skill-card fade-in h-100 text-center">
                            <i className="fab fa-figma"></i>
                            <h3>Figma</h3>
                            <p>Desarrollo de diseño previsualizaciones.</p>
                            <div className="progress mt-3" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: '80%', backgroundColor: '#D4AF37' }}
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
