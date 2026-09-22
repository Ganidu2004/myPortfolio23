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
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-12 lg:mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 backdrop-blur-sm'>
                        <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
                        <span className='text-xs sm:text-sm font-medium dark:text-gray-300 text-gray-700'>Certifications</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='text-blue-500 dark:text-blue-400'>Certificates</span>
                    </h2>
                </div>

                {/* Inline Content: Certificate Image & Network Basics Details */}
                <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-5xl mx-auto'>
                    {/* Left: Certificate Preview Image */}
                    <div className='w-full lg:w-1/2 flex justify-center' data-aos='fade-right'>
                        <div className='relative group w-full max-w-md'>
                            <div className='absolute -inset-3 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl filter blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-500 -z-10'></div>
                            <div className='relative overflow-hidden rounded-2xl border-2 border-blue-500/30 dark:border-blue-400/30 shadow-2xl shadow-blue-500/10 group-hover:border-blue-500/60 transition-all duration-500 bg-white/5'>
                                <img 
                                    src={certificateImg} 
                                    alt='Certificate' 
                                    className='w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500' 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Network Basics Card */}
                    <div className='w-full lg:w-1/2' data-aos='fade-left'>
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, margin: '-100px' }}
                            className='w-full'
                        >
                            {certificate.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    className='p-5 sm:p-6 rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 dark:bg-zinc-900/40 bg-white/60 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-400/50 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center justify-between gap-5'
                                >
                                    <div className='flex items-center gap-4'>
                                        <div className='w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0'>
                                            <Award size={26} />
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                                {cert.title}
                                            </h3>
                                            <span className='text-sm font-medium text-gray-600 dark:text-zinc-400 block mt-1'>
                                                {cert.issure}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between sm:flex-col sm:items-end gap-2 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-zinc-800/60'>
                                        <div className='flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400'>
                                            <Calendar size={13}/>
                                            <span>{cert.date}</span>
                                        </div>
                                        <a
                                            href={cert.credentialUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all'
                                        >
                                            Verify <ExternalLink size={12}/>
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