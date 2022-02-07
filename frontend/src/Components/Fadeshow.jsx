import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/sale1.png';
import image2 from '../images/sale2.png';
import image3 from '../images/sale3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Slideshow = () => {
  return (
    <Container fluid>
        <Row>
            <Col md={4}>
                <Fade arrows={false}>
                    <div className="each-fade">
                        <div className="image-container">
                        <img src={image1} className='img-fluid'/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                        <img src={image2} className='img-fluid'/>
                        </div>
                    </div>
                </Fade>
            </Col>
            <Col md={4}>
                <Fade arrows={false}>
                    <div className="each-fade">
                        <div className="image-container">
                        <img src={image2} className='img-fluid'/>
                        </div>
                    </div>
                    < div className="each-fade">
                        <div className="image-container">
                        <img src={image3} className='img-fluid'/>
                        </div>
                    </div>
                </Fade>
            </Col>
            <Col md={4}>
                <Fade arrows={false}>
                    <div className="each-fade">
                        <div className="image-container">
                        <img src={image3} className='img-fluid'/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                        <img src={image1} className='img-fluid'/>
                        </div>
                    </div>
                </Fade>
            </Col>
        </Row>
    </Container>
  )
}

export default Slideshow;