import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/icons-logos/Logo.png';
import logoMobile from '../assets/icons-logos/Logo-Mobile-NoBevel.png';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

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
            <Link to="" className={`nav-link ${styles.navItemText}`}>Home</Link>
            <Link to="portfolio" className={`nav-link ${styles.navItemText}`}>Portfolio</Link>
            <Link to="about" className={`nav-link ${styles.navItemText}`}>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;