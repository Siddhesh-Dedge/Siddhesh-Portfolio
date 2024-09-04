import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img className="logo" src="logo.png" alt="logo" />
      <img
        src="menu_open.svg"
        onClick={openMenu}
        alt="menu_open"
        className="nav-menu-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src="menu_close.svg"
          onClick={closeMenu}
          alt="menu_close"
          className="nav-menu-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src="nav_underline.svg" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("skills")}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src="nav_underline.svg" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src="nav_underline.svg" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
          {menu === "education" ? <img src="nav_underline.svg" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src="nav_underline.svg" /> : <></>}
        </li>
      </ul>
      {/* <div className="nav-connect">Connect With Me</div> */}
    </div>
  );
}
export default Navbar;
