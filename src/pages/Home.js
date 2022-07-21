import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Home.css';

const Home = () => {
  return (
    <div className = "bgd__header section__padding" id = "home">
      <div className = "bgd__header-content">
        <Fade triggerOnce cascade damping = {.3} direction = "up" duration = {750}>
          <h1 className = "gradient__text-new">Introduction</h1>
          <p>
            Howdy! My name is Connor Bowling, and I'm a junior at Texas A&M University - College Station studying Computer Science with a minor in Psychology. <br/> <br/>
            The purpose of this site is to just display some of my more complete games and the games I'm most proud of, so feel free to learn about each individual game or even try out them out for yourself!
          </p>
          <h1 className = "gradient__text-new">My Journey With Game Design</h1>
          <p>
            My interest in video game design was sparked when I attended a summer camp in 2014 (when I was 12 years old), and ever since, I've been designing and creating games.
            I started off making some 2D games for fun and learning purposes, and I soon fell in love with the process. Most people detest having to solve problems and fix bugs,
            but I found the process similar to puzzle solving, which has always been enjoyable to me. During my time in middle school and high school, I basically made a game for
            whatever school project I could. It was something very unique and allowed me to be creative in the ways I completed my school assignments. Moving on to college, I took a
            bit of a break from designing games to get acclimated, and then eventually joined the game design student organization, "Texas Aggie Game Developers". Since then,
            I've been participating in the club's semester-long game james with the goal of learning something new, especially Unreal Engine at the moment.
          </p>
          <h1 className = "gradient__text-new">Experience and Skills</h1>
          <p>
            If I hadn't discovered game design, I never would've learned such a wide variety of tools and skills, such as: <br/> <br/>
            <span class="bolded">Languages:</span> C#, C++, and Java <br/>
            <span class="bolded">Game Engines:</span> Unity and Unreal Engine <br/>
            <span class="bolded">Modeling and Rigging:</span> Blender <br/>
            <span class="bolded">Image Editing:</span> Photoshop, Gimp, and Paint Shop Pro <br/>
            <span class="bolded">Video Editing:</span> Hit Film Express and Windows Video Editor <br/>
            <span class="bolded">Source Control:</span> Git <br/>
            <span class="bolded">Organization and Planning:</span> Trello and Microsoft Word
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default Home;