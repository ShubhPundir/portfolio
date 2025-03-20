import React from "react";
import "../styles/Education.css"; // Ensure you create this file for styling

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <p>The Northcap University, 2022 - 2026</p>
          <p><strong>CGPA:</strong> 8.98</p>
        </div>

        <div className="education-item">
          <h3>ISC: Grade 12th</h3>
          <p>Sri Sri Academy, 2020 - 2022</p>
          <p><strong>Percentage:</strong> 90.0%</p>
        </div>

				<div className="education-item">
          <h3>ICSE: Grade 10th</h3>
          <p>Sri Sri Academy, 2020 - 2020</p>
          <p><strong>Percentage:</strong> 94.7%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
