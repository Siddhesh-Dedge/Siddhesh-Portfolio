import React from "react";
import "./Education.css";

function Education() {
  return (
    <div id="education" className="education">
      <div className="edu-title">
        <h1>My Education</h1>
        <img src="theme_pattern.svg" alt="" />
      </div>
      <div className="edu-container">
        <h1>Bachelor of Science in Computer Science</h1>
        <h3>Savitri Bai Phule Pune University, 2019-2023</h3>
        <p>
          I am a Computer Engineering graduate from Sinhgad Institute of
          Technology and Science, Narhe. I completed my Bachelor's degree with a
          commendable <span> CGPA of 7.99</span> , achieving First Class with
          Distinctions. My educational journey has equipped me with a solid
          foundation in computer engineering principles and technologies,
          preparing me to excel in the dynamic field of technology and
          innovation.
        </p>
        <p>
          <span>Relevent Coursework: </span>Object Oriented Programming, Data
          Structure and Algorithm, Software Testing and Quality Assurance,
          Machine Learning, Web Development.
        </p>
      </div>
    </div>
  );
}
export default Education;
