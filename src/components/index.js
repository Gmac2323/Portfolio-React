import React from "react";


function Home() {
  return (
    
    <div className="body">
  
  <header className="header">
    <div className="header-content">
      <div className="name">Geoff McCammon</div>
      <nav className="nav">
        <a href="/" className="p5 button">About Me</a>
        <a href="/portfolio" className="p5 button">Portofolio</a>
        <a href="/contact" className="p5 button">Contact</a>
      </nav>
    </div>
  </header>

<section className="section-main">
    <div className="section-content">
      
        <img src="https://pbs.twimg.com/profile_images/800509365/17061_1234489779444_1145160130_30687979_8261634_n_400x400.jpg" className="headshot" />
      <p>
        <h1>About me</h1>
      </p>
      <p className="about-description">
        I'm an ex-pro basketball player that has been working as a Financial advisor and Director of business development for the last 5 years. As a 1099 financial advisor I was responsibe for my business as a whole. I aventually hired staff, and began taking care of the community financially by becoming responsible for the financial future of many families and young professionals.
      </p>
      <p className="about-description">
          I have always been tech savy. Growing up I spent alot of time building computers with my father as a hobby. We would connect 4-5 together on a LAN connection and play alot of the classic computer games many know of. This sparked a constant interest in how things work and how websites, apps, and games are really created. As a junior developer at Northwestern University I hope to continue to grow and find a company that challenges me but also continues to develope my skills as a developer.
      </p>
    </div>
  </section>
  <footer className="footer">
    <span></span>
  </footer>
</div>
  );
}

export default Home;
