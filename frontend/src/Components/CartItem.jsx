import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {BagXFill} from 'react-bootstrap-icons';

const CartItem = (props) => {
    return (
        <Container>
            <Row style={{marginTop: '10px'}}>
                <Col xs={3} md={3}>
                    <Card.Img src={props.product.image} />
                </Col>
                <Col xs={3} md={3}>
                    <h5 style={{ paddingTop: '30%', fontFamily: 'sans-serif'}}>{props.product.name}</h5>
                </Col>
                <Col xs={2} md={2}>
                    <h5 style={{ paddingTop: '50%', fontFamily: 'sans-serif'}}>{props.product.number} * {props.product.price}$</h5>
                </Col>
                <Col xs={2} md={2}>
                    <h5 style={{ paddingTop: '50%', fontFamily: 'sans-serif'}}>{props.product.number * props.product.price}$</h5>
                </Col>
                <Col xs={2} md={2}>
                    <BagXFill id='cancel-prod' size={30} style={{marginTop: '45%'}}/>
                </Col>
            </Row>
            <hr />
        </Container>
    );
};

export default CartItem;