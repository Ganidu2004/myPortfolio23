import { ArrowBigDown, ArrowRight } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import about from '../assets/boy.jpg'

const About = () => {
  const socialIcons = [
    { icon: FaLinkedin,link:'https://www.linkedin.com/in/ganidu-chalinda-b39a49329/', label: 'Linkedin', color: 'hover:text-blue-500 hover:border-blue-500' },
    { icon: FaGithub,link:'https://github.com/Ganidu2004', label: 'Github', color: 'hover:text-blue-500 hover:border-blue-500' },
    { icon: FaInstagramSquare,link:'https://www.instagram.com/gani_du_23/', label: 'InstagramSquare', color: 'hover:text-blue-500 hover:border-blue-500' },
    { icon: FaFacebook,link:'https://web.facebook.com/ganidu.kodithuwakku/', label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-500' },
  ]
  
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-24 pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden relative'>
      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          
          {/* Left Column: Text Content */}
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left' data-aos='fade-right'>
            {/* Pill Badge */}
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5 backdrop-blur-sm'>
              <span className='w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse'></span>
              <span className='text-xs sm:text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400'>
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-[1.15] tracking-tight transition-colors'>
              Turning Ideas Into{' '}
              <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 block mt-1'>
                Digital Reality
              </span>
            </h2>

            {/* Sub-heading / Role */}
            <p className='text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase'>
              Software Engineering Intern &bull; SLIATE ATI Galle
            </p>

            {/* Description */}
            <p className='text-base lg:text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl transition-colors'>
              I am an HND in Information Technology undergraduate at SLIATE, ATI Galle, with hands-on experience in full-stack web development using React.js, Node.js, and NoSQL databases. As a collaborative team player equipped with strong leadership skills, I have a genuine passion for building real-world software solutions that solve practical problems. Driven by a continuous desire to learn and adapt, I am eager to secure a software engineering internship where I can apply my technical foundation, collaborate with an innovative development team, and accelerate my growth into a professional Software Engineer.
            </p>

            {/* Social Media Icons */}
            <div className='flex flex-wrap gap-3.5 mb-9'>
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a 
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    data-aos='zoom-in'
                    data-aos-delay={index * 100}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 shadow-sm backdrop-blur-md dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <IconComponent size={22}/>
                  </a>
                )
              })}
            </div>

            {/* CTA Button */}
            <a href='#contact' data-aos='fade-up' data-aos-delay='200'>
              <button className='group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 cursor-pointer'>
                <span>Let's Talk</span>
                <ArrowRight size={18} className='transform group-hover:translate-x-1 transition-transform duration-300'/>
              </button>
            </a>
          </div>

          {/* Right Column: Large Image with Borders & Backdrop */}
          <div className='w-full lg:w-1/2 flex items-center justify-center relative py-6' data-aos='fade-left'>
            <div className='relative group w-full max-w-sm sm:max-w-md lg:max-w-lg'>
              
              {/* Ambient Glow */}
              <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-blue-800 rounded-[2.5rem] lg:rounded-[3rem] filter blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-20 animate-pulse' />
              
              {/* Rotated Gradient Accent Border (from original design) */}
              <div className='absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-blue-800 rounded-[2.5rem] lg:rounded-[3rem] transform rotate-3 scale-103 opacity-75 group-hover:rotate-4 transition-transform duration-500 -z-10' />
              
              {/* First Outer Concentric Border Ring */}
              <div className='absolute inset-0 border-2 border-blue-500/50 dark:border-blue-400/40 rounded-[2.5rem] lg:rounded-[3rem] scale-108 group-hover:scale-112 transition-transform duration-500 pointer-events-none' />
              
              {/* Second Outer Concentric Border Ring */}
              <div className='absolute inset-0 border-2 border-blue-500/30 dark:border-blue-400/20 rounded-[2.5rem] lg:rounded-[3rem] scale-116 group-hover:scale-122 transition-transform duration-500 pointer-events-none' />
              
              {/* Main Character Image with Direct Border */}
              <div className='relative z-10 w-full overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border-2 sm:border-4 border-blue-500/60 dark:border-blue-400/50 bg-gray-950/20 backdrop-blur-xs'>
                <img 
                  src={about} 
                  alt='About Me Character' 
                  className='w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105'
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About