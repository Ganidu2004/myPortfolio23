import React from 'react'
import { SiK3S } from 'react-icons/si'

const Skill = () => {
    const skills = [
    { name: 'React Js', percentage: 90, color: '#61DAFB' },
    { name: 'Tailwind CSS', percentage: 85, color: '#06B6D4' },
    { name: 'JavaScript', percentage: 80, color: '#F7DF1E' },
    { name: 'Dart', percentage: 90, color: '#0175C2' },
    { name: 'Flutter', percentage: 90, color: '#02569B' },
    { name: 'Java', percentage: 75, color: '#ED8B00' },
    { name: 'PHP', percentage: 75, color: '#777BB4' },
    { name: 'My SQL', percentage: 90, color: '#4479A1' },
    { name: 'Firebase', percentage: 95, color: '#FFCA28' },
    { name: 'Supabase', percentage: 95, color: '#3ECF8E' },
    { name: 'MongoDB', percentage: 85, color: '#47A248' }
]
  return (
    <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl'></div>
      </div>
      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='text-center md-16' data-aos='fade-up'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 md-5'>
            <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Expertise</span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
            My<span className='text-blue-500 dark:text-blue-400'>Skills</span>
          </h2>
          <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx:auto'>
            Equipped with hands-on experience across frontend frameworks, mobile development, and powerful backend ecosystems, my skill set covers everything from interactive UI design to seamless cloud integration. I am continuously expanding these capabilities to deliver high-performance, real-world applications.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
          {skills.map((skills, index) =>{
            const radius = 60
            const circumference = 2* Math.PI * radius
            const offset = circumference - (skills.percentage / 100) * circumference
            const size = 150
            return(
              <div
                key={index}
                className='flex flex-col items-center'
                data-aos='fade-up'
                data-aos-delay={index * 100}>
                  <div className='relative'
                  style={{ width: size, height: size }}>
                    <svg 
                      className='transform -rotate-90'
                      width={size}
                      height={size}>
                        <circle
                          cx={size /2}
                          cy={size /2}
                          r={radius}
                          fill='none'
                          stroke='#e5e7eb'
                          strokeWidth='10'
                          className='dark:stroke-gray-700'>

                        </circle>
                        <circle
                          cx={size /2}
                          cy={size /2}
                          r={radius}
                          fill='none'
                          stroke={skills.color}
                          strokeWidth='10'
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap='round'
                          className='transition-all duration-1000 ease-out'
                          style={{transition: 'stroke-dashoffset 1.5sease-in-out'}}>

                        </circle>
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='text-center'>
                        <span className='text-3xl font-bold dark:text-white text-gray-900'>{skills.percentage}%</span>
                      </div>
                    </div>
                    <div>
                      <h3 className='mt-4 text-base font-medium text-center dark:text-gray-200 text-gray-900'>
                        {skills.name}
                      </h3>
                    </div>
                  </div>
              </div> 
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill
