import React from 'react';
import mailWork from '../../assets/Other Assets/MailIcon Blue.png';
import mailPers from '../../assets/Other Assets/MailIcon Green.png';
//import googlePlayLogo from '../../assets/Other Assets/GooglePlayLogo.png';
//import youtubeLogo from '../../assets/Other Assets/YouTubeLogo.png';
import linkedInLogo from '../../assets/Other Assets/LinkedInLogo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className = "bgd__footer">
      <a href = {'mailto:bowlinggamedesign@gmail.com'} target = "_blank" rel="noreferrer">
        <img src={mailWork} alt = "Game Design Email"/>
      </a>
      <a href = "https://www.linkedin.com/in/connor-bowling/" target = "_blank" rel="noreferrer">
        <img src={linkedInLogo} alt = "LinkedIn"/>
      </a>
      <a href = {'mailto:connorbowling26@gmail.com'} target = "_blank" rel="noreferrer">
      <img src={mailPers} alt = "Personal Email"/>
      </a>
      {/*
      <a href = "https://play.google.com/store/apps/details?id=com.bowlinggames.fade" target = "_blank" rel="noreferrer">
        <img src={googlePlayLogo} alt = "Google Play"/>
      </a>
      <a href = "https://www.youtube.com/channel/UC7BMrUMx2Ox0RQjxNJDK1jQ" target = "_blank" rel="noreferrer">
        <img src={youtubeLogo} alt = "YouTube Channel"/>
      </a>
      */}
    </div>
  )
}

export default Footer;