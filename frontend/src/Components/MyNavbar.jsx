import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {PersonCircle} from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";

const MyNavbar = () => {

    const navigate = useNavigate();


    return (
        <Navbar bg="dark" variant='dark' expand="md" sticky='top'>
            <Container>
                <Navbar.Brand href="/main">Product-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'grocery'} })}>Grocery</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'milk'} })}>Milk</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'meat_and_cheese'} })}>Meat and Cheese</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'drinks'} })}>Drinks</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'bakery'} })}>Bakery</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'all'} })}>All products</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id='nvl' href="/sales">Sales</Nav.Link>
                        <Nav.Link id='nvl' href="/near">Nearest store</Nav.Link>
                        <Nav.Link id='nvl' href="/about">About store</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link id='nvl' href="/about">Login</Nav.Link>
                        <PersonCircle color='grey' size={26} style={{marginTop: '7px'}}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;