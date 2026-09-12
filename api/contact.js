const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;')

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Método no permitido.' })
  }

  const { name, business, email, phone, message } = request.body || {}
  const fields = { name, business, email, phone, message }
  const missing = Object.values(fields).some((value) => !String(value || '').trim())
  if (missing || !emailPattern.test(email)) return response.status(400).json({ error: 'Completa todos los campos con información válida.' })
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) return response.status(500).json({ error: 'El servicio de contacto aún no está configurado.' })

  const safe = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, escapeHtml(value.trim())]))
  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Desarrollo Web <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL], reply_to: email.trim(), subject: `Nueva solicitud web: ${safe.name}`,
      html: `<h2>Nueva solicitud de cotización</h2><p><strong>Nombre:</strong> ${safe.name}</p><p><strong>Negocio o empresa:</strong> ${safe.business}</p><p><strong>Correo:</strong> ${safe.email}</p><p><strong>Teléfono:</strong> ${safe.phone}</p><p><strong>Mensaje:</strong><br>${safe.message.replace(/\n/g, '<br>')}</p>`,
    }),
  })
  if (!resendResponse.ok) { console.error('Resend contact error:', await resendResponse.text()); return response.status(502).json({ error: 'No fue posible enviar tu solicitud. Intenta nuevamente.' }) }
  return response.status(200).json({ ok: true })
}
