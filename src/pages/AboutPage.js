import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaGooglePlay, FaCode, FaGamepad, FaBone, FaCamera, FaVideo, FaCodeBranch, FaStickyNote, FaFilePdf } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";
import './AboutPage.css';

const AboutPage = () => {
  return (
    <Container>
      <Fade triggerOnce cascade damping={0.3} direction="up" duration={750}>
        <h1>About</h1>
        <p>
          I am a Computer Science student with a minor in Psychology at Texas A&amp;M University - College Station. My passion for game development started at a young age and has since driven me to acquire various skills and experiences.
        </p>
      </Fade>
      <Fade triggerOnce cascade damping={0.3} direction="up" duration={750} delay={150}>
        <h2>Experience and Skills</h2>
        <p>
          If I hadn't discovered game design, I never would've learned such a wide variety of tools and skills, such as:
        </p>
        <ul>
          <Fade triggerOnce cascade damping={0.3} direction="up" duration={750} delay={250}>
            <li><FaCode /> <strong>Languages:</strong> C#, C++, and Java</li>
            <li><FaGamepad /> <strong>Game Engines:</strong> Unity and Unreal Engine</li>
            <li><FaBone /> <strong>Modeling and Rigging:</strong> Blender</li>
            <li><FaCamera /> <strong>Image Editing:</strong> Photoshop, Gimp, and Paint Shop Pro</li>
            <li><FaVideo /> <strong>Video Editing:</strong> Hit Film Express and Windows Video Editor</li>
            <li><FaCodeBranch /> <strong>Source Control:</strong> Git</li>
            <li><FaStickyNote /> <strong>Organization and Planning:</strong> Trello and Microsoft Word</li>
          </Fade>
        </ul>
      </Fade>
      <Fade triggerOnce cascade damping={0.3} direction="up" duration={750} delay={400}>
        <h2>Contact & Links</h2>
        <p>
          Below, you will find various ways to get in touch with me as well as links to my online profiles and portfolios. These resources showcase my skills, experiences, and projects in different areas of game development, design, and programming.
        </p>
        <ul>
          <Fade triggerOnce cascade damping={0.3} direction="up" duration={1000} delay={500}>
            <li><FaEnvelope /> <strong>Game Design Email:</strong> <a href={'mailto:bowlinggamedesign@gmail.com'} target="_blank" rel="noopener noreferrer">bowlinggamedesign@gmail.com</a></li>
            <li><FaEnvelope /> <strong>Personal Email:</strong> <a href={'mailto:connorbowling26@gmail.com'} target="_blank" rel="noopener noreferrer">connorbowling26@gmail.com</a></li>
            <li><FaLinkedin /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/connor-bowling/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/connor-bowling/</a></li>
            <li><FaGithub /> <strong>GitHub:</strong> <a href="https://www.github.com/ConnorB26" target="_blank" rel="noreferrer">https://www.github.com/ConnorB26</a></li>
            <li><FaGooglePlay /> <strong>Google Play:</strong> <a href="https://play.google.com/store/apps/developer?id=BowlingGames" target="_blank" rel="noreferrer">https://play.google.com/store/apps/developer?id=BowlingGames</a></li>
            <li><FaYoutube /> <strong>YouTube:</strong> <a href="https://www.youtube.com/channel/UC7BMrUMx2Ox0RQjxNJDK1jQ" target="_blank" rel="noreferrer">https://www.youtube.com/channel/UC7BMrUMx2Ox0RQjxNJDK1jQ</a></li>
            <li><FaFilePdf /> <a href="https://www.dropbox.com/s/teiuuhge4b11v17/Resume.pdf?dl=0" target="_blank" rel="noreferrer"><strong>Resume</strong> </a></li>
          </Fade>
        </ul>
      </Fade>
    </Container >
  );
};

export default AboutPage;
