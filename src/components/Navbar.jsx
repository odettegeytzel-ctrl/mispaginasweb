import { useState } from 'react'

const links = [['Inicio', '#inicio'], ['Proyectos', '#proyectos'], ['Paquetes', '#paquetes'], ['Servicios', '#servicios'], ['Contacto', '#contacto']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="navbar"><nav className="nav container" aria-label="Navegación principal">
    <a className="brand" href="#inicio" onClick={close}><span className="brand-mark">&lt;/&gt;</span>Desarrollo <b>Web</b></a>
    <button className="menu-button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i><i></i></button>
    <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}<a className="button button-small" href="#contacto" onClick={close}>Solicitar cotización <span>→</span></a></div>
  </nav></header>
}
