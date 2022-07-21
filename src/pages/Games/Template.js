import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import ImageSlider from '../../components/imageslider/ImageSlider';
import { Fade } from 'react-awesome-reveal';
import './Template.css';

export const Template = (props) => {
  return (
    <div className = "bgd__template  section__padding">
      <div className = "bgd__template-content">
        <Fade duration = {1250} triggerOnce>
          <div className = "bgd__template-group">
            <h1 className = "gradient__text-new">{props.title}</h1>
            <p>{props.paragraph}</p>
          </div>
          <div className = "bgd__template-group">
            <h2 className = "gradient__text-new">Gameplay Screenshots</h2>
            <ImageSlider slides = {props.images}/>
          </div>
          <div className = "bgd__template-group">
            <h2 className = "gradient__text-new">{props.playthroughVid != null ? "Game Playthrough" : "Game Playthrough Not Available"}</h2>
            <div className = "bgd__template__videoplayer-wrapper">
              { props.playthroughVid != null &&
                  <ReactPlayer url = {props.playthroughVid} controls = {true} className = "bgd__template__videoplayer" width = "640" height = "360"/>
              }
            </div>
          </div>
          <div className = "bgd__template-group">
            <h2 className = "gradient__text-new">Game Download</h2>
            <a href = {props.gameLink} target = "_blank" rel="noopener noreferrer">
                <img className = "bgd__template-logo" src = {props.icon} alt = "Game Icon"/>
            </a>
            <p>{props.zip ? "To play the game, download the .zip, extract the files to a folder, then run the .exe inside" : ""}</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Template;