import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendForm } from '../lib/sendForm'
import './Contact.css'

const initial = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', error: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'sending', error: '' })
    try {
      const result = await sendForm({
        name: form.name,
        email: form.email,
        subject: form.subject || 'Project Inquiry',
        message: form.message,
      })
      setStatus({ state: result.delivered ? 'success' : 'mailto', error: '' })
      if (result.delivered) setForm(initial)
    } catch (err) {
      setStatus({ state: 'error', error: err.message || 'Something went wrong' })
    }
  }

  const sending = status.state === 'sending'

  return (
    <div className="contact">
      <section className="section contact-hero">
        <div className="container">
          <span className="section-eyebrow">Get in touch</span>
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Let's build something great.
          </motion.h1>
          <p className="contact-lead">
            Tell me about your project and I'll get back to you within a day.
            Prefer Upwork? You'll find me there too.
          </p>
        </div>
      </section>

      <section className="section contact-grid-section">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="info-title">Contact details</h3>
            <ul className="info-list">
              <li>
                <span className="info-label">Email</span>
                <a href="mailto:hamayonm99@gmail.com">hamayonm99@gmail.com</a>
              </li>
              <li>
                <span className="info-label">Phone</span>
                <a href="tel:+923224638848">+92 322 4638848</a>
              </li>
              <li>
                <span className="info-label">Upwork</span>
                <a
                  href="https://www.upwork.com/freelancers/~017f4732d138aa5bcf"
                  target="_blank"
                  rel="noreferrer"
                >
                  upwork.com/freelancers/~017f4732d138aa5bcf
                </a>
              </li>
              <li>
                <span className="info-label">Location</span>
                <span>Lahore, Pakistan · Remote-friendly</span>
              </li>
            </ul>

            <div className="info-cta">
              <p>Prefer a quick call?</p>
              <a className="btn btn-ghost" href="mailto:hamayonm99@gmail.com">
                hamayonm99@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="row">
              <label>
                <span>Name</span>
                <input required value={form.name} onChange={update('name')} />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input
                value={form.subject}
                onChange={update('subject')}
                placeholder="Project, role or general inquiry"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                rows={6}
                required
                value={form.message}
                onChange={update('message')}
                placeholder="Briefly describe what you're working on…"
              />
            </label>

            {status.state === 'error' && (
              <p className="form-error">{status.error}</p>
            )}

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>

            {status.state === 'success' && (
              <p className="form-success">
                Message sent — I'll reply to you shortly.
              </p>
            )}
            {status.state === 'mailto' && (
              <p className="form-success">
                Opening your email client — talk soon!
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Contact
