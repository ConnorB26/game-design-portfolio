import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/NockFletcher-Icon.png';
import mainMenu from '../../assets/Game Materials/MainMenus/NockFletcher-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/Screenshots/NockFletcher1.jpg';
import ss2 from '../../assets/Game Materials/Screenshots/NockFletcher2.jpg';
import ss3 from '../../assets/Game Materials/Screenshots/NockFletcher3.jpg';
import ss4 from '../../assets/Game Materials/Screenshots/NockFletcher4.jpg';
import ss5 from '../../assets/Game Materials/Screenshots/NockFletcher5.jpg';
import ss6 from '../../assets/Game Materials/Screenshots/NockFletcher6.jpg';
import ss7 from '../../assets/Game Materials/Screenshots/NockFletcher7.jpg';
import ss8 from '../../assets/Game Materials/Screenshots/NockFletcher8.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }, { image: ss5 }, { image: ss6 }, { image: ss7 }, { image: ss8 }];

export const NockFletcher = () => {
  return (
    <Template title = "The Adventures of Nock Fletcher" 
    paragraph = "This game was designed for Technology Student Association's Video Game Design competition, just like Debugging from the year before. This year, I really wanted to challenge myself by using a render pipeline I had never used before, and by focusing more on visuals in 3D. Our team made this decision and worked hard to have insane graphics as to set ourselves apart from the competition, but sadly, we never got to compete due to the convention being canceled as a result of COVID-19. After we heard it was canceled, we lost motivation and never finished the game, so there isn't a ton of gameplay and the game can be laggy as it wasn't optimized yet, but I am still proud of the hard work put it and the unique-ness of it. The story for this game was supposed to be that you are an experience archer on your way to an archery tournament in the castle. However, to get there, you have to use your special arrows to complete puzzles in the different zones on your way. There was a bomb arrow, ice arrow, fire arrow, sonar arrow, and a chain arrow, and each type of arrow had multiple uses. For example, the chain arrow was used to create ziplines you could ride on, or chains dangling down that you could climb up. My job in my team was all of the scripting and some of the level design again, but I spent so long focusing on all of the mechanics being perfect that we never really got any full puzzles completed, but it was a really good learning experience. As a result of this project, I was able to enhance my skills in 3D modeling, sound design, animation, scripting, shader development, photo editing, and much more, making me a more well-rounded game developer."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://youtu.be/UGk-haOq9-c"
    gameLink = "https://www.dropbox.com/s/9pou47vfqp6zbjk/AdventuresOfNockFletcher.exe?dl=0"
    zip = {false}
    />
  )
}


export default NockFletcher;