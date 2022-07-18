import React from 'react';
import ReactPlayer from 'react-player';
import ImageSlider from '../../components/imageslider/ImageSlider';
import './Template.css';

export const Template = (props) => {
  return (
    <div className = "bgd__template  section__padding">
      <div className = "bgd__template-content">
          <h1 className = "gradient__text-new">{props.title}</h1>
          <p>{props.paragraph}</p>
          <h2 className = "gradient__text-new">Gameplay Screenshots</h2>
          <ImageSlider slides = {props.images} />
          <h2 className = "gradient__text-new">{props.playthroughVid != null ? "Game Playthrough" : "Game Playthrough Not Available"}</h2>
          <div className = "bgd__template__videoplayer-wrapper">
            { props.playthroughVid != null &&
                <ReactPlayer url = {props.playthroughVid} controls = {true} className = "bgd__template__videoplayer" width = "640" height = "360"/>
            }
          </div>
          <h2 className = "gradient__text-new">Game Download</h2>
          <a href = {props.gameLink} target = "_blank" rel="noreferrer">
              <img className = "bgd__template-logo" src = {props.icon} alt = "Game Icon"/>
          </a>
          <p>{props.zip ? "To play the game, download the .zip, extra the files, then run the .exe" : ""}</p>
      </div>
    </div>
  )
}

export default Template;