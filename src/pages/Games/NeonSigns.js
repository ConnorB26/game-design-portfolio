import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/CandyThief-Icon.png';
import mainMenu from '../../assets/Game Materials/MainMenus/CandyThief-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/Screenshots/CandyThief1.jpg';
import ss2 from '../../assets/Game Materials/Screenshots/CandyThief2.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }];

export const NeonSigns = () => {
  return (
    <Template title = "Neon Signs" 
    paragraph = "This was the first video game I ever made at a 2 week summer video game design camp at SMU in 2014 at the age of 12. This was an amazing learning experience about the process of developing a 2D Platformer, and this is what started me on my game development path. This game helped me to start learning Photoshop, some coding in C#, and plenty of organization and planning skills."
    images = {ss}
    icon = {logo}
    gameLink = "https://www.dropbox.com/s/ggdk8edyxk54xxz/CandyThief.exe?dl=0"
    zip = {false}
    />
  )
}


export default NeonSigns;