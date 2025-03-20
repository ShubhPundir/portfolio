import React, { useState } from "react";
import "../styles/AllProjects.css";
// ENUM for project tags
const TAGS = {
  SDE: "SDE", // Full-stack development or end-to-end
  ANALYTICS: "Analytics",
  WEB_SCRAPING: "Web Scraping",
  ML_DL: "ML_DL", // Machine Learning or Deep Learning
  NLP: "NLP",
  CV: "CV", // Computer Vision
  VANILLA_PROGRAMMING: "Vanilla Programming", // No external modules
};

// Tag colors
const TAG_COLORS = {
  SDE: "#007bff", // Blue
  ANALYTICS: "#7aff33", // Green
  WEB_SCRAPING: "#17a2b8", // Cyan
  ML_DL: "#ff5733", // Orange-Red
  NLP: "#8e44ad", // Purple
  CV: "#ff33ff", // PINK
  VANILLA_PROGRAMMING: "#97f236", // RED
};


// List of Projects (Reversed Order)
const projects = [
  {
    name: "Waveform Music Recommendation System",
    description: "Created a music recommendation system based on waveform analysis.",
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/Waveform-Music-Recommendation-System",
  },
  {
    name: "SimpleDB",
    description: "Built a lightweight database system with CRUD operations.",
    tags: [TAGS.SDE, TAGS.VANILLA_PROGRAMMING],
    repoLink: "https://github.com/ShubhPundir/SimpleDB",
  },
  {
    name: "MediRecord",
    description: "Developed a full-stack medical record management system.",
    tags: [TAGS.SDE],
    repoLink: "https://github.com/ShubhPundir/MediRecord",
  },
  {
    name: "Microsoft-Malware-Prediction",
    description: "Predicted malware threats using machine learning techniques.",
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/Microsoft-Malware-Prediction",
  },
  {
    name: "Tableau-YouTube-Data-Analysis",
    description: "Created interactive Tableau dashboards for YouTube data.",
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Tableau-YouTube-Data-Analysis",
  },
  {
    name: "Food-Stat",
    description: "Analyzed food consumption trends using statistical models.",
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Food-Stat",
  },
  {
    name: "PII deIdentification",
    description: "Built a system to anonymize personally identifiable information (PII).",
    tags: [TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/PII-deIdentification",
  },
  {
    name: "Time-Table Scheduling",
    description: "Developed an algorithm for efficient timetable scheduling.",
    tags: [TAGS.SDE, TAGS.VANILLA_PROGRAMMING],
    repoLink: "https://github.com/ShubhPundir/Time-Table-Scheduling",
  },
  {
    name: "Topic-Modelling Analysis",
    description: "Applied NLP techniques to identify topics in large text corpora.",
    tags: [TAGS.NLP, TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Topic-Modelling-Analysis",
  },
  {
    name: "Image-Caption Generator",
    description: "Built a deep learning model to generate image captions.",
    tags: [TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/Image-Caption-Generator",
  },
  {
    name: "YOLO Drowsiness",
    description: "Implemented a YOLO-based drowsiness detection system.",
    tags: [TAGS.ML_DL, TAGS.CV],
    repoLink: "https://github.com/ShubhPundir/YOLO-Drowsiness",
  },
  {
    name: "Sentiment Score WebApp",
    description: "Developed a web app for sentiment analysis of text data.",
    tags: [TAGS.ML_DL, TAGS.NLP, TAGS.SDE],
    repoLink: "https://github.com/ShubhPundir/Sentiment-Score-WebApp",
  },
  {
    name: "Rental-Apartment-Regressor",
    description: "Created a predictive model for estimating apartment rental prices.",
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/Rental-Apartment-Regressor",
  },
  {
    name: "YouTube-Spam Filter",
    description: "Built an ML model to detect spam comments on YouTube videos.",
    tags: [TAGS.ML_DL, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/YouTube-Spam-Filter",
  },
  {
    name: "Caffe-Management",
    description: "Developed a full-stack cafe management system.",
    tags: [TAGS.SDE],
    repoLink: "https://github.com/ShubhPundir/Caffe-Management",
  },
  {
    name: "Glassdoor Job Profiling Recommendation System",
    description: "Designed a system to recommend jobs based on Glassdoor profiles.",
    tags: [TAGS.ML_DL, TAGS.NLP],
    repoLink: "https://github.com/ShubhPundir/Glassdoor-Job-Profiling-Recommendation-System",
  },
  {
    name: "CarPrice Regressor",
    description: "Built a machine learning model to predict car prices based on features.",
    tags: [TAGS.ML_DL],
    repoLink: "https://github.com/ShubhPundir/CarPrice-Regressor",
  },
  {
    name: "iNeuronStoreAnalysis",
    description: "Developed insights into iNeuron’s product sales and customer behavior.",
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/iNeuronStoreAnalysis",
  },
  {
    name: "Stores-Sales-Analysis + Market-Analysis",
    description: "Performed exploratory data analysis on sales and market trends.",
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Stores-Sales-Analysis-Market-Analysis",
  },
  {
    name: "Student Expenditure Analysis",
    description: "Analyzed student spending patterns using statistical methods.",
    tags: [TAGS.ANALYTICS],
    repoLink: "https://github.com/ShubhPundir/Student-Expenditure-Analysis",
  },
];

// Extract all unique tags
const allTags = Object.values(TAGS);

const AllProjects = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Handle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => project.tags.some((tag) => selectedTags.includes(tag)));

  return (
    <div className="all-projects">
      <h1>All Projects</h1>

      {/* Tag Filters */}
      <div className="filter-container">
        {Object.values(TAGS).map((tag) => (
          <label key={tag} className="tag-checkbox">
            <input
              type="checkbox"
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => toggleTag(tag)}
            />
            <span className="tag-box" style={{ backgroundColor: TAG_COLORS[tag] || "#000000" }}>
              {tag}
            </span>
          </label>
        ))}
      </div>

      {/* Project List (Horizontal Layout) */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Left Side: Name & Description */}
            <div className="project-info">
              <h3 className="project-name">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
            </div>

            {/* Right Side: Tags */}
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag" style={{ backgroundColor: TAG_COLORS[tag] || "#000000" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllProjects;
