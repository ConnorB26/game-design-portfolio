import React from 'react';
import Template from './Template';

import logo from '../../assets/Game Materials/Icons/Fade-Icon.png';
import mainMenu from '../../assets/Game Materials/JPG MainMenus/Fade-MainMenu.jpg';
import ss1 from '../../assets/Game Materials/JPG Screenshots/Fade1.jpg';
import ss2 from '../../assets/Game Materials/JPG Screenshots/Fade2.jpg';
import ss3 from '../../assets/Game Materials/JPG Screenshots/Fade3.jpg';
import ss4 from '../../assets/Game Materials/JPG Screenshots/Fade4.jpg';

const ss = [{ image: mainMenu }, { image: ss1 }, { image: ss2 }, { image: ss3 }, { image: ss4 }];

export const Fade = () => {
  return (
    <Template title = "Fade" 
    paragraph = "In 2018, I really wanted to try my hand at making a mobile game, since all of the games I had made up to that point had solely been for computers. My idea was to have a 2D platformer where the screen was dark, but once you discovered an area, it stayed lit. However, after dozens of hours of research, I couldn't figure out a way to accomplish my vision within Unity using my skillset, so I gave up pretty quickly on that project. Later that year, I wanted to try making a mobile game again. I really liked the concept of only being able to see around the player that I had before, but this time, I wanted it to be an endless side scroller where the only control was to tap to make the ball jump. Like before, you were only able to see around the player, but this time what stopped me from finishing the game was me not being able to get the Java Development Kit (JDK) working properly within Unity, so my game wasn't going to be able to be built to a mobile version. Fast forward to 2019, and I really wanted to try making a mobile game again, and the idea of only being able to see a small area around the player just stuck with me. This time, I wanted to make a more casual game where you dragged the player around the screen, dodging moving rectangles that moved across the screen at increasing speeds. Unlike before, I had no troubles setting up the JDK, and I was even able to implement cool features, like a Google Play leader board that linked to your Google Play account. I decided I wanted to try publishing it once it got to a pretty finished state, so I purchased a Google Developer License, and so I did just that. This game was a great experience for learning more of the business and administrator side of game development and publishing, and I can't wait to possibly continue and update this game in the future."
    images = {ss}
    icon = {logo}
    playthroughVid = "https://www.youtube.com/watch?v=tHt2ClgeouE"
    gameLink = "https://play.google.com/store/apps/details?id=com.bowlinggames.fade"
    zip = {false}
    />
  )
}


export default Fade;