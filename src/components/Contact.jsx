import { CheckCircle, Loader2, Mail, Phone, Send, XCircle } from 'lucide-react'
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import contact from '../assets/call.jpg'

// Email validation regex
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [emailError, setEmailError] = useState('')
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/ganidu-chalinda-b39a49329/',
            hoverStyle: 'hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 hover:shadow-blue-500/10',
            iconColor: 'text-blue-600 dark:text-blue-400',
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/Ganidu2004',
            hoverStyle: 'hover:border-gray-500 hover:text-gray-900 dark:hover:text-white dark:hover:border-gray-400 hover:shadow-gray-500/10',
            iconColor: 'text-gray-800 dark:text-gray-200',
        },
        {
            name: 'Instagram',
            icon: FaInstagramSquare,
            url: 'https://www.instagram.com/gani_du_23/',
            hoverStyle: 'hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-400 dark:hover:border-pink-400 hover:shadow-pink-500/10',
            iconColor: 'text-pink-600 dark:text-pink-400',
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            url: 'https://web.facebook.com/ganidu.kodithuwakku/',
            hoverStyle: 'hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-500 hover:shadow-blue-600/10',
            iconColor: 'text-blue-600 dark:text-blue-400',
        },
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Real-time email validation
        if (name === 'email') {
            if (value && !isValidEmail(value)) {
                setEmailError('Please enter a valid email address.')
            } else {
                setEmailError('')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Final email check before submit
        if (!isValidEmail(formData.email)) {
            setEmailError('Please enter a valid email address.')
            return
        }

        setStatus('loading')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
    }

    return (
        <section id='contact' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-6 max-w-6xl relative z-10'>
                <div className='text-center mb-10 sm:mb-14' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900'>
                        Get In <span className='text-blue-500 dark:text-blue-400'>Touch</span>
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-md mx-auto'>
                        Have a question or want to work together? Leave a message or connect directly!
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                    {/* Form Column */}
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 shadow-lg'
                        data-aos='fade-right'>

                        {/* Name field */}
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name'
                            required
                            className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-blue-500 dark:focus:border-blue-400' />

                        {/* Email field with validation */}
                        <div className='flex flex-col gap-1.5'>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                                data-aos='fade-up'
                                data-aos-delay='200'
                                className={`w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 ${
                                    emailError
                                        ? 'border-red-500 dark:border-red-500 focus:border-red-500'
                                        : 'dark:border-zinc-800 border-gray-200 focus:border-blue-500 dark:focus:border-blue-400'
                                }`} />
                            {emailError && (
                                <p className='text-xs text-red-500 flex items-center gap-1 pl-1'>
                                    <XCircle size={13} />
                                    {emailError}
                                </p>
                            )}
                        </div>

                        {/* Message field */}
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder='Message'
                            required
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-blue-500 dark:focus:border-blue-400 resize-none' />

                        {/* Submit button */}
                        <button
                            type='submit'
                            disabled={status === 'loading' || !!emailError}
                            className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-base bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all cursor-pointer w-full sm:w-fit shadow-md shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100'
                            data-aos='fade-up'
                            data-aos-delay='300'>
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={18} className='animate-spin' />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {/* Success / Error feedback */}
                        {status === 'success' && (
                            <div className='flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 px-4 py-3 rounded-xl'>
                                <CheckCircle size={16} />
                                Message sent! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className='flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 px-4 py-3 rounded-xl'>
                                <XCircle size={16} />
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>

                    <div
                        className='w-full flex flex-col items-center justify-center order-1 lg:order-2'
                        data-aos='fade-left'
                    >
                        <div className='relative group w-full max-w-65 sm:max-w-72.5 py-4'>
                            <div className='absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] filter blur-2xl opacity-30 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none -z-10' />
                            <div className='absolute inset-0 border border-blue-500/20 dark:border-blue-400/15 rounded-[2.5rem] scale-118 group-hover:scale-128 transition-transform duration-500 pointer-events-none' />
                            <div className='absolute inset-0 border-2 border-blue-500/40 dark:border-blue-400/30 rounded-[2.5rem] scale-110 group-hover:scale-118 transition-transform duration-500 pointer-events-none' />
                            <div className='absolute inset-0 border-2 border-blue-500/60 dark:border-blue-400/50 rounded-[2.5rem] scale-104 group-hover:scale-110 transition-transform duration-500 pointer-events-none' />
                            <div className='relative z-10 w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-2 sm:border-3 border-blue-500/70 dark:border-blue-400/60 bg-gray-950/20 backdrop-blur-xs'>
                                <img
                                    src={contact}
                                    alt='Contact'
                                    className='w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md mt-6'>
                            <a
                                href='tel:+94715568760'
                                className='flex items-center gap-3.5 p-3.5 rounded-2xl border dark:border-zinc-800/80 border-gray-200/80 dark:bg-zinc-900/50 bg-white/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 group/card cursor-pointer'
                            >
                                <div className='w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-300'>
                                    <Phone size={18} />
                                </div>
                                <div className='min-w-0 flex-1'>
                                    <p className='text-xs font-medium text-gray-500 dark:text-gray-400'>Call Me</p>
                                    <p className='text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate group-hover/card:text-blue-500 transition-colors'>
                                        +94 71 556 8760
                                    </p>
                                </div>
                            </a>
                            <a
                                href='mailto:ganiduchalinda@gmail.com'
                                className='flex items-center gap-3.5 p-3.5 rounded-2xl border dark:border-zinc-800/80 border-gray-200/80 dark:bg-zinc-900/50 bg-white/70 backdrop-blur-md hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300 group/card cursor-pointer'
                            >
                                <div className='w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-300'>
                                    <Mail size={18} />
                                </div>
                                <div className='min-w-0 flex-1'>
                                    <p className='text-xs font-medium text-gray-500 dark:text-gray-400'>Email Me</p>
                                    <p className='text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate group-hover/card:text-blue-500 transition-colors' title='ganiduchalinda@gmail.com'>
                                        ganiduchalinda@gmail.com
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className='w-full max-w-md mt-5 flex flex-col items-center sm:items-start gap-3'>
                            <span className='text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400'>
                                Connect With Me
                            </span>
                            <div className='grid grid-cols-2 sm:flex sm:flex-wrap w-full gap-2.5'>
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={social.name}
                                            className={`group/btn flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-gray-200/80 dark:border-zinc-800/80 dark:bg-zinc-900/50 bg-white/70 backdrop-blur-md text-xs font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${social.hoverStyle}`}
                                        >
                                            <Icon size={16} className={social.iconColor} />
                                            <span>{social.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
