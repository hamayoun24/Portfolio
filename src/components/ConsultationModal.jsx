import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { sendForm } from '../lib/sendForm'
import './ConsultationModal.css'

const initial = { name: '', email: '', topic: 'Web Development', message: '' }

const ConsultationModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', error: '' })

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setStatus({ state: 'idle', error: '' })
      setForm(initial)
    }
  }, [open])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'sending', error: '' })
    try {
      const result = await sendForm({
        name: form.name,
        email: form.email,
        subject: `Free Consultation — ${form.topic}`,
        topic: form.topic,
        message: form.message,
      })
      setStatus({ state: result.delivered ? 'success' : 'mailto', error: '' })
    } catch (err) {
      setStatus({ state: 'error', error: err.message || 'Something went wrong' })
    }
  }

  const sending = status.state === 'sending'
  const done = status.state === 'success' || status.state === 'mailto'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              ×
            </button>

            <div className="modal-tag">Free of cost</div>
            <h3 className="modal-title">Book a Free Consultation</h3>
            <p className="modal-sub">
              Tell me about your project — I'll reply within 24 hours.
            </p>

            {done ? (
              <div className="modal-success">
                <div className="check">✓</div>
                <p>
                  {status.state === 'success'
                    ? 'Your request has been sent — talk soon!'
                    : 'Your email client is opening — talk soon!'}
                </p>
                <button className="btn btn-primary" onClick={onClose}>
                  Done
                </button>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleSubmit}>
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="HM"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  <span>Topic</span>
                  <select value={form.topic} onChange={update('topic')}>
                    <option>Web Development</option>
                    <option>Mobile App (React Native / Expo)</option>
                    <option>MERN / Next.js Project</option>
                    <option>NestJS / Backend API</option>
                    <option>Real-Time / Video SDK</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <span>Project details</span>
                  <textarea
                    rows={3}
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder="A few lines about what you'd like to build…"
                  />
                </label>
                {status.state === 'error' && (
                  <p className="modal-error">{status.error}</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary modal-submit"
                  disabled={sending}
                >
                  {sending ? 'Sending…' : 'Request Free Call'}
                </button>
                <p className="modal-fineprint">
                  No commitment — 30 minutes, completely free.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ConsultationModal
