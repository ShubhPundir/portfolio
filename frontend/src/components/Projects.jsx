import "../styles/Projects.css";

const projects = [
  { title: "MediRecord", description: "A structured medical record system", link: "#" },
  { title: "Address Book CLI", description: "Efficient search with B-Trees", link: "#" },
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
            <a href={project.link} className="btn">View More</a>
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
// 20. 







export default Projects;
