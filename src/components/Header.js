import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/icons-logos/Logo.png';
import logoMobile from '../assets/icons-logos/Logo-Mobile-NoBevel.png';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="none" variant="dark" expand="lg" className={styles.customNav}>
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="Logo" className={`${styles.logo} ${styles.logoDesktop}`} />
          <img src={logoMobile} alt="Logo Mobile" className={`${styles.logo} ${styles.logoMobile}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav activeKey={location.pathname} className="ms-auto">
            <Nav.Link href="/" className={styles.navItemText}>Home</Nav.Link>
            <Nav.Link href="/portfolio" className={styles.navItemText}>Games</Nav.Link>
            <Nav.Link href="/about" className={styles.navItemText}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;