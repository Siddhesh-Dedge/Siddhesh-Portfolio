import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projecta" className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <img src="theme_pattern.svg" alt="image" />
      </div>
      <div className="container">
        <div className="project-container">
          <h2>Path Finder (React.js, Dijkstra Algorithm)</h2>
          <p>The Path Finder Application, built with React...</p>
          <div className="project-links">
            <div className="project-readmore">
              <a
                href="https://github.com/Siddhesh-Dedge/Path-Finder-Algorithm"
                target="blank"
              >
                Read More
              </a>
            </div>
            <div className="project-live">
              <a
                href="https://path-finder-algorithm-ashy.vercel.app/"
                target="blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h2>Sorting Visualizer (React.js, Merge-Sort Algorithm)</h2>
          <p>The Merge Sort Visualizer, developed in React...</p>
          <div className="project-links">
            <div className="project-readmore">
              <a
                href="https://github.com/Siddhesh-Dedge/Merge-Sort-Visualizer"
                target="blank"
              >
                Read More
              </a>
            </div>
            <div className="project-live">
              <a
                href="https://merge-sort-visualizer-theta.vercel.app/"
                target="blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h2>
            Video Chat App (Node.js, React.js, WebRTC, Socket.io, HTML/CSS)
          </h2>
          <p>Welcome to the Video Chat App! Built with Node.js...</p>
          <div className="project-links">
            <div className="project-readmore">
              <a
                href="https://github.com/Siddhesh-Dedge/Video-Chat-App"
                target="blank"
              >
                Read More
              </a>
            </div>
            <div className="project-live">{/* <a>Live Link</a> */}</div>
          </div>
        </div>

        <div className="project-container">
          <h2>Weather-API (React.js, HTML/CSS, Weather-API)</h2>
          <p>
            In this project, I take input from the user, allowing them to enter
            a country...
          </p>
          <div className="project-links">
            <div className="project-readmore">
              <a
                href="https://github.com/Siddhesh-Dedge/Weather-App"
                target="blank"
              >
                Read More
              </a>
            </div>
            <div className="project-live">
              <a
                href="https://weather-app-iota-six-45.vercel.app/"
                target="blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <h2>Meme Generator (React.js, HTML/CSS, Rest-API)</h2>
          <p>
            Unleash your creativity with Meme Generator, the go-to app for
            crafting hilarious...
          </p>
          <div className="project-links">
            <div className="project-readmore">
              <a
                href="https://github.com/Siddhesh-Dedge/Meme-Generator-App"
                target="blank"
              >
                Read More
              </a>
            </div>
            <div className="project-live">
              <a
                href="https://meme-generator-app-theta.vercel.app/"
                target="blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
