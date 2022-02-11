import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring';
import image1 from '../images/s1.png'
import image2 from '../images/s2.png'
import image3 from '../images/s3.png'
import image4 from '../images/p1.png'
import image5 from '../images/p2.png'
import image6 from '../images/p3.png'
import { CartContext } from '../context/context';

const Sales = () => {


    const {productsInCart, setProductsInCart} = useContext(CartContext);


    const [style1, api1] = useSpring(() => ({ 
        delay: 300,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }))

    const [style2, api2] = useSpring(() => ({ 
        delay: 750,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }))
    

    return <Container>
        <Row>
            <Col md={{span: 4}}>
                <animated.div style={style1}>
                    <Card.Img src={image1}/>
                </animated.div>
            </Col>
            <Col md={{span: 4}}>
                <animated.div style={style1}>
                    <Card.Img src={image2}/>
                </animated.div>
            </Col>
            <Col md={{span: 4}}>
                <animated.div style={style1}>
                    <Card.Img src={image3}/>
                </animated.div>
            </Col>
        </Row>
        <Row style={{marginTop: '50px'}}>
            <Col md={{span: 4}}>
                <animated.div style={style2}>
                    <Card.Img src={image4}/>
                </animated.div>
            </Col>
            <Col md={{span: 4}}>
                <animated.div style={style2}>
                    <Card.Img src={image5}/>
                </animated.div>
            </Col>
            <Col md={{span: 4}}>
                <animated.div style={style2}>
                    <Card.Img src={image6}/>
                </animated.div>
            </Col>
        </Row>   
            </Container>
    ;
};

export default Sales;