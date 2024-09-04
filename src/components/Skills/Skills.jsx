import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>What I Do</h1>
        <img src="theme_pattern.svg" alt="image" />
      </div>
      <div className="skill-container">
        <p>
          Crafting seamless digital experiences, from front-end finesse to
          back-end brilliance, while soaring into the cloud for scalable
          deployment that's as nimble as it is powerful.
        </p>
      </div>
      <div className="skill-contains">
        <div className="language">
          <h2>Programming Language</h2>
          <ul className="programming-skills">
            <li>
              <img src="javascript-logo.webp" alt="javascript" />
              JavaScript
            </li>
            <li>
              <img src="java.png" alt="java" />
              Core Java
            </li>
            <li>
              <img src="java.png" alt="java" />
              Advance Java
            </li>
            <li>
              <img src="python.png" alt="python" />
              Python
            </li>
            <li>
              <img src="c++.png" alt="C++" />
              C++
            </li>
          </ul>
        </div>
        <div className="web-dev">
          <h2>Web Development</h2>
          <ul className="web-skills">
            <li>
              <img src="html.png" alt="html" />
              HTML
            </li>
            <li>
              <img src="css.png" alt="css" />
              CSS
            </li>
            <li>
              <img src="react.png" alt="react" />
              React.js
            </li>
            <li>
              <img src="node.png" alt="node" />
              Node.js
            </li>
            <li>
              <img src="bootstrap.png" alt="bootstrap" />
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skills;
