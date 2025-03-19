import React from "react";
import "../styles/Skills.css"; // Make sure to create and link this CSS file

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>R</li>
            <li>C/C++</li>
            <li>JavaScript/TypeScript</li>
            <li>HTML/CSS</li>
            <li>SQL/NOSQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>Data Science</li>
            <li>Data Analytics/Wrangling</li>
            <li>Business Intelligence</li>
            <li>Master Data Management</li>
            <li>Machine Learning/Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Recommendation Engines</li>
            <li>Web Scraping</li>
            <li>Databases</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>Springboot MVC</li>
            <li>Django & Flask</li>
            <li>Node.js & Express.js</li>
            <li>MS SQL/MongoDB/Cassandra</li>
            <li>Tensorflow & Pytorch</li>
            <li>OpenCV & EasyOCR</li>
            <li>AWS/Azure Deployment</li>
            <li>Apache Hadoop Ecosystem</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>PowerBI & Tableau</li>
            <li>MS Excel</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-Solving</li>
            <li>Teamwork & Collaboration</li>
            <li>Adaptability</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
