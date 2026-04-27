import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const stack = [
  'React', 'Next.js', 'TypeScript', 'React Native',
  'Expo', 'Node.js', 'NestJS', 'Express',
  'MongoDB', 'PostgreSQL', 'Sequelize', 'Mongoose',
  'Zoom SDK', 'REST / WebSockets',
]

const featured = [
  {
    name: 'GM FX',
    tag: 'Forex Trading Platform',
    desc: 'Networking trading platform with multi-tier referral teams, commission tracking, and live market data.',
    stack: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  {
    name: 'Sheranwala Developers',
    tag: 'Real Estate Portal',
    desc: 'Internal management portal handling inventory, customers, payments, and end-to-end operations.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Sequelize'],
  },
  {
    name: 'BusinessPass',
    tag: 'USA · Video Conferencing',
    desc: 'Integrated Zoom Video SDK for real-time video calls inside a SaaS product for US clients.',
    stack: ['React', 'TypeScript', 'Node.js', 'Zoom SDK'],
  },
]

const highlights = [
  { kpi: '5+', label: 'Years building production apps' },
  { kpi: '10+', label: 'End-to-end projects delivered' },
  { kpi: '3', label: 'Industries: FinTech, Real Estate, SaaS' },
  { kpi: '100%', label: 'Client satisfaction on delivery' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const chipVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
}

const Home = ({ onConsult }) => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.span className="hero-badge" variants={itemVariants}>
              <motion.span
                className="dot"
                animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              Available for new projects
            </motion.span>
            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="grad">Hamayoun Mushtaq</span> —
              <br /> Senior Software Engineer.
            </motion.h1>
            <motion.p className="hero-sub" variants={itemVariants}>
              I design and ship scalable web and mobile applications across the
              MERN stack, Next.js, NestJS, PostgreSQL, and React Native. From
              FinTech trading platforms to real-estate portals and real-time
              video products — focused on clean architecture and measurable
              results.
            </motion.p>
            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                onClick={onConsult}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Free Consultation
              </motion.button>
              <Link to="/portfolio" className="btn btn-ghost">
                View Work →
              </Link>
            </motion.div>
            <motion.div className="hero-meta" variants={itemVariants}>
              <a href="mailto:hamayonm99@gmail.com">hamayonm99@gmail.com</a>
              <span className="sep">·</span>
              <a href="tel:+923224638848">+92 322 4638848</a>
              <span className="sep">·</span>
              <a
                href="https://www.upwork.com/freelancers/~017f4732d138aa5bcf"
                target="_blank"
                rel="noreferrer"
              >
                Upwork
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.div
              className="code-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="code-bar">
                <span className="codedot red" />
                <span className="codedot yel" />
                <span className="codedot grn" />
                <span className="code-file">profile.ts</span>
              </div>
              <pre className="code-body">
{`const engineer = {
  name: "Hamayoun Mushtaq",
  role: "Senior Software Engineer",
  stack: [
    "React", "Next.js", "TypeScript",
    "React Native", "Expo",
    "Node", "NestJS", "Mongo", "Postgres"
  ],
  focus: ["Scalable APIs", "SaaS", "Realtime"],
  open_to: "remote · contract · full-time",
};`}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="kpis">
        <motion.div
          className="container kpi-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((h) => (
            <motion.div
              className="kpi-card"
              key={h.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="kpi-num">{h.kpi}</div>
              <div className="kpi-label">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section stack-section">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Tech Stack
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Tools I use to ship
          </motion.h2>
          <p className="section-subtitle">
            A focused toolkit, honed across forex, real estate, SaaS, and mobile products.
          </p>
          <motion.div
            className="stack-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stack.map((s) => (
              <motion.div
                key={s}
                className="stack-chip"
                variants={chipVariants}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {s}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="featured-head">
            <div>
              <motion.span
                className="section-eyebrow"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Featured Work
              </motion.span>
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                Selected projects
              </motion.h2>
            </div>
            <Link to="/portfolio" className="featured-all">
              See all →
            </Link>
          </div>

          <motion.div
            className="featured-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featured.map((p) => (
              <motion.div
                key={p.name}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <div className="project-tag">{p.tag}</div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
