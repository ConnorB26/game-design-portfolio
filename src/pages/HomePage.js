import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  return (
    <Container>
      <Fade triggerOnce cascade damping={.3} direction="up" duration={750}>
        <h1>Introduction</h1>
        <p>
          Howdy! My name is Connor Bowling, and I'm an undergraduate student at Texas A&M University - College Station, pursuing a degree in Computer Science with a minor in Psychology.
        </p>
        <p>
          This site showcases a selection of my completed games and the ones I'm most proud of. Feel free to explore each game, learn more about them, and even try them out for yourself!
        </p>
        <h2>My Journey With Game Design</h2>
        <p>
          My passion for game design ignited in 2014 when I attended a summer camp at the age of 12. Since then, I've been immersed in designing and creating games. I started with 2D games as a fun way to learn, and quickly fell in love with the process. While many find problem-solving and bug-fixing tedious, I enjoy it as it reminds me of solving puzzles.
        </p>
        <p>
          Throughout middle school and high school, I incorporated game design into my school projects whenever possible, as it allowed me to express my creativity in unique ways. In college, after a brief hiatus to acclimate to my new environment, I joined the "Texas Aggie Game Developers" student organization. I have since participated in the club's semester-long game jams, aiming to learn new skills, with a focus on Unreal Engine recently.
        </p>
        <p>
          My most recent endeavor involved leveraging my game development experience for research and educational purposes, showcasing the versatile applications of this passion of mine.
        </p>
      </Fade>
    </Container>
  );
};

export default HomePage;