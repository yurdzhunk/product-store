import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Image, Row, Card, Button, Fade} from 'react-bootstrap';
import { CartContext } from '../context/context';
import CartItem from '../Components/CartItem';

const CartPage = () => {

    const {productsInCart, setProductsInCart} = useContext(CartContext);

    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(true), []);
    

    return  <Fade in={open} mountOnEnter>
                <Container>
                {
                    productsInCart.map(function(product, index) {
                        return  <CartItem product={product} key={index}/>
                                
                    })
                    }
                </Container>
                
            </Fade>
            
}

export default CartPage;