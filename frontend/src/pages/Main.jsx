import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React from 'react';
import Slideshow from '../Components/Slideshow';
import Fadeshow from '../Components/Fadeshow';

const Main = () => {
    return (
        <Container fluid>
            <Row style={{ innerHeight: '300px'}}>
                <Slideshow />
                <h1 style={{textAlign: 'center', margin: '30px 30px'}}>SALES</h1>
                <Fadeshow />
            </Row>
        </Container>
    );
};

export default Main;