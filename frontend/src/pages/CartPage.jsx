import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Image, Row, Card, Button, Fade} from 'react-bootstrap';
import { CartContext } from '../context/context';
import CartItem from '../Components/CartItem';
import { animated, useSpring } from 'react-spring';

const CartPage = () => {

    const {productsInCart, setProductsInCart} = useContext(CartContext);

    const [open, setOpen] = useState(false);
    useEffect(() => setOpen(true), []);

    const [style1, api1] = useSpring(() => ({ 
        delay: 300,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }))

    const removeItem = (id) => {
        console.log('id    ' + id);
        console.log('c    ' + productsInCart);
        let a = productsInCart;
        a.splice(id, 1);
        setProductsInCart([...a]);
    }
    

    return  <Fade in={open} mountOnEnter>
                <Container>
                {
                    productsInCart.map(function(product, index) {
                        return  (
                            <animated.div key={index}>
                                <CartItem product={product} ind={index} remove={removeItem}/>
                            </animated.div>
                        
                        )
                                
                    })
                    }
                </Container>
                
            </Fade>
            
}

export default CartPage;