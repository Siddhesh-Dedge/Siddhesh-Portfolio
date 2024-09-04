import React from "react";
import "./Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <nav>
      <div id="home" className="home">
        <div className="img-container">
          <img src="003.jpg" alt="image" />
        </div>

        <h1>
          Hi, <span>I'm Siddhesh Dedge</span>, a computer engineer and
          full-stack developer
        </h1>
        <p>
          I'm computer engineer and full-stack developer with a passion for
          creating responsive web pages and engaging web games. I specialize in
          both front-end and back-end development, ensuring seamless and
          interactive user experiences. My expertise spans across designing
          intuitive interfaces and developing robust server-side applications.
          I'm dedicated to building dynamic and innovative web solutions that
          captivate users and meet modern standards.
        </p>
        <div className="home-action">
          <div className="home-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="home-resume">
            <a href="SiddheshDedgeResume.pdf" download>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Home;
