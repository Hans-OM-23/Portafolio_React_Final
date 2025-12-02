import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function ContactoForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess('')
        setError('')

        const { name, email, phone, message } = form

        const { error: supabaseError } = await supabase
            .from('contact_messages')
            .insert([{ name, email, phone, message }])

        if (supabaseError) {
            console.error(supabaseError)
            setError('Ocurrió un error al enviar tu mensaje. Inténtalo nuevamente.')
        } else {
            setSuccess('Mensaje enviado correctamente. ¡Gracias por contactarme!')
            setForm({ name: '', email: '', phone: '', message: '' })
        }

        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form fade-in" style={{ animationDelay: '0.6s' }}>
            <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Tu nombre"
                required
                value={form.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Correo"
                required
                value={form.email}
                onChange={handleChange}
            />
            <input
                type="tel"
                name="phone"
                className="form-control mb-3"
                placeholder="Teléfono"
                required
                value={form.phone}
                onChange={handleChange}
            />
            <textarea
                rows="5"
                name="message"
                className="form-control mb-3"
                placeholder="Déjame un mensaje"
                required
                value={form.message}
                onChange={handleChange}
            />
            <button type="submit" className="btn w-100" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {success && <p className="mt-3 text-success">{success}</p>}
            {error && <p className="mt-3 text-danger">{error}</p>}
        </form>
    )
}
