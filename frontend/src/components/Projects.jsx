import "../styles/Projects.css";

const projects = [
  {
    title: "MediRecord",
    description:
      "A one stop spot for structured medical record system. AI powered prescription queries and results for both patients and doctors.",
    link: "/portfolio/#/allprojects",
  },
  {
    title: "FIND-DB",
    description:
      "A java based Wide Column Database system made from scratch. Efficient search with B+Trees, Sharding and Replication.",
    link: "/portfolio/#/allprojects",
  },
  {
    title: "Waveform based Music Recommendation System",
    description:
      "Managaing Big Data for both musics and users. Waveform and linguistical analysis hybridized with user preference for personalized recommendations",
    link: "/portfolio/#/allprojects",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" target="_blank">
              View More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
// LIST OF ALL PROJECTS
// 1. Student Expenditure Analyis
// 2. Stores-Sales-Analysis + Market-Analysis
// 3. iNeuronStoreAnalysis
// 4. CarPrice Regressor
// 5. Glassdoor Job Profiling Recommendation System
// 6. Caffe-Management
// 7. YouTube-Spam Filter
// 8. Rental-Apartment-Regressor
// 9. Sentiment Score WebApp
// 10. YOLO Drowsiness
// 11. Image-Caption Generator
// 12. Topic-Modelling Analysis
// 13. Time-Table Scheduling
// 14. PII deIdentification
// 15. Food-Stat
// 16. Tableau-YouTube-Data-Analysis
// 17. Microsoft-Malware-Prediction
// 18. MediRecord
// 19. SimpleDB
// 20. Waveform based Music Recommendation System

export default Projects;
