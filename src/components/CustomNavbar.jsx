import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidjet';
import {Link} from 'react-router-dom';

function CustumNavbar() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="./imagenes/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="category/rostro">Rostro</Nav.Link>
            <Nav.Link as={Link} to="category/labios">Labios</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link as={Link} to="cart"><CartWidget /> </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustumNavbar;