import { motion } from 'framer-motion'
import './About.css'

const education = [
  {
    period: '2018 – 2022',
    school: 'Lahore Garrison University',
    detail: 'BS Software Engineering ',
  },
  {
    period: 'Intermediate',
    school: 'Punjab Group of Colleges',
    detail: 'ICS',
  },
  {
    period: 'Schooling',
    school: 'American International School',
    detail: 'Foundation in math, science and computing',
  },
]

const experience = [
  {
    role: 'Senior Software Engineer',
    where: 'Full-Stack Web Applications',
    detail:
      'Architecting MERN, Next.js, NestJS and PostgreSQL systems for FinTech, real estate and SaaS clients.',
  },
  {
    role: 'Real-Time Video Integrations',
    where: 'BusinessPass — USA',
    detail:
      'Implemented Zoom Video SDK end-to-end inside a SaaS product, including session lifecycle, audio/video controls and recording flows.',
  },
  {
    role: 'Internal Portals & Trading Platforms',
    where: 'GM FX · Sheranwala Developers',
    detail:
      'Built referral-based forex trading platform and a complete real-estate operations portal from the ground up.',
  },
]

const About = () => {
  return (
    <div className="about">
      <section className="section about-hero">
        <div className="container">
          <span className="section-eyebrow">About</span>
          <h1 className="about-title">
            Engineer focused on shipping product, not just code.
          </h1>
          <p className="about-lead">
            I'm Hamayoun Mushtaq — a Senior Software Engineer with hands-on
            experience designing, building and shipping full-stack systems. I
            care about clean architecture, predictable APIs, and interfaces that
            users actually enjoy.
          </p>
        </div>
      </section>

      <section className="section about-grid-section">
        <div className="container about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="about-card-title">Education</h3>
            <ul className="timeline">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="timeline-dot" />
                  <div>
                    <div className="timeline-period">{e.period}</div>
                    <div className="timeline-head">{e.school}</div>
                    <div className="timeline-sub">{e.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h3 className="about-card-title">Experience</h3>
            <ul className="timeline">
              {experience.map((x) => (
                <li key={x.role}>
                  <span className="timeline-dot" />
                  <div>
                    <div className="timeline-period">{x.where}</div>
                    <div className="timeline-head">{x.role}</div>
                    <div className="timeline-sub">{x.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {[
              {
                n: '01',
                h: 'Architecture first',
                p: 'Clear data models, typed contracts, and predictable APIs — so the product can grow without rewrites.',
              },
              {
                n: '02',
                h: 'Production-grade UX',
                p: 'Real users, real loading states, real error states. Apps that feel solid the moment they load.',
              },
              {
                n: '03',
                h: 'Direct communication',
                p: 'Honest scope, weekly demos, and clear trade-offs — no surprises at the end of a sprint.',
              },
            ].map((v) => (
              <motion.div
                key={v.n}
                className="value"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="value-num">{v.n}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
