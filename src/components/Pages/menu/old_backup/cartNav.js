import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import hbnr from '../../images/slider1.jpg';
import vIcon from '../../images/veg.png';
import nonvIcon from '../../images/nonveg.png';
import shop from './shopWall';
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
                                asa
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
                <Card className=" rounded-edge">
                    {/* <Card.Img variant="top" src={dish1} /> */}
                    <Card.Header className='py-3'>
                    <span className="float-start">
                        My Order
                    </span>    
                        <span className="float-end">
                        8 items
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col md={1}>
                                <span className="float-start">
                                    {onlyVeg ? 
                                                    (<img src={vIcon} width="15px"/>)
                                                    :
                                                    (<img src={nonvIcon} width="15px"/>)
                                                    } &nbsp;
                                    </span>
                                </Col>
                                <Col md={8}>
                                    <h6>
                                        Hydrababdi Chicken Biriyani<br></br>
                                        <i className="fa fa-inr"></i> 100
                                    </h6>
                                   
                                </Col>
                                <Col md={3}>
                                <Form.Control 
                                    // ref={dMarketRef}
                                    type="number" 
                                    placeholder="qty" 
                                />
                                </Col>
                            </Row>

                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Add Coupon Code"
                                aria-label="coupon Code"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-info" id="button-addon2">
                                <i className='fa fa-tags'></i>
                                </Button>
                            </InputGroup>
                            <hr></hr>
                            <Row>
                                <Col>Total Price</Col>
                                <Col className="float-end text-end">
                                    <i className="fa fa-inr"></i> 210.00
                                </Col>
                            </Row>
                            <Row>
                                <Col>+ GST On Food</Col>
                                <Col className="float-end text-end">
                                    <i className="fa fa-inr"></i> 10.50
                                </Col>
                            </Row>
                            <Row>
                                <Col>+ Delivery Charge (Inc. GST)</Col>
                                <Col className="float-end text-end">
                                    <i className="fa fa-inr"></i> 0.00
                                </Col>
                            </Row>
                            <Row className="text-success">
                                <Col>(-) Discounts</Col>
                                <Col className="float-end text-end">
                                    <i className="fa fa-inr"></i> 0
                                </Col>
                            </Row>
                            <Row className="fw-bold">
                                <Col>Order Total </Col>
                                <Col className="float-end text-end">
                                    <i className="fa fa-inr"></i> 220.50
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
            </Row>  
    </Container>
    </>
  );
  export default Navbar;