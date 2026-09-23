import React, { useRef } from 'react'
import project1 from '../assets/doctor.jpg'
import project2 from '../assets/cosmetic.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
    const scrollRef = useRef(null)

    const projectsData = [
        {
            id: 1,
            image: project1,
            title: 'Doctor Appoinment App',
            desc: 'Book doctor appointments instantly and manage your healthcare with ease. Say goodbye to long waiting queues and phone calls—find trusted specialists, schedule visits, and keep your medical records secure all in one place.',
            tags: ['Flutter', 'Firebase (Backend, Storage, Auth)']
        },
        {
            id: 2,
            image: project2,
            title: 'E-Cosmetic Shop',
            desc: 'Discover your natural glow at our cosmetic shop! Shop 100% genuine skincare, makeup, and beauty essentials from top global and local brands. Look beautiful, feel confident every day.',
            tags: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB']
        }
    ]

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth
            const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id='projects' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative z-10'>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-16 gap-4' data-aos='fade-up'>
                    <div className='text-center sm:text-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3'>
                            <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Portfolio</span>
                        </div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                            My <span className='text-blue-500 dark:text-blue-400'>Projects</span>
                        </h2>
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => handleScroll('left')}
                            aria-label='Scroll Left'
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-700 border-gray-300 dark:text-white text-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 cursor-pointer'>
                            <ChevronLeft size={22} />
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            aria-label='Scroll Right'
                            className='p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-700 border-gray-300 dark:text-white text-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 cursor-pointer'>
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    data-aos='fade-up'
                    data-aos-delay='100'
                    className='flex gap-6 sm:gap-8 no-scrollbar snap-x snap-mandatory overflow-x-auto w-full px-2 py-4 justify-start sm:justify-center'>
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className='w-full sm:w-[calc(50%-16px)] lg:w-105 max-w-md shrink-0 snap-start group rounded-3xl overflow-hidden border-2 transition-all duration-300 dark:border-zinc-800/60 border-gray-200 dark:bg-zinc-900/50 bg-white hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-500/5 flex flex-col justify-between'>
                            <div>
                                <div className='relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                </div>
                                <div className='p-6 flex flex-col justify-between grow'>
                                    <div>
                                        <h3 className='text-xl font-bold mb-3 dark:text-white text-gray-900 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300'>
                                            {project.title}
                                        </h3>
                                        <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className='flex flex-wrap gap-2 pt-2'>
                                        {project.tags?.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className='text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-4 pt-2'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
