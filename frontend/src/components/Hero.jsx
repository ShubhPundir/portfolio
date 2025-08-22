import "../styles/Hero.css";
import myPhoto from "../assets/formal-pic.jpg"; // Ensure the image is inside src/assets/

const Hero = () => {
  return (
    <section className="hero">
      {/* Tagline at the top */}
      <h2 className="hero-tagline">Backend and AI Engineer</h2>

      <div className="hero-container">
        {/* Left Side: Description & Buttons */}
        <div className="hero-left">
          <p className="description">
            Passionate about <b>project-based learning</b>, 
            I thrive on turning ideas into real-world solutions. 
            With hands-on experience in <b>LLMs</b>, <b>Data Science</b>, and <b>Designing Scalable Systems</b>, 
            I specialize in designing and optimizing intelligent systems.
            With a strong foundation in AI and Software Engineering, 
            I continuously explore emerging technologies to build efficient, scalable, and impactful solutions.
            Over the past four years, I have successfully delivered 10+ international freelanced projects (UAE, UK, Denmark, Morocoo), 
            gaining expertise in end-to-end development, problem-solving, and client collaboration.
          </p>

          <div className="buttons">
            <a href="https://github.com/ShubhPundir" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/shubh-pundir/" className="btn">LinkedIn</a>
            <a href="/portfolio/Shubh_Resume.pdf" download className="btn resume">Download Resume</a>
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
