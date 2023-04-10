import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/FutureMe-Icon.png';
import mainMenu from '../../assets/Game Materials/MainMenus/FutureMe-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/Screenshots/FutureMe1.jpg';
import ss2 from '../../assets/Game Materials/Screenshots/FutureMe2.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }];

export const FutureMe = () => {
  return (
    <Template title = "Future Me" 
    paragraph = "This is the only game on this site that was made as a part of a school project, but I'm pretty proud of how it turned out with the amount of knowledge I had at the time, even if it isn't a typical game. Basically, at the beginning of my sophomore year in high school, my English teacher gave us a project where we had to research 3 colleges we wanted to go to, and develop some sort of presentation to go along with it. I ended up making it into a game where you drive down the different paths to observe information about each of the 3 colleges. This game only took me about a week, but it was one of my first experiences with 3D game design, and I was really proud of how the driving mechanics turned out. This is an example of how I used Unity for different purposes than it is generally used for, and I plan to continue testing to what extent Unity can be used for."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/zZshChd3Uig"
    gameLink = "https://www.dropbox.com/s/zdg6b83k90mmcv0/FutureMe.exe?dl=0"
    zip = {false}
    />
  )
}


export default FutureMe;