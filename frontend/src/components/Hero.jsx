import "../styles/Hero.css";
import myPhoto from "../assets/uni-pic.jpg"; // Ensure the image is inside src/assets/

const Hero = () => {
  return (
    <section className="hero">
      {/* Tagline at the top */}
      <h2 className="hero-tagline">Self-Taught | Machine Learning Enthusiast | Data Researcher</h2>

      <div className="hero-container">
        {/* Left Side: Description & Buttons */}
        <div className="hero-left">
          <p className="description">
            Passionate about <b>project-based learning</b>, 
            I thrive on turning ideas into real-world solutions. 
            With hands-on experience in <b>Natural Language Processing (NLP)</b>, <b>LLM Tuning</b>, and <b>Data Engineering</b>, 
            I specialize in designing and optimizing intelligent systems.
            With a strong foundation in Data Analytics and Software Engineering, 
            I continuously explore emerging technologies to build efficient, scalable, and impactful solutions.
            Over the past two years, I have successfully delivered close to 10 freelanced projects, 
            gaining expertise in end-to-end development, problem-solving, and client collaboration.
          </p>

          <div className="buttons">
            <a href="https://github.com/ShubhPundir" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/shubh-pundir-02820321b/" className="btn">LinkedIn</a>
            <a href="/Shubh_Resume.pdf" download className="btn resume">Download Resume</a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-right">
          <img src={myPhoto} alt="Shubh Pundir" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
