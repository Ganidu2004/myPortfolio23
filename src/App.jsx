import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);
  useEffect(()=>{
    AOS.refresh();
  },[darkMode]);

  const toggleDarkMode = ()=>{
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.add('dark');
  }

  return (
    <div className={
      darkMode
      ? 'bg-linear-to-br from-gray-950 via-blue-950 to-indigo-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      
    </div>
  )
}

export default App
