import React from 'react';
import styles from './GameCard.module.css';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className={styles.gameCard}>
      <Link to={`/portfolio/${game.id}`}>
        <img src={game.mainMenu} alt={game.title} className={styles.cardImg} />
      </Link>
    </div>
  );
};

export default GameCard;