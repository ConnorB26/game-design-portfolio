import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

    // Group games by release year
    const groupGamesByYear = () => {
        const gamesByYear = {};
        gamesWithImages.forEach((game) => {
            if (!gamesByYear[game.year]) {
                gamesByYear[game.year] = [];
            }
            gamesByYear[game.year].push(game);
        });
        return gamesByYear;
    };

    const gamesByYear = groupGamesByYear();
    const years = Object.keys(gamesByYear).sort((a, b) => b - a);

    return (
        <PageTransition>
            <Container>
                {years.map((year) => (
                    <div key={year}>
                        <Row>
                            <Col>
                                <h1 className="text-center">{year}</h1>
                            </Col>
                        </Row>
                        <div className="gameCardGrid">
                            {gamesByYear[year].map((game) => (
                                <div key={game.id} className="gameCard">
                                    <Link to={`/portfolio/${game.id}`}>
                                        <img src={game.mainMenu} alt={game.title} className="cardImg" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </PageTransition>
    );
};

export default PortfolioPage;
