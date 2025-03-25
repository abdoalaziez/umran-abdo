import { useState, useEffect } from 'react';
import Main from './components/Main';
import Timeline from './components/Timeline';
import Expertise from './components/Expertise';
import Project from './components/Project';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import './index.scss';


function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');

  const handleModeChange = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
