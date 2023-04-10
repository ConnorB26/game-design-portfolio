import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/MinionMania-Icon.png';
import mainMenu from '../../assets/Game Materials/MainMenus/MinionMania-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/Screenshots/MinionMania1.jpg';
import ss2 from '../../assets/Game Materials/Screenshots/MinionMania2.jpg';
import ss3 from '../../assets/Game Materials/Screenshots/MinionMania3.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }];

export const MinionMania = () => {
  return (
    <Template title = "Minion Mania" 
    paragraph = "This game was made in 2015 at the same 2-week summer SMU video game design camp that I had attended in 2014 (where I made Candy Thief). At the time, my little sister had just turned 6 and was obsessed with the Minions from Despicable Me, so I decided I would make a 2D arcade game for her. I thought this game was a lot of fun to play and make, and it gave me a chance to try making something different than a standard 2D platformer. For this game, I made almost all of the visuals by myself with all of the Photoshop I had learned, and I even coded some of my first scripts entirely by myself. Overall, this was an exciting and big stepping stone in my game design journey."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/bFAUzpeL2Iw"
    gameLink = "https://www.dropbox.com/s/vd3dl2g6k681i8s/MinionMania.exe?dl=0"
    zip = {false}
    />
  )
}


export default MinionMania;