import React from 'react';
import styles from './GameCardGrid.module.css';

const GameCardGrid = ({ children }) => {
  return <div className={styles.gameCardGrid}>{children}</div>;
};

export default GameCardGrid;