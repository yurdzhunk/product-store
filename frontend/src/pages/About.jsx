import React, { useContext } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';
import { CartContext } from '../context/context';
import image1 from '../images/supermarket.jpeg';

const About = () => {

    const {productsInCart, setProductsInCart} = useContext(CartContext);

    const [style1, api1] = useSpring(() => ({ 
        delay: 300,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }))

    return (
            <Container>
                <Col md={{span: 8, offset: 2}}>
                    <animated.div style={style1}>
                        <Card style={{marginTop: '30px'}}>
                            <Card.Header>
                            <h1 style={{textAlign: 'center'}}>Product-store Retail Chain</h1>
                            </Card.Header>
                            <Card.Body>
                            <p>
                                One of the largest national chains of food supermarkets. 
                                Silpo supermarkets are self-service stores with product 
                                ranges consisting of up to 20 000 items of food and related products, 
                                depending on the sales area of each store.
                            </p>
                            </Card.Body>
                            <Card.Img src={image1} />
                        </Card>
                    </animated.div>
                </Col>
            </Container>
    )
};

export default About;