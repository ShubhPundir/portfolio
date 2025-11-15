import Image from 'next/image'
import myPhoto from '../assets/formal-pic.jpg'

const Hero = () => {
  return (
    <section className="flex justify-center py-[60px] px-[5%] bg-hero-gradient text-white font-sans w-screen min-h-[40vh] m-0 overflow-hidden">
      <div className="flex flex-row w-full max-w-[1400px] items-center gap-10 flex-wrap-reverse md:flex-nowrap">
        
        {/* LEFT COLUMN — Description + Buttons */}
        <div className="flex-1 flex flex-col space-y-6 min-w-[300px]">
          <h2 className="text-[28px] font-semibold text-[#f0a500] text-left md:text-left w-full">
            Backend + AI Engineer
          </h2>

          <p className="text-lg leading-relaxed opacity-90 text-left">
            Passionate about <b>project-based learning</b>, I thrive on turning 
            ideas into real-world solutions. With hands-on experience in 
            <b> Natural Language Processing (NLP)</b>, <b>LLM Tuning</b>, and 
            <b> Data Engineering</b>, I specialize in designing and optimizing intelligent systems.
            With a strong foundation in Data Analytics and Software Engineering, 
            I continuously explore emerging technologies to build efficient, scalable, and impactful solutions.
            Over the past two years, I have successfully delivered close to 10 freelanced projects, 
            gaining expertise in end-to-end development, problem-solving, and client collaboration.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/ShubhPundir"
              className="px-5 py-3 text-base text-white bg-[#f0a500] rounded-[5px] transition-all hover:bg-[#ffbb33] hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubh-pundir/"
              className="px-5 py-3 text-base text-white bg-[#f0a500] rounded-[5px] transition-all hover:bg-[#ffbb33] hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/Shubh_Resume.pdf"
              download
              className="px-5 py-3 text-base text-white bg-[#007bff] rounded-[5px] transition-all hover:bg-[#0056b3] hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — Image */}
        <div className="flex-shrink-0 flex justify-center items-center md:ml-10">
          <Image
            src={myPhoto}
            alt="Shubh Pundir"
            width={350}
            height={350}
            className="w-[350px] h-[350px] md:w-[300px] md:h-[300px] rounded-full object-cover shadow-[0_8px_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
