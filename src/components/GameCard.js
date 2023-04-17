import React from 'react';
import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
  return (
    <div className={styles.gameCard}>
      <a href={`/portfolio/${game.id}`}>
        <img src={game.mainMenu} alt={game.title} className={styles.cardImg} />
      </a>
    </div>
  );
};

export default GameCard;