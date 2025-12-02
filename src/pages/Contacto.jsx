import ContactoForm from '../components/ContactoForm'

export default function Contacto() {
    return (
        <section className="contact">
            <div className="container">
                <h2 className="section-title text-center">Contacto</h2>
                <p className="section-subtitle text-center">¿Tienes un proyecto en mente? ¡Hablemos!</p>

                <div className="contact-container row justify-content-center align-items-start g-4">
                    <div className="contact-info col-md-5">
                        <div className="info-item fade-in d-flex align-items-center mb-3">
                            <i className="fas fa-envelope me-3"></i>
                            <p className="mb-0"><strong>Email</strong><br />75937419@continental.edu.pe</p>
                        </div>
                        <div className="info-item fade-in d-flex align-items-center mb-3" style={{ animationDelay: '0.2s' }}>
                            <i className="fas fa-phone me-3"></i>
                            <p className="mb-0"><strong>Teléfono</strong><br />+51 934265818</p>
                        </div>
                        <div className="info-item fade-in d-flex align-items-center" style={{ animationDelay: '0.4s' }}>
                            <i className="fas fa-map-marker-alt me-3"></i>
                            <p className="mb-0"><strong>Ubicación</strong><br />Huancayo, Perú</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <ContactoForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
