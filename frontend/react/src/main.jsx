import './style.css'

import { createRoot } from 'react-dom/client'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certificates from './components/Certificates.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('app')).render(
  <>

    <Navbar />

    <Home />

    <About />

    <Skills />

    <Certificates />

    <Projects />

    <Contact />

    <Footer />

  </>
)