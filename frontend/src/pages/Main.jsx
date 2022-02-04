import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import React from 'react';

const Main = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>Col</Col>
                <Col xs={3}>Col</Col>
                <Col xs={3}>Col</Col>
            {/* <Col xs={{ span: 3}}>Col</Col>
            <Col xs={{ span: 3}}>Col</Col>
            <Col xs={{ span: 3, offset: 3}}>Col</Col> */}
            </Row>
        </Container>
    );
};

export default Main;