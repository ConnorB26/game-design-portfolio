import React from 'react';
import ReactTooltip from 'react-tooltip';
import mailWork from '../../assets/Other Assets/MailIcon Blue.png';
import mailPers from '../../assets/Other Assets/MailIcon Green.png';
import googlePlayLogo from '../../assets/Other Assets/GooglePlayLogo.png';
import youtubeLogo from '../../assets/Other Assets/YouTubeLogo.png';
import linkedInLogo from '../../assets/Other Assets/LinkedInLogo.png';
import pdfLogo from '../../assets/Other Assets/PDFIcon.png'
import githubLogo from '../../assets/Other Assets/GitHubIcon.png'
import './footer.css';

const Footer = () => {
  return (
    <div className = "bgd_footer-wrapper">
      <hr color = "#e3e3e3" size = "2" align = "center"/>
      <div className = "bgd__footer">
        <ReactTooltip className = "bgd__tooltip" backgroundColor = "#002853"/>
        <div className = "bgd__footer-images">
          <a href = {'mailto:bowlinggamedesign@gmail.com'} target = "_blank" rel="noopener noreferrer">
            <img src={mailWork} alt = "Game Design Email" data-tip = "Game Design Email"/>
          </a>
          <a href = "https://www.linkedin.com/in/connor-bowling/" target = "_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt = "LinkedIn" data-tip = "LinkedIn"/>
          </a>
          <a href = "https://www.github.com/ConnorB26" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt = "GitHub" data-tip = "GitHub"/>
          </a>
          <a href = {'mailto:connorbowling26@gmail.com'} target = "_blank" rel="noopener noreferrer">
          <img src={mailPers} alt = "Personal Email" data-tip = "Personal Email"/>
          </a>
          <a href = "https://play.google.com/store/apps/developer?id=BowlingGames" target = "_blank" rel="noopener noreferrer">
            <img src={googlePlayLogo} alt = "Google Play" data-tip = "Google Play Developer Page"/>
          </a>
          <a href = "https://www.youtube.com/channel/UC7BMrUMx2Ox0RQjxNJDK1jQ" target = "_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt = "YouTube Channel" data-tip = "YouTube Channel"/>
          </a>
          <a href = "https://www.dropbox.com/s/f64d7nq2ekkqet6/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
            <img src={pdfLogo} alt = "Resume" data-tip = "Resume"/>
          </a>
        </div>
        <p> ©2022 Bowling Game Design </p>
      </div>
    </div>
  )
}

export default Footer;