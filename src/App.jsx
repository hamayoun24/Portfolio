import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <Router>
      <div className="app">
        <Navbar onConsult={openModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home onConsult={openModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services onConsult={openModal} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onConsult={openModal} />
        <ConsultationModal open={modalOpen} onClose={closeModal} />
      </div>
    </Router>
  )
}

export default App
