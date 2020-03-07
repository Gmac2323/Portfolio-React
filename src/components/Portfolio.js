import React from "react";
import hiking from "../assets/hiking.jpeg";
import weatherDashboard from "../assets/weatherDashboard.jpeg";
import quiz from "../assets/quiz.jpeg";
import passwordGenerator from "../assets/passwordGenerator.jpeg"
import dayPlanner from "../assets/dayPlanner.jpeg"


function Portfolio() {
  return (
      
    
    <div className="body">
       
        <header className="header">
          <div class="header-content">
            <div class="name">Geoff McCammon</div>
            <nav class="nav">
              <a href="/" class="p5 button">About Me</a>
              <a href="/portfolio" class="p5 button">Portofolio</a>
              <a href="/contact" class="p5 button">Contact</a>
            </nav>
          </div>
        </header>
    
    
    
        <section class="section-main">
            <div class="section-content">
              <div class="portfolio-grid">
                <div>
                  <div class="txt-center margin12px font-large font-bold">
                    Weather Dashboard
                  </div>
                  <div>
                    <img
                      src={ weatherDashboard }
                      class="portfolio-image"
                    />
                  </div>
                  <div class="buttonAlign">
                    <a
                      target="_blank"
                      href="https://gmac2323.github.io/weatherDashboard/"
                      
                      class="button"
                      >Live</a>
                    
                    <a
                      target="_blank"
                      href="https://github.com/Gmac2323/weatherDashboard.git"
                      class="button"
                      >Repo</a>
                    
                  </div>
                </div>
                <div>
                  <div class="txt-center margin12px font-large font-bold">
                    Hiking Project
                  </div>
                  <div>
                    <img
                      src= { hiking }
                      class="portfolio-image"
                    />
                  </div>
                  <div class="buttonAlign">
                    <a
                      target="_blank"
                      href="https://poorva-ramani.github.io/HikingProject/"
                  
                      class="button"
                      >Live</a>
                    
                    <a
                      target="_blank"
                      href="https://github.com/poorva-ramani/HikingProject.git"
                      class="button"
                      >Repo</a>
                    
                  </div>
                </div>
                <div>
                  <div class="txt-center margin12px font-large font-bold">
                    Day Planner
                  </div>
                  <div>
                    <img
                      src= { dayPlanner }
                      class="portfolio-image"
                    />
                  </div>
                  <div class="buttonAlign">
                    <a
                      target="_blank"
                      href="https://gmac2323.github.io/dayplanner/"
                      class="button"
                      >Live</a>
                    
                    <a
                      target="_blank"
                      href="https://github.com/Gmac2323/dayplanner.git"
                      class="button"
                      >Repo</a>
                    
                  </div>
                </div>
                <div>
                  <div class="txt-center margin12px font-large font-bold">Quiz</div>
      
                  <div>
                    <img src= { quiz } class="portfolio-image" />
                  </div>
                  <div class="buttonAlign">
                    <a
                      target="_blank"
                      href="https://gmac2323.github.io/codequiz/"
                     
                      class="button"
                      >Live</a>
                    
                    <a
                      target="_blank"
                      href="https://github.com/Gmac2323/codequiz.git"
                      class="button"
                      >Repo</a>
                    
                  </div>
                </div>
                <div>
                  <div class="txt-center margin12px font-large font-bold">
                    Password Generator
                  </div>
                  <div>
                    <img
                      src= { passwordGenerator }
                      class="portfolio-image"
                    />
                  </div>
                  <div class="buttonAlign">
                    <a
                      target="_blank"
                      href="https://gmac2323.github.io/Password-Generator/"
                      
                      class="button"
                      >Live</a>
                    
                    <a
                      target="_blank"
                      href="https://github.com/Gmac2323/Password-Generator.git"
                      class="button"
                      >Repo</a>
                  
                  </div>
                </div>
              </div>
            </div>
            </section>
  </div>
  );
}

export default Portfolio;
