import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import GameCard from '../components/GameCard';
import GameCardGrid from '../components/GameCardGrid';

const PortfolioPage = ({ games }) => {
  // Function to group games by their release year
  const groupGamesByYear = () => {
    const gamesByYear = {};

    games.forEach((game) => {
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
    <Container>
      <Fade cascade triggerOnce>
        {years.map((year) => (
          <div key={year}>
            <Row>
              <Col>
                <h1 className="text-center">{year}</h1>
              </Col>
            </Row>
            <GameCardGrid>
              {gamesByYear[year].map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </GameCardGrid>
          </div>
        ))}
      </Fade>
    </Container>
  );
};

export default PortfolioPage;