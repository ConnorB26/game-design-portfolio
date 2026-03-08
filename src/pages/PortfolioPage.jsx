import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gamesData from '../data/games.json';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { loadGameImages } from '../utils/imageLoader';
import './PortfolioPage.css';

const PortfolioPage = () => {
    const [gamesWithImages, setGamesWithImages] = useState([]);

    useEffect(() => {
        const resolved = gamesData.map((game) =>
            loadGameImages(game, { includeScreenshots: false })
        );
        setGamesWithImages(resolved);
    }, []);

    const sortedGames = [...gamesWithImages].sort((a, b) => a.year - b.year);

    return (
        <PageTransition>
            <div className="portfolio-timeline">
                <div className="tl-spine" />
                {sortedGames.map((game, index) => {
                    const isLeft = index % 2 === 0;
                    const showYear =
                        index === 0 || sortedGames[index - 1].year !== game.year;
                    return (
                        <div
                            key={game.id}
                            className={`tl-item ${isLeft ? 'tl-left' : 'tl-right'}`}
                        >
                            <div className="tl-dot">
                                <div className="tl-dot-circle" />
                                {showYear && (
                                    <span className="tl-year-label">{game.year}</span>
                                )}
                            </div>
                            <motion.div
                                className="tl-card-wrapper"
                                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                            >
                                <Link to={`/portfolio/${game.id}`} className="tl-card">
                                    <img
                                        src={game.mainMenu}
                                        alt={game.title}
                                        className="tl-card-img"
                                    />
                                    <div className="tl-card-footer">
                                        <span className="tl-card-title">{game.title}</span>
                                        <span className="tl-card-year-badge">{game.year}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </PageTransition>
    );
};

export default PortfolioPage;
