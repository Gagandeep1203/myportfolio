import React from "react";
import "../css/footer.css"; // Ensure this file includes the new styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Gagan's Portfolio. All rights reserved.
        </p>
        <div className="footer-links">
          <div className="footer-socials">
            <a href="https://github.com/Gagandeep1203" className="social-link">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gagandeep-singh-21b333247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gagan2782003@gmail.com"
              className="social-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
