import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import hbnr from '../../images/slider1.jpg';
import vIcon from '../../images/veg.png';
import nonvIcon from '../../images/nonveg.png';
import shop from './shopWall';
import Item from './items';
import Cart from './cart';
import { Card, Container, Row, Button, Modal, Col, i,Badge,Tab,Nav,InputGroup,FormControl,Form,Carousel } from 'react-bootstrap-v5';
let onlyVeg=1;
// const [isSwitchOn, setIsSwitchOn] = useState(false);
// const onSwitchAction = () => {
//   setIsSwitchOn(!isSwitchOn);
// };
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [show, setShow] = useState(false);
    
    
const Navbar = props => (    
    <>
    <Row className="banner-row bg-primary bg-area">
    <Header/>
    </Row>
    <Container>
        <Row className="mb-3">
            <Carousel className="" fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hbnr}
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hbnr}
                    alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hbnr}
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Row>
        <Row>
                <Col lg={8} md={8} className="">
                    <h1>Forest Restro</h1>
                    <p>
                        catagory, catagory, catagory ...
                    </p>
                    <p>City, Station, station ...</p>
                    <p>fssai no.10020907000050</p>
                    <Form>
                    <Form.Switch
                        // onChange={onSwitchAction}
                        id="custom-switch"
                        label="anything you want to put here"
                        // checked={isSwitchOn}
                        // disabled // apply if you want the switch disabled
                    />
                    </Form>
                </Col>
                <Col lg={4} md={4} className="text-center">
                    <h5>
                        <Badge bg="success">4.3 <i className="fa fa-star"></i></Badge> 1.2k
                    </h5>
                    <p>Min Order <i className="fa fa-inr"></i> 100</p>
                    <div className="cartArea">
                    <div>
                        <div style={{float:'left'}} onClick={() => props.changeView("shop")}>
                        <Button variant="warning">
                        <span role="img" aria-label="shop">
                            🏪{"Shop "}
                        </span> 
                        </Button>
                        </div>
                        <div className='float-end shadow' onClick={() => props.changeView("cart")}>
                         <Button variant="info">{/* onClick={handleShow} */}
                        <span role="img" aria-label="shop">
                            🛒{" Cart "}
                        </span>
                        <span className="rounded-circle text-white px-2 py-1 bg-primary">{props.quantity}</span>
                        </Button>
                        </div>
                    </div>
                    </div>
                </Col>
        </Row>
        <Row>
            <Col md={8}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Food Catagory 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Food Catagory 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>             
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    {[{name: 'G', price: 2}, {name: 'G', price: 2}, {name: 'G', price: 2}].map((each, key)=>{
                                        return (<Item key={key} name={each.name} price={each.price}/>
                                        )
                                    })}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                bdhdfn
                                </Tab.Pane>
                            </Tab.Content>  
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
            <Col md={4}>
                <Cart items={[{name:'G', hex:'', price:4, quantity: 7}]}/>
                 
            </Col>
            </Row>  
    </Container>
    </>
  );
  export default Navbar;