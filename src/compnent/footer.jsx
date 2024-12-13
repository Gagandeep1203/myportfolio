import React, { useState } from "react";
import "../css/footer.css"; // Ensure this file includes the new styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Gagan's Portfolio. All rights reserved.
        </p>
        <div className="footer-links">
<<<<<<< HEAD
          
         
       
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Gagandeep1203"
=======
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/gagan"
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
<<<<<<< HEAD
            href="https://www.linkedin.com/in/gagandeep-singh-21b333247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
=======
            href="https://linkedin.com/in/gagan"
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
<<<<<<< HEAD
          <a href="gagan2782003@gmail.com" className="social-link">
=======
          <a href="mailto:gagan@example.com" className="social-link">
>>>>>>> ecaf63186867df9c3944ae9d2ae7fde6c0ec63c9
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
