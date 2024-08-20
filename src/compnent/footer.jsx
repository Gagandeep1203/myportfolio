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
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gagan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a href="mailto:gagan@example.com" className="social-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
