import React from 'react'
import {motion} from 'framer-motion'
import certificateImg from '../assets/network.png'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Certificates = () => {
    const certificate = [
        {
            id: 1,
            title: 'Network Basics',
            issure: 'Cisco Networking Academy',
            date: 'Aug 20, 2026',
            credentialUrl: 'https://www.netacad.com'
        }
    ]

    return (
        <section id='certificates' className='min-h-screen flex items-center relative overflow-hidden py-20'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14'>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
                        <div className='relative group'>
                            <div className='absolute -inset-4 bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
                            <div className='relative w-72 sm:w-96 lg:w-96'>
                                <img src={certificateImg} alt='Certificate' className='w-full h-auto object-contain rounded-2xl relative z-10 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500' />
                                <div className='absolute -inset-1 border-2 border-blue-500/30 rounded-2xl group-hover:border-blue-400/60 transition-colors duration-500 z-0' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/5 w-full' data-aos='fade-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border-blue-500/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Certifications</span>
                        </div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold dark:text-white text-gray-900'>
                            My <span className='text-blue-500 dark:text-blue-400'>Certificates</span>
                        </h2>
                        
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, margin: '-100px '}}
                            className='grid grid-cols-1 border-t border-b border-gray-200/50 dark:border-zinc-800/50 w-full'>
                            
                            {certificate.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group relative transition-colors duration-300 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 ${
                                        index < certificate.length - 1 ? 'border-b': ''} border-gray-200/50 dark:border-zinc-800/50`}>
                                    
                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0'>
                                            <Award size={22} />
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                                {cert.title}
                                            </h3>
                                            <span className='text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-0.5'>
                                                {cert.issure}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0 max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:border-zinc-800/30'>
                                        <div className='flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400'>
                                            <Calendar size={13}/>
                                            <span>{cert.date}</span>
                                        </div>
                                        <a
                                        href={cert.credentialUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 hover:underline'>
                                            Verity <ExternalLink size={11}/>
                                        </a>
                                    </div>
                                </motion.div>   
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates