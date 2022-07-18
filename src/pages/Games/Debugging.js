import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/Debugging-Icon.png';
import mainMenu from '../../assets/Game Materials/JPG MainMenus/Debugging-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/JPG Screenshots/Debugging1.jpg';
import ss2 from '../../assets/Game Materials/JPG Screenshots/Debugging2.jpg';
import ss3 from '../../assets/Game Materials/JPG Screenshots/Debugging3.jpg';
import ss4 from '../../assets/Game Materials/JPG Screenshots/Debugging4.jpg';
import ss5 from '../../assets/Game Materials/JPG Screenshots/Debugging5.jpg';
import ss6 from '../../assets/Game Materials/JPG Screenshots/Debugging6.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }, { image: ss5 }, { image: ss6 }];

export const Debugging = () => {
  return (
    <Template title = "Debugging" 
    paragraph = "This game was developed over the span of 3 months to compete in the state-wide Texas Technology Student Association video game design competition. I was assigned a team for this project, in which none of them had any prior game design experience, so we decided to do a 2D platformer as it would be easier for the other members to learn and contribute. However, since I had already had plenty of experience with 2D games, I decided to add a bunch of extra features to make the game a bit more than a simple 2D platformer to set us apart from the competition. This was my first time working on a game with a team, in which my role was to do all of the scripting and a good portion of the level design. Every year, TSA announces a theme for the competition in which your game must follow, and ours was 'TSA Based'. It was a very general and weird theme, but we took it a bit more literally and designed the game to where you could 'switch careers' and use an ability relative to that career (class based system). The story of the game is that you are inside of a computer, and you must save it from a virus by solving all of the puzzles before the virus kills you, 'Debugging' the computer as you go. For example, the Architect could build objects into existence, the Robotic Engineer could spawn a small, controllable robot to get into small spaces to solve puzzles, along with multiple other roles. I am extremely proud of this project as it was the longest I had spent on a single game (500+ hours by myself), and it is the most complete and closest to publishing out of any of my pc games. My team and I ended up placing in the finals at the state competition, our hard work finally paying off. Overall, the stuff I learned working on this project mostly has to do with collaboration, working as a team, documenting code, and much more."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/fG5Cb3R4ORw"
    gameLink = "https://www.dropbox.com/s/15zdojtt50vm4ob/Debugging.exe?dl=0"
    zip = {false}
    />
  )
}


export default Debugging;