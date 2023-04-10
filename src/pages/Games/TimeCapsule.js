import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/TimeCapsule-Icon.png';
import mainMenu from '../../assets/Game Materials/MainMenus/TimeCapsule-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/Screenshots/Capsule1.jpg';
import ss2 from '../../assets/Game Materials/Screenshots/Capsule2.jpg';
import ss3 from '../../assets/Game Materials/Screenshots/Capsule3.jpg';
import ss4 from '../../assets/Game Materials/Screenshots/Capsule4.jpg';
import ss5 from '../../assets/Game Materials/Screenshots/Capsule5.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }, { image: ss5 }];

export const TimeCapsule = () => {
  return (
    <Template title = "COVID-19 Time Capsule" 
    paragraph = "This game was created for a world history class assignment in which the goal was to create any form of presentation to showcase five different items as a sort of time capsule from during the pandemic. I decided that creating a video game for this project would be a fun way to continue developing my game design skills while creating a unique product that would help my grade in the class. I wanted to go with a theme for my five objects and selected different apps that exploded in popularity during the coronavirus. I had to include descriptions with each object as to why I chose it, but after creating a fake phone UI in Unity, I realized there wasn't much actual gameplay to it. I had some extra time, so I created a little 3D environment and learned a bunch about modifying terrain environment in realtime to create a digging system so that the player could actually 'find' the time capsule and then explore the apps. This game was a great opportunity to practice some previously learned skills and learn more about UI/UX design within a game engine."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/2tkK14yDTrA"
    gameLink = "https://www.dropbox.com/s/zstj92dbz4i32e4/Covid%20Time%20Capsule.zip?dl=0"
    zip = {true}
    />
  )
}


export default TimeCapsule;