import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => (
    <PageTransition>
        <Container>
            <h1>404 — Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/">Go back home</Link>
        </Container>
    </PageTransition>
);

export default NotFoundPage;
