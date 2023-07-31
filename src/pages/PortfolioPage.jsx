import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gamesData from '../data/games.json';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import './PortfolioPage.css';

const imagesContext = require.context('../assets/games', true, /\.(webp)$/);

const PortfolioPage = () => {
    const [gamesWithImages, setGamesWithImages] = useState([]);

    useEffect(() => {
        const gamesWithImages = gamesData.map((game) => {
            const mainMenuImage = imagesContext(`./${game.id}/${game.mainMenu}`);
            const icon = imagesContext(`./${game.id}/${game.icon}`);
            const screenshots = game.screenshots.map((screenshot) => imagesContext(`./${game.id}/${screenshot}`));

            return { ...game, mainMenu: mainMenuImage, icon, screenshots };
        });

        setGamesWithImages(gamesWithImages);
    }, []);

    // Function to group games by their release year
    const groupGamesByYear = () => {
        const gamesByYear = {};

        gamesWithImages.forEach((game) => {
            const year = game.year;
            if (!gamesByYear[year]) {
                gamesByYear[year] = [];
            }
            gamesByYear[year].push(game);
        });

        return gamesByYear;
    };

    const gamesByYear = groupGamesByYear();
    const years = Object.keys(gamesByYear).sort((a, b) => b - a); // Sort years in descending order

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
                        <div className='gameCardGrid'>
                            {gamesByYear[year].map((game) => (
                                <div className='gameCard'>
                                    <Link to={`/portfolio/${game.id}`}>
                                        <img src={game.mainMenu} alt={game.title} className='cardImg' />
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