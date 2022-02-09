import React, { createRef, useRef } from 'react';
import {useParams} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useState, useEffect, useMemo} from 'react';
import { Container, Row, Col, Button, Accordion, Card, Form, Fade} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { productCollection } from '../data/ProductCollection';

const Products = (props) => {

    const location = useLocation();

    const [parameters, setParameters] = useState({
        category: 'all',
        producer: 'any',
        priceLimit: 100
    });

    const [products, setProducts] = useState(productCollection);

    const categoryRef = useRef();
    const producerRef = useRef();
    const moneyRef = useRef();

    const [rangeValue, setRangeValue] = useState(100);

    useEffect(() => {
        if (location.state != null) {
            setParameters({category: location.state.category, producer: 'any', priceLimit: 100});
        }
        categoryRef.current.value = 'all';
        producerRef.current.value = 'any';
        moneyRef.current.value = 100;
        setRangeValue(100);
    }, [location.state]);

    //sorting
    useEffect(() => {
        console.log('sort of products');
        console.log(parameters);
    }, [parameters]);


    //Quantity of products to buy

    const [inpNumber, setInpNumber] = useState([]);
    const [bought, setBought] = useState([]);
    const [btnVar, setBtnVar] = useState([]);
    const [btnVal, setBtnVal] = useState([]);

    useEffect(() => {
        let a = []
        let b = []
        let c = []
        let d = []
        for (let i=0; i<products.length ; i+=1 ){
            a.push(1);       
        }
        for (let i=0; i<products.length ; i+=1 ){
            b.push(false);       
        }
        for (let i=0; i<products.length ; i+=1 ){
            c.push('primary');       
        }
        for (let i=0; i<products.length ; i+=1 ){
            d.push('Buy');       
        }
        setInpNumber(a);
        setBought(b);
        setBtnVar(c);
        setBtnVal(d);
    }, [products]);

    const minusQuantity = (id) => {
        if (inpNumber[id] > 1){
            let a = inpNumber;
            a.splice(id, 1, a[id] - 1);
            setInpNumber([...a]);
            console.log(inpNumber);
        }
        else {
            console.log('else');
        }
    }

    const plusQuantity = (id) => {
        if (inpNumber[id] < products[id].qnty){
            let a = inpNumber;
            a.splice(id, 1, a[id] + 1);
            setInpNumber([...a]);
            console.log(inpNumber);
        }
        else {
            console.log('else');
        }
    }

    const buyProduct = (id) => {
        console.log('works');
        let a = bought;
        a.splice(id, 1, true);
        setBought([...a]);

        let b = btnVar;
        b.splice(id, 1, 'success');
        setBtnVar([...b]);

        let c = btnVal;
        c.splice(id, 1, 'Done');
        setBtnVal([...c]);
    }
   

    return <div>
                
                <Container fluid>
                    <Row>
                        <Accordion onMouseDown={e => e.preventDefault()}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Filters</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Form.Label>Category of products:</Form.Label>
                                            <Form.Select ref={categoryRef} onChange={event => setParameters({...parameters, category: event.target.value})} >
                                                <option value="all">All</option>
                                                <option value="grocery">Grocery</option>
                                                <option value="milk">Milk</option>
                                                <option value="meat and cheese">Meat and Cheese</option>
                                                <option value="drinks">Drinks</option>
                                                <option value="bakery">Bakery</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Form.Label>Producer:</Form.Label>
                                            <Form.Select ref={producerRef} onChange={event => setParameters({...parameters, producer: event.target.value})}>
                                                <option value="any">any</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Form.Label>Price limit:</Form.Label>
                                            <Form.Range 
                                                ref={moneyRef}
                                                min={0.0} 
                                                max={100.0} 
                                                step={0.5} 
                                                defaultValue={100} 
                                                onInput={event => setRangeValue(event.target.value)} 
                                                onMouseUp={event => setParameters({...parameters, priceLimit: event.target.value})}
                                                onTouchEnd={event => setParameters({...parameters, priceLimit: event.target.value})}
                                            />
                                            <span>{rangeValue}$</span>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>

                    <Row>
                        {
                            products.map(function(product, index) {
                                return <Col xs={6} md={4} key={index}>
                                            <Card style={{ width: '100%' }}>
                                                <LazyLoad>
                                                    <Card.Img variant="top" src={product.image} />
                                                </LazyLoad>
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the bulk of
                                                        the card's content.
                                                    </Card.Text>
                                                    <hr />
                                                        <Row>
                                                            <Col xs={12} md={{ span: 8, offset: 3}}>
                                                                <Button 
                                                                variant='light'
                                                                onClick={event => minusQuantity(index)}
                                                                style={{marginLeft: '10px'}}
                                                                onMouseDown={e => e.preventDefault()}
                                                                >-</Button>
                                                                <span  
                                                                style={{width: '30px', textAlign: 'center', margin: '3px', padding: '10px'}} 
                                                                >{inpNumber[index]}</span>
                                                                <Button 
                                                                variant='light'
                                                                onClick={event => plusQuantity(index)}
                                                                onMouseDown={e => e.preventDefault()}
                                                                >+</Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Button 
                                                                id='btn-action' 
                                                                variant={btnVar[index]} 
                                                                style={{ width: '100%', marginTop: '3px'}} 
                                                                onMouseDown={e => e.preventDefault()}
                                                                onClick={() => buyProduct(index)}
                                                                >
                                                                {btnVal[index]}
                                                            </Button>
                                                        </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                            })
                        }
                    </Row>
                </Container>
            </div>

};

export default Products;