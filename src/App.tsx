import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Formation from './components/Formation';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import VideoModal from './components/VideoModal';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <Experience />
      <Formation />
      <Contact />
      <Footer />
      {/* <VideoModal /> */}
    </div>
  );
}

export default App;