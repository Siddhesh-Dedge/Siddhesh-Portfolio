import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="logo.png" alt="" />
          <p>
            I'm computer engineer and full-stack developer with a passion for
            creating responsive web pages.
          </p>
        </div>
        <div className="footer-top-right">
          <img src="user_icon.svg" alt="" />
          <p>Siddhesh Dedge</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
