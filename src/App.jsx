import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
    return (
        <div className="gradient__bg app">
            <Router>
                <Header />
                <main className="main-content">
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;