import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = ({ onConsult }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="container navbar-row">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">HM</span>
          <span className="brand-text">
            Hamayoun<span className="brand-dot">.</span>
          </span>
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.name}
            </NavLink>
          ))}
          <button
            className="btn btn-primary nav-cta-mobile"
            onClick={() => {
              setOpen(false)
              onConsult?.()
            }}
          >
            Free Consultation
          </button>
        </div>

        <button className="btn btn-primary nav-cta" onClick={onConsult}>
          Free Consultation
        </button>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
