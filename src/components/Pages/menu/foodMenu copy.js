import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import LabelFood from '../../images/label-pack-demo.png';
import stationImage from '../../images/AGC.webp';
import hbnr from '../../images/slider1.jpg';
import vIcon from '../../images/veg.png';
import nonvIcon from '../../images/nonveg.png';
import dish2 from '../../images/dish2.jpeg';
import { fetchStationEmail,fetchRestaurant,fetchRestaurantStationCode } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col, i,Badge,Tab,Nav,InputGroup,FormControl,Form,Carousel } from 'react-bootstrap-v5';
import '../../css/style.css';

const GoToTop = () => {var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}}
const IDECourse = (props) => {

    const stnName = JSON.parse(localStorage.getItem("stnName"));
    const stnCode = JSON.parse(localStorage.getItem("stnCode"));
    const [restaurant, setUsers] = useState([{
       resName : '',
        resType : '',
        reslocation: [{
                    stationName1 : "",
                    code: ""
                }],
        rating: '',
        
        review: ''
    }]);

   

    useEffect(() => {
        fetchRestaurantStationCode(stnName).then(res => {
            setUsers(res.data);
            console.log(res.data);
            console.log(stnName);
        })
    }, []);
    // modal
    const [show, setShow] = useState(false);
    const CouponModalClose = () => setShow(false);
    const CouponModalShow = () => setShow(true);
    // modal
    // imageSlider
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    // imageSlider
    let onlyVeg=0;

    return (
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
                        <Form.Check 
                            type="switch"
                            id="onlyVeg"
                            label="Only Veg"
                        />
                    </Form>
                </Col>
                <Col lg={4} md={4} className="text-center">
                    <h5>
                        <Badge bg="success">4.3 <i className="fa fa-star"></i></Badge> 1.2k
                    </h5>
                    <p>Min Order <i className="fa fa-inr"></i> 100</p>
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
                                        <h4 className="text-center">Catagory 1</h4>
                                        <Col className="">
                                            <Card className=" w-50 float-start">
                                            <Card.Header>
                                                <Row>
                                                    <Col md={2} className="my-auto">
                                                    {onlyVeg ? 
                                                    (<img src={vIcon} width="15px"/>)
                                                    :
                                                    (<img src={nonvIcon} width="15px"/>)
                                                    }                                                    
                                                    </Col>
                                                    <Col md={10}>
                                                    Hydrababdi Chicken Biriyani    
                                                    </Col>
                                                </Row>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        <div className="float-start">
                                                        <i className="fa fa-inr"></i> 300
                                                        </div>
                                                        &nbsp;
                                            <i className="fa fa-shopping-cart float-end rounded-circle border p-2 border-info border-2"></i>
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                    Contains : 2x Chicken, 1x Egg, 1x Salad, 1x Raita, 1x spoon
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                     
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h4 className="text-center">Catagory 2</h4>
                                        
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
            {/* coupon modal */}
            <Modal centered show={show} onHide={CouponModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Coupon Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={CouponModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={CouponModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            {/* coupon modal */}
        </Container>
        <Footer/>
       
        </>
    )
}
export default IDECourse;