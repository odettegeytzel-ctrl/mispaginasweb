import { useState } from 'react'
import { WHATSAPP_NUMBER } from '../data/siteData'

const initial = { name: '', business: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})
  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = async (event) => {
    event.preventDefault()
    const next = {}
    Object.entries(form).forEach(([key, value]) => { if (!value.trim()) next[key] = 'Este campo es obligatorio.' })
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Escribe un correo electrónico válido.'
    if (Object.keys(next).length) return setErrors(next)
    setErrors({}); setStatus('sending')
    try {
      const result = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!result.ok) throw new Error()
      setStatus('success'); setForm(initial)
    } catch { setStatus('error') }
  }
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría solicitar una cotización para mi proyecto web.')}`
  return <section id="contacto" className="section contact"><div className="container contact-grid">
    <div className="contact-copy reveal"><p className="eyebrow">CONTACTO</p><h2>Solicita tu <em>cotización.</em></h2><p>Cuéntame qué necesitas y me pondré en contacto contigo.</p><div className="contact-line"></div><p className="contact-small">También puedes escribirme por WhatsApp para contarme rápidamente sobre tu idea.</p><a className="whatsapp" href={whatsappUrl}><span>◔</span> Escribir por WhatsApp <b>→</b></a></div>
    <form className="contact-form reveal" onSubmit={submit} noValidate>
      {status === 'success' && <div className="success" role="status">¡Gracias! Tu solicitud fue recibida correctamente.</div>}
      {status === 'error' && <div className="error-message" role="alert">No fue posible enviar la solicitud. Intenta nuevamente o escríbeme por WhatsApp.</div>}
      <label>Nombre<input name="name" value={form.name} onChange={change} aria-invalid={!!errors.name}/>{errors.name && <small>{errors.name}</small>}</label>
      <label>Negocio o empresa<input name="business" value={form.business} onChange={change} aria-invalid={!!errors.business}/>{errors.business && <small>{errors.business}</small>}</label>
      <div className="form-pair"><label>Correo electrónico<input type="email" name="email" value={form.email} onChange={change} aria-invalid={!!errors.email}/>{errors.email && <small>{errors.email}</small>}</label><label>Teléfono<input type="tel" name="phone" value={form.phone} onChange={change} aria-invalid={!!errors.phone}/>{errors.phone && <small>{errors.phone}</small>}</label></div>
      <label>Mensaje<textarea name="message" value={form.message} onChange={change} rows="4" aria-invalid={!!errors.message}></textarea>{errors.message && <small>{errors.message}</small>}</label>
      <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar solicitud'} <span>→</span></button>
    </form>
  </div></section>
}
