import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ onConsult }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="footer-cta-eyebrow">Let's build something</p>
            <h3 className="footer-cta-title">
              Have an idea? Get a free consultation.
            </h3>
          </div>
          <button className="btn btn-primary" onClick={onConsult}>
            Book Free Call
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">HM</span>
              <span className="brand-text">
                Hamayoun<span className="brand-dot">.</span>
              </span>
            </Link>
            <p className="footer-desc">
              Senior Software Engineer crafting scalable web applications with the
              MERN stack, Next.js, NestJS, and PostgreSQL.
            </p>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Full-Stack Development</li>
              <li>Mobile Apps (React Native / Expo)</li>
              <li>API & Backend Systems</li>
              <li>SaaS & Internal Portals</li>
              <li>Real-Time Video (Zoom SDK)</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hamayonm99@gmail.com">hamayonm99@gmail.com</a>
              </li>
              <li>
                <a href="tel:+923224638848">+92 322 4638848</a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~017f4732d138aa5bcf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire on Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Hamayoun Mushtaq. All rights reserved.</p>
          <p className="footer-tag">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
