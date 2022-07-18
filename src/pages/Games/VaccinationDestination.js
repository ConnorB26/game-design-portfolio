import React from 'react';
import Template from './Template';

import logo from '../../assets/Other Assets/DownloadIconWhite.png';
import mainMenu from '../../assets/Game Materials/JPG MainMenus/VD-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/JPG Screenshots/VD1.jpg';
import ss2 from '../../assets/Game Materials/JPG Screenshots/VD2.jpg';
import ss3 from '../../assets/Game Materials/JPG Screenshots/VD3.jpg';
import ss4 from '../../assets/Game Materials/JPG Screenshots/VD4.jpg';
import ss5 from '../../assets/Game Materials/JPG Screenshots/VD5.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }, { image: ss5 }];

export const VaccinationDestination = () => {
  return (
    <Template title = "Vaccination Destinations" 
    paragraph = "This game was made as a part of the Texas A&M Howdy Hack in under 24 hours as a part of a team of four. This was my first time attending a hack-a-thon (which was entirely virtually because of COVID-19) and creating a project in such a short amount of time. Most of my recent games have been 3D or a different kind of 2D game, so it was nice to return to a simple 2D platformer and try something new with it. Although we didn't get too far with the levels, it was a great learning experience for getting to work with a team again and test our skills in such a limited period."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/kKGOXYL2RmA"
    gameLink = "https://www.dropbox.com/s/1h6v28a8dmyhn85/VaccinationDestination.exe?dl=0"
    zip = {false}
    />
  )
}


export default VaccinationDestination;