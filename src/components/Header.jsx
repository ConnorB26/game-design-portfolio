import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/icons-logos/Logo.webp';
import logoMobile from '../assets/icons-logos/Logo-Mobile-NoBevel.webp';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/about", name: "About" },
  ];

  return (
    <Navbar bg="none" variant="dark" expand="lg" className={styles.customNav}>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt="Logo" className={`${styles.logo} ${styles.logoDesktop}`} />
          <img src={logoMobile} alt="Logo Mobile" className={`${styles.logo} ${styles.logoMobile}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            {routes.map(route => (
              <NavLink to={route.path} className={`nav-link ${styles.navItemText}`} activeClassName={styles.activeLink} key={route.path}>
                {route.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;