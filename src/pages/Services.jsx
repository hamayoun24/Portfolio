import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    title: 'Full-Stack Web Development',
    desc: 'End-to-end MERN and Next.js builds — from data model to production deployment. Type-safe, tested and optimized.',
    points: ['React / Next.js', 'Node.js / Express', 'TypeScript', 'CI / CD'],
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android apps with React Native and Expo — shared codebase, native performance, OTA updates.',
    points: ['React Native', 'Expo', 'iOS / Android', 'App Store & Play Store'],
  },
  {
    title: 'Backend & API Engineering',
    desc: 'NestJS and Express APIs built with clean modular architecture, validation, auth, and clear OpenAPI contracts.',
    points: ['NestJS', 'REST & GraphQL', 'JWT / OAuth', 'Rate-limiting & caching'],
  },
  {
    title: 'Database Design',
    desc: 'PostgreSQL with Sequelize, MongoDB with Mongoose — modelling for performance, integrity and growth.',
    points: ['PostgreSQL', 'Sequelize ORM', 'MongoDB', 'Migrations & seeders'],
  },
  {
    title: 'SaaS & Internal Portals',
    desc: 'Multi-role dashboards, audit trails and reporting — the kind of internal tooling teams actually use.',
    points: ['Role-based access', 'Reporting & exports', 'Workflow automation', 'Admin tooling'],
  },
  {
    title: 'Real-Time & Video',
    desc: 'Zoom Video SDK, WebSockets and live data — built for production reliability under real load.',
    points: ['Zoom Video SDK', 'WebSockets', 'Live trading data', 'Push notifications'],
  },
  {
    title: 'Code Reviews & Refactors',
    desc: 'Audit existing codebases and modernize them — typing, testing, removing dead weight, raising quality.',
    points: ['Architecture review', 'Migration to TS', 'Performance audit', 'Best practices'],
  },
]

const process = [
  { step: '01', title: 'Discover', desc: 'Free consultation — understand goals, constraints and scope.' },
  { step: '02', title: 'Design', desc: 'Architecture, data models and milestones agreed up-front.' },
  { step: '03', title: 'Build', desc: 'Iterative delivery with weekly demos and clean commits.' },
  { step: '04', title: 'Ship', desc: 'Deploy, monitor and hand-off with documentation that lasts.' },
]

const Services = ({ onConsult }) => {
  return (
    <div className="services">
      <section className="section services-hero">
        <div className="container">
          <span className="section-eyebrow">What I do</span>
          <h1 className="services-title">Services built around outcomes.</h1>
          <p className="services-lead">
            Pick what you need, or combine them — every engagement starts with a
            free consultation so we can align on scope and timeline.
          </p>
          <button className="btn btn-primary" onClick={onConsult}>
            Free Consultation
          </button>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container">
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                className="service-card"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              >
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <span className="section-eyebrow">Process</span>
          <h2 className="section-title">How we'll work together</h2>
          <motion.div
            className="process-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {process.map((p) => (
              <motion.div
                className="process-step"
                key={p.step}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="process-num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
