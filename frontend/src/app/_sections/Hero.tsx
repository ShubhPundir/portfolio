import Image from 'next/image'
import myPhoto from '../../assets/formal-pic.jpg'

const Hero = () => {
  return (
    <section className="relative flex justify-center py-20 px-5 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white min-h-[90vh] items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-row w-full max-w-7xl items-center gap-12 flex-wrap-reverse md:flex-nowrap">
        
        {/* LEFT COLUMN — Description + Buttons */}
        <div className="flex-1 flex flex-col space-y-6 min-w-[300px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007bff]/20 rounded-full border border-[#007bff]/30 mb-2 w-fit">
            <span className="text-sm font-medium text-[#007bff]">Backend + AI Engineer</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0a500] to-[#ffbb33]">Shubh Pundir</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl">
            Passionate about <strong className="text-white">project-based learning</strong>, I thrive on turning 
            ideas into real-world solutions. With hands-on experience in 
            <strong className="text-white"> Natural Language Processing (NLP)</strong>, <strong className="text-white">LLM Tuning</strong>, and 
            <strong className="text-white"> Data Engineering</strong>, I specialize in designing and optimizing intelligent systems.
            With a strong foundation in Data Analytics and Software Engineering, 
            I continuously explore emerging technologies to build efficient, scalable, and impactful solutions.
            Over the past two years, I have successfully delivered close to <strong className="text-white">10 freelanced projects</strong>, 
            gaining expertise in end-to-end development, problem-solving, and client collaboration.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap mt-8">
            <a
              href="https://github.com/ShubhPundir"
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#f0a500] rounded-lg transition-all hover:bg-[#ffbb33] hover:scale-105 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubh-pundir/"
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#f0a500] rounded-lg transition-all hover:bg-[#ffbb33] hover:scale-105 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="/Shubh_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#007bff] rounded-lg transition-all hover:bg-[#0056b3] hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007bff] to-[#f0a500] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Image
              src={myPhoto}
              alt="Shubh Pundir"
              width={400}
              height={400}
              className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full object-cover shadow-2xl border-4 border-white/20 transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
