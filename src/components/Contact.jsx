import { WHATSAPP_NUMBER } from '../data/siteData'

const message = 'Hola, me gustaría solicitar una cotización para mi proyecto web.'

const hints = [
  ['◫', 'Qué negocio tienes', 'Cuéntame a qué se dedica y a quién quieres llegar.'],
  ['▦', 'Qué necesitas', 'Una página nueva, un catálogo, una landing o una actualización.'],
  ['↻', 'Cuándo lo necesitas', 'Con eso te comparto tiempos y el paquete que mejor te conviene.'],
]

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  return <section id="contacto" className="section contact"><div className="container">
    <div className="section-heading centered reveal">
      <p className="eyebrow">CONTACTO</p>
      <h2>Solicita tu <em>cotización.</em></h2>
      <p>Escríbeme por WhatsApp y platicamos sobre tu proyecto. Respondo personalmente.</p>
    </div>
    <div className="contact-card reveal">
      <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <span>◔</span> Escribir por WhatsApp <b>→</b>
      </a>
      <p className="contact-note">Sin formularios ni esperas: el mensaje se abre listo para enviar.</p>
      <div className="contact-hints">
        {hints.map(([icon, title, text]) => <div className="contact-hint" key={title}>
          <div className="service-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>)}
      </div>
    </div>
  </div></section>
}
