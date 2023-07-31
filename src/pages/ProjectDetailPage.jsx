import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import gamesData from '../data/games.json';
import PageTransition from '../components/PageTransition';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';
import { Container } from 'react-bootstrap';

const imagesContext = require.context('../assets/games', true, /\.(webp)$/);

const ProjectDetailPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const gameData = gamesData.find((game) => game.id === id);

        if (gameData) {
            const mainMenuImage = imagesContext(`./${gameData.id}/${gameData.mainMenu}`);
            const icon = imagesContext(`./${gameData.id}/${gameData.icon}`);
            const screenshots = gameData.screenshots.map((screenshot) => imagesContext(`./${gameData.id}/${screenshot}`));

            setGame({ ...gameData, mainMenu: mainMenuImage, icon, screenshots });
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        return;
    }

    if (!game) {
        return <h1>Game not found</h1>;
    }

    const { title, description, video, downloadLink, icon, zip, mainMenu, screenshots } = game;
    const videoId = video.split('/').pop();
    const images = [mainMenu].concat(screenshots);
    const paragraphs = description.split('\n\n');

    return (
        <PageTransition>
            <Container className="project-page">
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
            </Container>
        </PageTransition>
    );
};

export default ProjectDetailPage;
