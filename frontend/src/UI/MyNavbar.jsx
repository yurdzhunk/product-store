import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {PersonCircle, CartFill} from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MyModal from './MyModal';
import CartPage from '../pages/CartPage';
import '../styles/App.css'

const MyNavbar = () => {

    const navigate = useNavigate();

    const [openCart, setOpenCart] = useState(false);


    return (
        <Navbar bg="dark" variant='dark' expand="md" sticky='top'>
            <Container>
                <Navbar.Brand onClick={() => navigate('/main')} style={{cursor: 'pointer'}}>Product-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'Grocery'} })}>Grocery</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'Milk'} })}>Milk</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'Meat_and_Cheese'} })}>Meat and Cheese</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'Drinks'} })}>Drinks</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'Bakery'} })}>Bakery</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => navigate('/products', { state: {category: 'All'} })}>All products</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id='nvl' onClick={() => navigate('/sales')}>Sales</Nav.Link>
                        <Nav.Link id='nvl' onClick={() => navigate('/location')}>Location</Nav.Link>
                        <Nav.Link id='nvl' onClick={() => navigate('/about')}>About store</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <CartFill 
                        size={26}
                        id='nav-cart'
                        onClick = {() => navigate('/cart')}
                        />
                        <PersonCircle color='grey' size={26} style={{marginTop: '7px', cursor: 'pointer'}} onClick={() => navigate('/login')}/>
                        <Nav.Link id='nvl' onClick={() => navigate('/login')}>Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;