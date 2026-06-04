'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import myPhoto from '../../assets/formal-pic.jpg'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const hasAnimated = useRef(false)
  const fullText = 'Backend & AI Engineer'

  useEffect(() => {
    if (hasAnimated.current) {
      setDisplayedText(fullText)
      return
    }

    hasAnimated.current = true
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80) // Typing speed: 80ms per character

    return () => clearInterval(typingInterval)
  }, [fullText])

  const capabilities = [
    {
      title: "AI Agents & RAG Systems",
      icon: (
        <svg className="w-5 h-5 text-[#f0a500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Backend APIs (Java, Python, Node)",
      icon: (
        <svg className="w-5 h-5 text-[#007bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      title: "Data Pipelines & ETL",
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2" />
        </svg>
      )
    },
    {
      title: "Web Scrapers & Automation",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      title: "Analytics Dashboards",
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Conversational AI",
      icon: (
        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative flex justify-center py-20 lg:py-28 px-5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white min-h-[95vh] items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl items-center gap-12 lg:gap-16">

        {/* LEFT COLUMN — Value Prop + CTAs + What I can build */}
        <div className="flex-1 flex flex-col space-y-6 text-left">
          

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
            Helping clients build scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-blue-400">APIs</span>, data pipelines, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0a500] to-[#ffbb33]">AI agents</span>, and automation.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl">
            I architect production-ready backend systems, scrape multi-source data feeds, and deploy pragmatic LLM workflows. Delivered <strong className="text-white">12+ paid projects</strong> for international clients since 2020.
          </p>

          {/* PRIMARY CALLS TO ACTION */}
          <div className="flex gap-4 flex-wrap pt-4">
            <a
              href="https://calendly.com/shb-pndr"
              className="group inline-flex items-center gap-2.5 px-7 py-4 text-base font-extrabold text-white bg-[#f0a500] rounded-xl transition-all hover:bg-[#ffbb33] hover:scale-[1.03] active:scale-95 shadow-lg shadow-[#f0a500]/25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Discovery Call
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-all border border-white/20 hover:scale-[1.03] active:scale-95 shadow-lg"
            >
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me for a Project
            </a>
          </div>

          {/* Secondary Social/Resume Links */}
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-400 pt-2 flex-wrap">
            <a href="https://github.com/ShubhPundir" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shubh-pundir/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="/portfolio/Shubh_Resume.pdf" download className="hover:text-white flex items-center gap-1.5 transition-colors">
              <svg className="w-4.5 h-4.5 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume PDF
            </a>
          </div>

          {/* WHAT I CAN BUILD SECTION */}
          <div className="pt-8 border-t border-white/10 w-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              What I Can Build For Your Organization
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/10 transition-all duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    {cap.icon}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-200">
                    {cap.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN — Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007bff] to-[#f0a500] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Image
              src={myPhoto}
              alt="Shubh Pundir"
              width={400}
              height={400}
              className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl border-4 border-white/10 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
