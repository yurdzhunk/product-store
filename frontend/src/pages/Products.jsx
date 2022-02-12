import React, { useRef } from 'react';
import {useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Container, Row, Col, Button, Accordion, Card, Form, Fade} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import { productCollection } from '../data/ProductCollection';
import { animated, useSpring } from 'react-spring';
import { useContext } from 'react';
import { CartContext } from '../context/context';

const Products = (props) => {

    const location = useLocation();
    const {productsInCart, setProductsInCart} = useContext(CartContext);

    const [parameters, setParameters] = useState({
        category: 'All',
        producer: 'Any',
        priceLimit: 100
    });

    const [products, setProducts] = useState(productCollection);

    const categoryRef = useRef();
    const producerRef = useRef();
    const moneyRef = useRef();

    const [rangeValue, setRangeValue] = useState(100);

    useEffect(() => {
        if (location.state != null) {
            setParameters({category: location.state.category, producer: 'Any', priceLimit: 100});
        }
        categoryRef.current.value = 'All';
        producerRef.current.value = 'Any';
        moneyRef.current.value = 100;
        setRangeValue(100);
    }, [location.state]);

    //filter
    useEffect(() => {

        let tempArray = productCollection;
        if (parameters.category != 'All') {
            tempArray = tempArray.filter(p => p.category == parameters.category);    
        }
        if (parameters.producer != 'Any') {
            tempArray = tempArray.filter(p => p.producer == parameters.producer);
        }
        tempArray = tempArray.filter(p => p.price <= parameters.priceLimit);
        setProducts([...tempArray]);
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
        }
        else {
        }
    }

    const plusQuantity = (id) => {
        if (inpNumber[id] < products[id].qnty){
            let a = inpNumber;
            a.splice(id, 1, a[id] + 1);
            setInpNumber([...a]);
        }
        else {
            console.log('else');
        }
    }

    const buyProduct = (id) => {
        let a = bought;
        a.splice(id, 1, true);
        setBought([...a]);

        let b = btnVar;
        b.splice(id, 1, 'success');
        setBtnVar([...b]);

        let c = btnVal;
        c.splice(id, 1, 'Done');
        setBtnVal([...c]);

        setProductsInCart([...productsInCart, {name: products[id].name, price: products[id].price, image: products[id].image, number: inpNumber[id]}]);
    }

    const [styleCard, api1] = useSpring(() => ({ 
        delay: 300,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }))
   

    return <div>
                
                <Container fluid>
                    <Row>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Filters</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <Form.Label>Category of products:</Form.Label>
                                            <Form.Select ref={categoryRef} onChange={event => setParameters({...parameters, category: event.target.value})} >
                                                <option value="All">All</option>
                                                <option value="Grocery">Grocery</option>
                                                <option value="Milk">Milk</option>
                                                <option value="Meat_and_Cheese">Meat and Cheese</option>
                                                <option value="Drinks">Drinks</option>
                                                <option value="Bakery">Bakery</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <Form.Label>Producer:</Form.Label>
                                            <Form.Select ref={producerRef} onChange={event => setParameters({...parameters, producer: event.target.value})}>
                                                <option value="Any">Any</option>
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
                                        <animated.div style={styleCard}>
                                            <Card style={{ width: '100%' }}>
                                                <LazyLoad>
                                                    <Card.Img variant="top" src={product.image} />
                                                </LazyLoad>
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>
                                                        {product.price}$ / 1 {product.measure}
                                                    </Card.Text>
                                                    <hr />
                                                        <Row>
                                                            <Col xs={12} md={{ span: 8, offset: 4}}>
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
                                        </animated.div>
                                        </Col>
                            })
                        }
                    </Row>
                </Container>
            </div>

};

export default Products;