import React from 'react';
import CardItem from '../components/cards/CardItem';
import { Slide } from 'react-awesome-reveal';
import './Projects.css';

import timeManagement from '../assets/Game Materials/MainMenus/TimeManagement-MainMenu.jpg';
import timeCapsule from '../assets/Game Materials/MainMenus/TimeCapsule-MainMenu.jpg';
import vacDest from '../assets/Game Materials/MainMenus/VD-MainMenu.jpg';
import nockFletcher from '../assets/Game Materials/MainMenus/NockFletcher-MainMenu.jpg';
import fade from '../assets/Game Materials/MainMenus/Fade-MainMenu.jpg';
import debugging from '../assets/Game Materials/MainMenus/Debugging-MainMenu.jpg';
import futureMe from '../assets/Game Materials/MainMenus/FutureMe-MainMenu.jpg';
import minionMania from '../assets/Game Materials/MainMenus/MinionMania-MainMenu.jpg';
import candyThief from '../assets/Game Materials/MainMenus/CandyThief-MainMenu.jpg';
import neonSigns from '../assets/Game Materials/MainMenus/NeonSigns-MainMenu.jpg';

export const Projects = () => {
  return (
    <div className="bgd__projects section__padding" id="projects">
      <Slide cascading triggerOnce>
        <h1 className="gradient__text-new">2023</h1>
        <div className="bgd__projects-games">
          <CardItem src={neonSigns} path="/projects/neon-signs" />
        </div>
        <h1 className="gradient__text-new">2021</h1>
        <div className="bgd__projects-games">
          <CardItem src={timeManagement} path="/projects/time-management" />
          <CardItem src={timeCapsule} path="/projects/time-capsule" />
        </div>
        <h1 className="gradient__text-new">2020</h1>
        <div className="bgd__projects-games">
          <CardItem src={vacDest} path="/projects/vaccination-destination" />
          <CardItem src={nockFletcher} path="/projects/nock-fletcher" />
        </div>
        <h1 className="gradient__text-new">2019</h1>
        <div className="bgd__projects-games">
          <CardItem src={fade} path="/projects/fade" />
          <CardItem src={debugging} path="/projects/debugging" />
        </div>
        <h1 className="gradient__text-new">2017</h1>
        <div className="bgd__projects-games">
          <CardItem src={futureMe} path="/projects/future-me" />
        </div>
        <h1 className="gradient__text-new">2015</h1>
        <div className="bgd__projects-games">
          <CardItem src={minionMania} path="/projects/minion-mania" />
        </div>
        <h1 className="gradient__text-new">2014</h1>
        <div className="bgd__projects-games">
          <CardItem src={candyThief} path="/projects/candy-thief" />
        </div>
      </Slide>
    </div>
  )
}

export default Projects;