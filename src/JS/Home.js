import React, { useRef, useEffect, useState } from "react";
import "../CSS/Home.css";
import "../CSS/Profile.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function HomePage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add any additional logic here if needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State to handle the hamburger menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='home-page'>
      <header>
        <h1>Razaq.portfolio</h1>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a onClick={() => scrollToSection(aboutRef)}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection(projectsRef)}>Projects</a>
            </li>
            <li>
              <a onClick={() => scrollToSection(contactRef)}>Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className='hero-section'>
          <div className='profile-section'>
            <img className='profile' src='../Imgs/profile.png' />
            <div className='text-section'>
              <h2>
                Front-End React Developer
                <img className='hand' src='../Imgs/hand.png' alt='Hand' />
              </h2>
              <p className='p-tag'>
                Your gateway to my creativity. Hi, I'm Abdul Razaq.<br/> A passionate
                Front-end React Developer based in Hyderabad, India. 📍
              </p>
            </div>
          </div>
        </section>

        <h2 className='lang-name'>Languages Used To Create Pages</h2>
        <div className='languages'>
          <img src='../Imgs/html.png' alt='' className='language' />
          <img src='../Imgs/css.png' alt='' className='language' />
          <img src='../Imgs/js.png' alt='' className='language' />
          <img src='../Imgs/react.png' alt='' className='language' />
        </div>
      </main>

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      {/* Add more sections to showcase your skills, achievements, etc. */}
      {/* Don't forget to add the corresponding useRef for each section */}

      <footer>&copy; {new Date().getFullYear()} Abdul Razaq</footer>
    </div>
  );
}

export default HomePage;
