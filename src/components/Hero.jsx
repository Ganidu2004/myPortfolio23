import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import hero from '../assets/profile.jpeg'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = () => {
    const socialIcons =[
        { icon: FaLinkedin, alt: 'Linkedin', link: '#'},
        { icon: FaGithub, alt: 'Github', link: '#'},
        { icon: FaInstagramSquare, alt: 'Instergrame', link: '#'},
        { icon: FaFacebook, alt: 'Facebook', link: '#'},
    ]
  return (
    <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-22 lg:py-12 lg:-mt-14 relative z-10'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
                <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
                    <div className='relative group'>
                        <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-blue-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500'></div>
                        <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                            <img src={hero} alt='hero' className='w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500'/>
                            <div className='absolute inset-0 border-2 border-blue-500/30 rounded-full  scale-110 group-hover:scale-125 transition-transform duration-500'/>
                            <div className='absolute inset-0 border-2 border-blue-500/30 rounded-full  scale-125 group-hover:scale-150 transition-transform duration-500'/>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left' data-aos='fade-left'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse'/>
                        <span className='text-sm font-medium text-blue-700 dark:text-blue-300'>
                            Available for work
                        </span>
                    </div>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-gray-900 dark:text-white transition-colors'>
                        Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Ganidu Chalinda</span>
                    </h1>
                    <h2 className='text-xl sm:text-2xl font-mono mb-4 text-blue-600 dark:text-blue-400 transition-colors'>
                        <span className='text-gray-400 dark:text-gray-500'>&lt; </span>Software Engineer<span className='text-gray-400 dark:text-gray-500'> &gt;</span>
                    </h2>
                    <p className='mb-6 leading-relaxed max-w-md lg:max-w-lg text-gray-700 dark:text-gray-300 transition-colors'>
                        Hi, I'm Ganidu Chalinda — a Software Engineer Undergraduate who loves crafting high-quality digital experiences. Backed by 2+ years of experience and 4+ completed projects, I specialize in writing clean code and solving modern engineering challenges. Always open to new opportunities and collaborations. Feel free to connect or download my CV to learn more about my work!
                    </p>
                    <div className='flex gap-8 mb-7'>
                        {[
                            {number: '2+', lable: 'Years Experience'},
                            {number: '4+', lable: 'Project Done'},
                        ].map((stat, index) =>(
                            <div key={index} className='text-center'>
                                <div className='text-2xl font-bold text-gray-900 dark:text-white transition-colors'>
                                    {stat.number}     
                                </div>
                                <div className='text-xs text-gray-600 dark:text-gray-400 transition-colors'>
                                    {stat.lable}
                                </div> 
                            </div>
                        ))} 
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                        <a href='/CV.pdf' download='Ganidu_Chalinda_CV.pdf' className='w-full sm:w-auto'>
                            <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-blue-600 to-blue-800 hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer'>
                                <DownloadIcon size={18}/>
                                Download CV
                            </button>
                        </a>
                        <a href='#contact' className='w-full sm:w-auto'>
                            <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-white hover:text-white dark:hover:text-white font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer'>
                                <Mail size={18}/>
                                Hire Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero








