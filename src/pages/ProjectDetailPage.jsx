import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Container, Spinner } from 'react-bootstrap';
import gamesData from '../data/games.json';
import PageTransition from '../components/PageTransition';
import { loadGameImages } from '../utils/imageLoader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const gameData = gamesData.find((g) => g.id === id);
        if (gameData) {
            setGame(loadGameImages(gameData));
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="page-loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (!game) {
        return <h1>Game not found</h1>;
    }

    const { title, description, video, downloadLink, icon, zip, mainMenu, screenshots } = game;
    const videoId = video ? video.split('/').pop() : null;
    const paragraphs = description.split('\n\n');
    const isGooglePlay = downloadLink && downloadLink.includes('play.google.com');
    const downloadLabel = isGooglePlay
        ? `Download ${title} on Google Play`
        : `Download ${title} for Windows`;

    return (
        <PageTransition>
            <Container className="project-page">
                <h1>{title}</h1>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="description">{paragraph}</p>
                ))}

                {mainMenu && (
                    <div className="group">
                        <h2>Screenshots</h2>
                        <Carousel showThumbs={false} className="image-gallery-slide" dynamicHeight>
                            {[mainMenu, ...screenshots].map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`${title} screenshot ${index + 1} of ${screenshots.length + 1}`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}

                {videoId && (
                    <div className="group">
                        <h2>Game Playthrough</h2>
                        <iframe
                            title={`${title} playthrough video`}
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="640"
                            height="360"
                        />
                    </div>
                )}

                {downloadLink && (
                    <div className="group">
                        <h2>Game Download</h2>
                        <a href={downloadLink} target="_blank" rel="noreferrer" aria-label={downloadLabel}>
                            <img src={icon} alt={downloadLabel} className="icon" />
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
