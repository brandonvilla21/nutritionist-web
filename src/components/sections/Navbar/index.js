import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand='lg' style={{ backgroundColor: 'rgba(0,187,180,0.9)' }}>
      <Navbar.Brand href='#home'>
        <img
          style={{ width: '200px', height: '78px' }}
          src='https://healthyvita.mx/wp-content/uploads/2020/02/logo-horizontal-blanco-v3.png'
          alt='brand-logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
        <Nav >
          <Nav.Link href='#home'>Inicio</Nav.Link>
          <Nav.Link href='#consultas'>Consultas</Nav.Link>
          <Nav.Link href='#fitathon'>Fit-a-thón</Nav.Link>
          <Nav.Link href='#blog'>Blog</Nav.Link>
          <Nav.Link href='#productos'>Productos</Nav.Link>
          <Nav.Link href='#contacto'>Contacto</Nav.Link>
          <Nav.Link href='#login'>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
