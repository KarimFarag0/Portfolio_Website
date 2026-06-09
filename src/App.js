import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualifications/Qualification';
import Certifications from './components/certifications/Certifications';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import AmbientBackground from './components/AmbientBackground';
import CursorSpotlight from './components/CursorSpotlight';

export const App = () => {
  return (
    <>
    <AmbientBackground />
    <CursorSpotlight />
    <Header />

    <main className='main'>
      <Home />
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Certifications/>
      <Work/>
      <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App
