import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

const projects = [
  {
    name: 'GM FX',
    category: 'FinTech',
    tag: 'Forex Trading Platform',
    desc: 'A networking trading platform with multi-tier referral teams, commission tracking and live market data. Designed for traders running their own communities.',
    highlights: [
      'Multi-tier referral & team management',
      'Real-time market data & price feeds',
      'Commission, payout and reporting flows',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  {
    name: 'Sheranwala Developers',
    category: 'Real Estate',
    tag: 'Real Estate Internal Portal',
    desc: 'A complete internal management system for a real-estate developer — handling inventory, customers, payments, files and end-to-end operations across teams.',
    highlights: [
      'Plot & property inventory management',
      'Customer KYC, contracts and payments',
      'Multi-role dashboards with audit trails',
    ],
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Sequelize'],
  },
  {
    name: 'BusinessPass',
    category: 'SaaS · USA',
    tag: 'Zoom Video SDK Integration',
    desc: 'Integrated Zoom Video SDK end-to-end inside a US-based SaaS product, including session lifecycle, audio/video controls, and recording flows.',
    highlights: [
      'Zoom Video SDK session lifecycle',
      'Audio / video / screenshare controls',
      'Recording, scheduling and access control',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Zoom SDK'],
  },
]

const categories = ['All', 'FinTech', 'Real Estate', 'SaaS · USA']

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div className="portfolio">
      <section className="section portfolio-hero">
        <div className="container">
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="portfolio-title">Selected projects</h1>
          <p className="portfolio-lead">
            A snapshot of products I've designed and built end-to-end across
            FinTech, real estate and SaaS.
          </p>

          <div className="filter-row">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-grid-section">
        <div className="container">
          <motion.div
            className="portfolio-grid"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            key={filter}
          >
            {visible.map((p) => (
              <motion.article
                key={p.name}
                className="portfolio-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                }}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <div className="card-side">
                  <div className="card-tag">{p.tag}</div>
                  <h3 className="card-name">{p.name}</h3>
                  <p className="card-cat">{p.category}</p>
                </div>
                <div className="card-main">
                  <p className="card-desc">{p.desc}</p>
                  <ul className="card-highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="card-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
