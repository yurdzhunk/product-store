import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import image1 from '../images/marketMap.png';

const Location = () => {
    return (
        
        <Container>
            <Col md={{ span: 8, offset: 2}} style={{marginTop: '30px'}}>
                <Card.Img src={image1} ></Card.Img>
            </Col>
        </Container>
    );
};

export default Location;