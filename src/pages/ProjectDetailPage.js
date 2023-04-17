import React from 'react';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';

const ProjectDetailPage = ({ games }) => {
    const { id } = useParams();
    const game = games.find((game) => game.id === id);

    if (!game) {
        return <h1>Game not found</h1>;
    }

    const { title, description, video, downloadLink, icon, zip, mainMenu, screenshots } = game;
    const videoId = video.split('/').pop();
    const images = [mainMenu].concat(screenshots);
    const paragraphs = description.split('\n\n');

    return (
        <div className="container project-page">
            <Fade duration={1250} triggerOnce>
                <h1>{title}</h1>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="description">{paragraph}</p>
                ))}

                {screenshots && screenshots.length > 0 && (
                    <div className='group'>
                        <h2>Gameplay Screenshots</h2>
                        <Carousel showThumbs={false} className="image-gallery-slide" dynamicHeight>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}

                {video && (
                    <div className='group'>
                        <h2>Game Playthrough</h2>
                        <iframe
                            title={`YouTube video player for ${title}`}
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="640" height="360"
                        />
                    </div>
                )}

                {downloadLink && (
                    <div className='group'>
                        <h2>Game Download</h2>
                        <a href={downloadLink} target="_blank" rel="noreferrer">
                            <img src={icon} alt="Download" className="icon" />
                        </a>
                    </div>
                )}

                {downloadLink && zip && (
                    <p className="zip-info-text">
                        To play the game, download the .zip, extract the files to a folder, then run the .exe inside.
                    </p>
                )}
            </Fade>
        </div>
    );
};

export default ProjectDetailPage;
