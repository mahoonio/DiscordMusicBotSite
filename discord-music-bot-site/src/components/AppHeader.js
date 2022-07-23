import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './AppHeader.module.css';
import robotIcon from '../assets/roboticon.svg';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { IoIosLogIn } from 'react-icons/io';

const AppHeader = () => {
  const location = useLocation();
  const [btnContent, setBtnContent] = useState('Login');

  console.log(location.pathname);
  const onBtnMouseEnter = () => {
    setBtnContent(<IoIosLogIn size={'26px'} />);
  };
  const onBtnMouseExit = () => {
    setBtnContent('Login');
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Brand className={`${styles.navbrand} d-flex`} href="/">
          <img src={robotIcon} width="50px" />
          <h2 className="mx-2">Mylo</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto`}>
            <Nav.Link
              className={`${styles.navlinks} ${
                location.pathname === '/commands' ? styles.currentlink : ''
              }`}
              href="/commands"
            >
              Commands
            </Nav.Link>
            <Nav.Link
              className={`${styles.navlinks} ${
                location.pathname === '/articles' ? styles.currentlink : ''
              }`}
              href="/articles"
            >
              Articles
            </Nav.Link>
          </Nav>
          <Nav className={styles.loginbtnborderup}>
            <Button
              onMouseEnter={onBtnMouseEnter}
              // onMouseOut={onBtnMouseExit}
              onMouseLeave={onBtnMouseExit}
              className={`${styles.loginbtn}`}
            >
              {btnContent}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
