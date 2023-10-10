import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcon from "../images/cartIcon.png"

function NavBar() {

    const cartProducts = useSelector(state => state.cart)
    
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">We Shop</Navbar.Brand>
        <Nav>
          <Nav.Link style={{color: "blue", fontWeight: "bold", fontSize: "20px", marginRight: "30px"}} to="/" as={Link}>Items</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}><img src={CartIcon} alt="Shopping Bag" style={{width: "20px", height: "20px"}}/> Your Bag {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
