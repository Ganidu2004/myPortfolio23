import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiTailwindcss, SiJavascript, SiDart, SiFlutter,
  SiPhp, SiMysql, SiFirebase, SiSupabase, SiMongodb,
  SiPython, SiHtml5, SiFigma
} from 'react-icons/si'
import { FaJava, FaCubes, FaNetworkWired, FaPaintBrush, FaImage, FaServer, FaLayerGroup } from 'react-icons/fa'

const skillCategories = [
  {
    label: 'Frontend',
    emoji: '🎨',
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.15)',
    skills: [
      { name: 'HTML',          icon: SiHtml5,       percentage: 90, color: '#E34F26' },
      { name: 'React Js',      icon: SiReact,       percentage: 90, color: '#61DAFB' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, percentage: 85, color: '#06B6D4' },
      { name: 'JavaScript',    icon: SiJavascript,  percentage: 80, color: '#F7DF1E' },
    ]
  },
  {
    label: 'Mobile',
    emoji: '📱',
    color: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.15)',
    skills: [
      { name: 'Flutter', icon: SiFlutter,    percentage: 90, color: '#54C5F8' },
      { name: 'Dart',    icon: SiDart,       percentage: 90, color: '#0175C2' },
      { name: 'BLoC',    icon: FaLayerGroup, percentage: 50, color: '#9333EA' },
    ]
  },
  {
    label: 'Backend',
    emoji: '⚙️',
    color: 'from-orange-400 to-pink-500',
    glow: 'rgba(251,146,60,0.15)',
    skills: [
      { name: 'Java',   icon: FaJava,    percentage: 75, color: '#ED8B00' },
      { name: 'PHP',    icon: SiPhp,     percentage: 75, color: '#777BB4' },
      { name: 'Python', icon: SiPython,  percentage: 70, color: '#3776AB' },
    ]
  },
  {
    label: 'Database & Cloud',
    emoji: '☁️',
    color: 'from-emerald-400 to-cyan-500',
    glow: 'rgba(52,211,153,0.15)',
    skills: [
      { name: 'MySQL',     icon: SiMysql,    percentage: 90, color: '#4479A1' },
      { name: 'Firebase',  icon: SiFirebase, percentage: 95, color: '#FFCA28' },
      { name: 'Supabase',  icon: SiSupabase, percentage: 95, color: '#3ECF8E' },
      { name: 'MongoDB',   icon: SiMongodb,  percentage: 85, color: '#47A248' },
    ]
  },
  {
    label: 'Concepts & Paradigms',
    emoji: '🧠',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.15)',
    skills: [
      { name: 'OOP Concepts', icon: FaCubes, percentage: 85, color: '#8B5CF6' },
    ]
  },
  {
    label: 'Design Tools',
    emoji: '✏️',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(244,63,94,0.15)',
    skills: [
      { name: 'Photoshop',   icon: FaImage,      percentage: 80, color: '#31A8FF' },
      { name: 'Illustrator', icon: FaPaintBrush,       percentage: 75, color: '#FF9A00' },
      { name: 'Figma',       icon: SiFigma,            percentage: 85, color: '#F24E1E' },
    ]
  },
  {
    label: 'Networking',
    emoji: '🌐',
    color: 'from-teal-400 to-cyan-600',
    glow: 'rgba(20,184,166,0.15)',
    skills: [
      { name: 'Cisco Packet Tracer', icon: FaServer,       percentage: 75, color: '#1BA0D7' },
      { name: 'Network Basics',      icon: FaNetworkWired, percentage: 80, color: '#14B8A6' },
    ]
  },
]

