import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Container, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import gamesData from '../data/games.json';
import PageTransition from '../components/PageTransition';
import { loadGameImages } from '../utils/imageLoader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';

const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|[?&]v=)([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
};

const sectionVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

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

    const { title, description, year, video, downloadLink, icon, zip, mainMenu, screenshots } = game;
    const videoId = getYouTubeId(video);
    const paragraphs = description.split('\n\n');
    const allScreenshots = [mainMenu, ...screenshots];
    const hasMedia = allScreenshots.length > 0 || videoId || downloadLink;
    const hasSidebar = videoId || downloadLink;

    return (
        <PageTransition>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <div
                className="game-hero"
                style={{ backgroundImage: `url(${mainMenu})` }}
            >
                <div className="hero-gradient" />
                <div className="hero-inner">
                    <Link to="/portfolio" className="hero-back">
                        <FaArrowLeft /> Portfolio
                    </Link>
                    <div className="hero-meta">
                        <span className="hero-year">{year}</span>
                        <h1 className="hero-title">{title}</h1>
                    </div>
                </div>
            </div>

            {/* ── Content ──────────────────────────────────────────── */}
            <Container className="detail-content">

                {/* About */}
                <motion.section
                    className="detail-section"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <span className="section-label">About</span>
                    {paragraphs.map((p, i) => (
                        <p key={i} className="detail-paragraph">{p}</p>
                    ))}
                </motion.section>

                {/* Media — screenshots + video + download */}
                {hasMedia && (
                    <motion.section
                        className="detail-section"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <div className={`media-grid ${!hasSidebar ? 'media-grid--full' : ''}`}>

                            {/* Left: screenshots */}
                            {allScreenshots.length > 0 && (
                                <div className="media-col media-col--main">
                                    <span className="section-label">Screenshots</span>
                                    <div className="carousel-wrapper">
                                        <Carousel
                                            showThumbs={false}
                                            showStatus={false}
                                            infiniteLoop
                                            dynamicHeight={false}
                                        >
                                            {allScreenshots.map((image, i) => (
                                                <div key={i} className="carousel-slide">
                                                    <img
                                                        src={image}
                                                        alt={`${title} screenshot ${i + 1}`}
                                                    />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            )}

                            {/* Right: video + download */}
                            {hasSidebar && (
                                <div className="media-col media-col--side">
                                    {videoId && (
                                        <div className="media-block">
                                            <span className="section-label">Playthrough</span>
                                            <div className="video-wrapper">
                                                <iframe
                                                    title={`${title} playthrough`}
                                                    src={`https://www.youtube.com/embed/${videoId}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {downloadLink && (
                                        <div className="media-block">
                                            <span className="section-label">Download</span>
                                            <a
                                                href={downloadLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="download-btn"
                                                aria-label={`Download ${title}`}
                                            >
                                                <img src={icon} alt="" className="download-icon" />
                                                <span className="download-name">{title}</span>
                                                <FaDownload className="download-arrow" />
                                            </a>
                                            {zip && (
                                                <p className="zip-note">
                                                    Extract the .zip, then run the .exe inside to play.
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </motion.section>
                )}

            </Container>
        </PageTransition>
    );
};

export default ProjectDetailPage;
