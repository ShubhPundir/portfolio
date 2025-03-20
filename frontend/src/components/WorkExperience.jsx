import React from "react";
import "../styles/WorkExperience.css";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="work-container">
        
        <div className="work-item">
          <h3>Junior Java Developer Intern</h3>
          <p><strong>Company:</strong> TEN: The Entrepreneurship Network</p>
          <p><strong>Duration:</strong> Sep 2021 - Nov 2021</p>
          <ul>
            <li>Analyzed requirements and planned SRS for multi-media organizations.</li>
            <li>Implemented REST APIs and optimized database queries for payment gateways via RazorPay.</li>
            <li>Worked on performance improvements and bug fixes resolving to a 20% improvement in backend lags.</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Machine Learning Engineer</h3>
          <p><strong>Company:</strong> WDS: Wiz Digital Services</p>
          <p><strong>Duration:</strong> Jan 2024 - May 2024</p>
          <ul>
            <li>Implemented NLU and NLP techniques on multiple clientele dataset to encrpyt and safeguard sensitive information with an accuracy of 92%</li>
            <li>Collaborated with cross functional teams to integrate privacy-preserving techniques seamlessly into legacy and existing systems.</li>
            <li>Deployed end to end chatbot services and fine tuned open source LLMs to drive customer satisfaction close to 75% .</li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Freelancer</h3>
          <p><strong>Company:</strong> Self Employed</p>
          <p><strong>Duration:</strong> Jan 2022 - Present</p>
          <ul>
            <li>Scraped/Crawled data for multiple clients producing tangible and meaningful business insights.</li>
            <li>Developed ETL data pipelines for text preprocessing for Big Data.</li>
            <li>Developed Real Time Dashboards onto Full-Stack applications from IOT Senors, Distributed Management Services, etc</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
