'use client'

const CTASection = () => {
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#007bff]/20 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f0a500]/25 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>

          {/* Left Text */}
          <div className="relative z-10 flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Need Help Building Your Backend or AI Product?
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              Let&apos;s map out your systems architecture, assess the feasibility of your AI workflows, or scope out a high-performance database plan.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-[#f0a500]">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Minute Architecture Audits
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zero-Obligation Project Scopes
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-4 flex-shrink-0">
            <a
              href="https://calendly.com/shb-pndr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f0a500] hover:bg-[#ffbb33] text-white font-extrabold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-95 text-center text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Discovery Call
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all duration-200 border border-white/20 hover:scale-[1.03] active:scale-95 text-center text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me for a Project
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTASection
