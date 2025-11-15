import Image from 'next/image'
import myPhoto from '../assets/formal-pic.jpg'

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-[60px] px-[5%] bg-hero-gradient text-white font-sans w-screen min-h-[40vh] m-0 overflow-hidden">
      {/* Tagline at the top */}
      <h2 className="text-[28px] font-semibold text-[#f0a500] text-center w-full mb-[30px]">Data Scientist</h2>

      <div className="flex flex-row items-center justify-between w-full max-w-[1400px] md:flex-col md:text-center">
        {/* Left Side: Description & Buttons */}
        <div className="flex-1 max-w-[50%] pr-5 md:max-w-full md:p-0">
          <p className="text-lg leading-relaxed opacity-90 text-left">
            Passionate about <b>project-based learning</b>, 
            I thrive on turning ideas into real-world solutions. 
            With hands-on experience in <b>Natural Language Processing (NLP)</b>, <b>LLM Tuning</b>, and <b>Data Engineering</b>, 
            I specialize in designing and optimizing intelligent systems.
            With a strong foundation in Data Analytics and Software Engineering, 
            I continuously explore emerging technologies to build efficient, scalable, and impactful solutions.
            Over the past two years, I have successfully delivered close to 10 freelanced projects, 
            gaining expertise in end-to-end development, problem-solving, and client collaboration.
          </p>

          <div className="mt-5 flex gap-[15px] md:justify-center">
            <a href="https://github.com/ShubhPundir" className="inline-block px-5 py-3 text-base text-white bg-[#f0a500] no-underline rounded-[5px] transition-all duration-300 hover:bg-[#ffbb33] hover:scale-105" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shubh-pundir/" className="inline-block px-5 py-3 text-base text-white bg-[#f0a500] no-underline rounded-[5px] transition-all duration-300 hover:bg-[#ffbb33] hover:scale-105" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Shubh_Resume.pdf" download className="inline-block px-5 py-3 text-base text-white bg-[#007bff] no-underline rounded-[5px] transition-all duration-300 hover:bg-[#0056b3] hover:scale-105">Download Resume</a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:mt-5">
          <Image 
            src={myPhoto} 
            alt="Shubh Pundir" 
            width={350} 
            height={350} 
            className="w-[350px] h-[350px] md:w-[300px] md:h-[300px] rounded-full object-cover shadow-[0px_8px_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

