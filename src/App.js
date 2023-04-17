import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import gamesData from './data/games.json';
import React, { useState, useEffect } from 'react';
import './App.css';

// Use require.context to load all images in the assets/games folder
const imagesContext = require.context('./assets/games', true, /\.(png|jpe?g)$/);

function App() {
  // Add this state to hold the games with images
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

  return (
    <div className="gradient__bg app">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage games={gamesWithImages} />} />
            <Route path="/portfolio/:id" element={<ProjectDetailPage games={gamesWithImages} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;