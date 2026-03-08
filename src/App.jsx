import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Inner component so useLocation can be called inside Router
function AppContent() {
    const location = useLocation();

    return (
        <>
            <a href="#main-content" className="skip-nav">Skip to main content</a>
            <Header />
            <main id="main-content" className="main-content">
                <Suspense fallback={<div className="page-loading">Loading...</div>}>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </AnimatePresence>
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

function App() {
    return (
        <div className="gradient__bg app">
            <Router>
                <AppContent />
            </Router>
        </div>
    );
}

export default App;
