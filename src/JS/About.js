import React, { useEffect } from "react";
import "../CSS/About.css";

function AboutMe() {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    aboutSection.classList.add("fade-in");
  }, []);

  return (
    <section id='about' className='about-section'>
      <h2 className='animation'>About Me</h2>
      <p>
        Hi, I'm Abdul Razaq! I am a passionate web developer with a strong focus
        on front-end technologies. I enjoy creating beautiful and interactive
        user experiences using the latest web technologies. My journey as a
        developer began several years ago, and since then, I've been constantly
        learning and growing my skills in web development.
      </p>
      <p>
        When I'm not coding, you can find me exploring new coding challenges,
        contributing to open-source projects, or enjoying a good cup of coffee
        while reading tech blogs.
      </p>
    </section>
  );
}

export default AboutMe;