/* ── Animated progress bar ── */
function SkillBar({ skill, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className='group'
    >
      <div className='flex items-center gap-3 mb-2'>
        <span
          className='w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 transition-transform duration-300 group-hover:scale-110'
          style={{ background: skill.color + '22', color: skill.color }}
        >
          <Icon />
        </span>
        <span className='text-sm font-semibold dark:text-gray-200 text-gray-700 flex-1'>{skill.name}</span>
        <span className='text-xs font-bold tabular-nums' style={{ color: skill.color }}>{skill.percentage}%</span>
      </div>

      {/* Track */}
      <div className='h-2 rounded-full bg-gray-200/60 dark:bg-white/5 overflow-hidden'>
        <motion.div
          className='h-full rounded-full'
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

/* ── Category card ── */
function CategoryCard({ cat, cardIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: cardIndex * 0.12 }}
      whileHover={{ y: -4 }}
      className='relative rounded-2xl p-6 border border-white/10 dark:border-white/5 backdrop-blur-sm overflow-hidden'
      style={{
        background: 'rgba(255,255,255,0.03)',
        boxShadow: `0 0 40px ${cat.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {/* Corner gradient blob */}
      <div
        className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-2xl pointer-events-none`}
      />

      {/* Header */}
      <div className='flex items-center gap-3 mb-5'>
        <span className='text-2xl'>{cat.emoji}</span>
        <h3 className={`text-base font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
          {cat.label}
        </h3>
      </div>

      {/* Skills */}
      <div className='flex flex-col gap-4'>
        {cat.skills.map((sk, i) => (
          <SkillBar key={sk.name} skill={sk} delay={cardIndex * 0.1 + i * 0.08} />
        ))}
      </div>
    </motion.div>
  )
}

/* ── Floating background orbs ── */
const orbs = [
  { size: 400, top: '-10%', left: '-10%',  color: 'rgba(59,130,246,0.06)'  },
  { size: 300, top: '50%',  right: '-8%',  color: 'rgba(6,182,212,0.07)'   },
  { size: 250, bottom: '-5%', left: '30%', color: 'rgba(139,92,246,0.05)'  },
]

const Skill = () => {
  return (
    <section id='skills' className='relative min-h-screen py-24 px-4 sm:px-6 overflow-hidden flex items-center'>

      {/* Background orbs */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className='absolute rounded-full blur-3xl pointer-events-none'
          style={{
            width: o.size, height: o.size,
            top: o.top, left: o.left, right: o.right, bottom: o.bottom,
            background: o.color,
          }}
        />
      ))}

      <div className='max-w-6xl mx-auto w-full relative z-10'>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5'>
            <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Expertise</span>
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white text-gray-900 leading-tight'>
            My{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600'>
                Skills
              </span>
              {/* underline decoration */}
              <svg className='absolute -bottom-1 left-0 w-full' viewBox='0 0 200 8' fill='none'>
                <path d='M0 6 Q100 0 200 6' stroke='url(#ug)' strokeWidth='3' strokeLinecap='round'/>
                <defs>
                  <linearGradient id='ug' x1='0' y1='0' x2='1' y2='0'>
                    <stop stopColor='#60a5fa'/>
                    <stop offset='1' stopColor='#22d3ee'/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className='mt-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed'>
            Hands‑on experience across frontend, mobile, backend, and cloud — building fast, real‑world applications end‑to‑end.
          </p>
        </motion.div>

        {/* ── Skill Category Cards Grid ── */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} cardIndex={i} />
          ))}
        </div>

        {/* ── Bottom floating icons strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-14 flex flex-wrap justify-center gap-5'
        >
          {skillCategories.flatMap(c => c.skills).map((sk) => {
            const Icon = sk.icon
            return (
              <motion.div
                key={sk.name}
                whileHover={{ scale: 1.25, rotate: [0, -8, 8, 0] }}
                transition={{ type: 'spring', stiffness: 300 }}
                title={sk.name}
                className='w-10 h-10 rounded-xl flex items-center justify-center text-xl cursor-default'
                style={{ background: sk.color + '18', color: sk.color, border: `1px solid ${sk.color}33` }}
              >
                <Icon />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Skill
