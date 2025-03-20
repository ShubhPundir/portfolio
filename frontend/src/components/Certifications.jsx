import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {/* First Row */}
        <div className="cert-item">
          <h3>MongoDB Fundamentals</h3>
          <p><strong>Issued by:</strong> MongoDB Academy</p>
          <p><strong>Year:</strong> 2024</p>
          <p>Learned NoSQL, Mongo Workspaces and database connectivities to applications.</p>
          <a href="https://learn.mongodb.com/c/OiUBAvhtRpiU1-KnzEJZdA" target="_blank" rel="noreferrer">View Certificate</a>
        </div>

        <div className="cert-item">
          <h3>Microsoft Azure Fundamentals (AZ-900)</h3>
          <p><strong>Issued by:</strong> Microsoft</p>
          <p><strong>Year:</strong> 2024</p>
          <p>Understanding of cloud computing concepts and Azure services. Deployment of ML and AUTOML Apps onto the Azure and Databricks.</p>
          <a href="https://www.credly.com/badges/7fd53f8c-be3e-48bf-acbb-34d7a42423b5/linked_in_profile" target="_blank" rel="noreferrer">View Certificate</a>
        </div>

        <div className="cert-item">
          <h3>AWS Academy Data Engineering</h3>
          <p><strong>Issued by:</strong> AWS</p>
          <p><strong>Year:</strong> 2025</p>
          <p>Practiced Cloud Data Engineering and validated knowledge on ETL pipelines.</p>
          <a href="https://www.credly.com/badges/dcca2a23-24c9-4e5b-ad4e-47334d91c51c/public_url" target="_blank" rel="noreferrer">View Certificate</a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
