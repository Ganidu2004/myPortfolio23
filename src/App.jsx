import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true;
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className='bg-linear-to-br from-gray-50 via-blue-50/40 to-slate-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-900 min-h-screen transition-colors duration-500'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <About/>
      <Skill/>
    </div>
  )
}

export default App
