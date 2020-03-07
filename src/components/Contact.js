import React from "react";

function Contact() {
  return (
    <div className="body">
        
        <header className="header">
          <div className="header-content">
            <div className="name">Geoff McCammon</div>
            <nav className="nav">
              <a href="./" className="p5 button">About Me</a>
              <a href="./portfolio" className="p5 button">Portofolio</a>
              <a href="./contact" className="p5 button">Contact</a>
            </nav>
          </div>
        </header>
   
        <section className="section-main">
            <div className="section-content">
              <div className="contact-grid">
                <a href="resume.pdf" className="button">Resume</a>
                <a href="mailto:geoffreymccammon@gmail.com" className="button">Email</a>
                <a href="https://www.linkedin.com/in/geoffrey-mccammon/" className="button"
                  >LinkedIn</a>
                <a href="https://github.com/Gmac2323" className="button">GitHub</a>
              </div>
            </div>
          </section>
      
          
          <footer className="footer">
            <span></span>
          </footer>
        </div>
        
  );
}
export default Contact;
