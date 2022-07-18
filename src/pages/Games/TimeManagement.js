import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/TimeManagement-Icon.png';
import mainMenu from '../../assets/Game Materials/JPG MainMenus/TimeManagement-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/JPG Screenshots/TimeManagement1.jpg';
import ss2 from '../../assets/Game Materials/JPG Screenshots/TimeManagement2.jpg';
import ss3 from '../../assets/Game Materials/JPG Screenshots/TimeManagement3.jpg';
import ss4 from '../../assets/Game Materials/JPG Screenshots/TimeManagement4.jpg';
import ss5 from '../../assets/Game Materials/JPG Screenshots/TimeManagement5.jpg';
import ss6 from '../../assets/Game Materials/JPG Screenshots/TimeManagement6.jpg';
import ss7 from '../../assets/Game Materials/JPG Screenshots/TimeManagement7.jpg';
import ss8 from '../../assets/Game Materials/JPG Screenshots/TimeManagement8.jpg';
import ss9 from '../../assets/Game Materials/JPG Screenshots/TimeManagement9.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }, { image: ss5 }, { image: ss6 }, { image: ss7 }, { image: ss8 }, { image: ss9 }];

export const TimeManagement = () => {
  return (
    <Template title = "Time Management" 
    paragraph = "This game was designed and created as a part of a team for the game jam that the Texas Aggie Game Developers hosts every semester. Being the first full game that I'd designed in over a year, I decided to work with a team of beginners and help them learn while re-familiarizing myself with the basics of 2D game design. My role in the team was to do the programming and help with some of the game design, while overall organizing the group meetings once a week. However, to challenge myself in such a simple-style game, I came up with some ideas for mechanics that would test myself while creating a unique gaming experience for the player. Our initial idea for the game was a 2D puzzle platformer, but after some feedback from people within the organization, we shifted towards an endless 2D tower defense game, lessening our scope to be more feasible to accomplish since all of us were also attending classes at the same time. Overall, this game was a good refresher for myself and a great additional experience for me to have working with a team of people."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/GZtjhoAxUF0"
    gameLink = "https://www.dropbox.com/s/ngi0p0fbhktn7zt/TimeManagement.zip?dl=0"
    zip = {true}
    />
  )
}


export default TimeManagement;