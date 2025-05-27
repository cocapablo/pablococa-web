import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

function CartWidget() { //Esto hay que cambiarlo después
  return (  
    <img src='logo.png' alt='Carrito de compras'></img>
  )
}

export function BarraDeNavegacion() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >
          <Link className="btn" to="/">
            <img src='logo.png' alt='Imagen de Pablo Coca'>
            </img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/">Inicio</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/quiensoy">Quien Soy</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/videos">Videos</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/contacto">Contacto</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/about">Acerca de</NavLink>            
            {/* <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/capas">Capas</NavLink>
            
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/vehiculos">Vehículos</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/guaridas">Guaridas</NavLink>
            <NavLink className={({isActive}) => isActive ? "btn btn-dark" : "btn"} to="/categoria/superarmas">Super Armas</NavLink> */}
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="">
              <Link className="btn" to="/cart">
              <CartWidget />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}