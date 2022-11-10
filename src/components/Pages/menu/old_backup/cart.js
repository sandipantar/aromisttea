import { poke } from 'bazar';
import React, { useState, useEffect } from 'react';
import vIcon from '../../images/veg.png';
import nonvIcon from '../../images/nonveg.png';
import shop from './shopWall';
import { Card, Container, Row, Button, Modal, Col, i,Badge,Tab,Nav,InputGroup,FormControl,Form,Carousel } from 'react-bootstrap-v5';
let onlyVeg=0;
const Cart = props => {
  let total = 0;
  // cart Items
  const purchases = props.items.map((item, index) => {
    const { name, hex, price, quantity } = item;
    const currentImport = quantity * price;
    total += currentImport;
    return (
      <>
       <Card>
      <Card.Body>
        <Card.Text>
        <div className=''>
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
                                       <span className="cartColor" >{name}</span> 
                                      <span className="cartColorQty"> x{item.quantity}</span>
                                      </h6>
                                    
                                  </Col>
                                  <Col md={3}>
                                  {/* <Form.Control 
                                      // ref={dMarketRef}
                                      type="number" 
                                      placeholder="qty" 
                                  /> */}
                                  <button onClick={() => poke("App", { name, type: "increment" })}>
                                    ➕
                                  </button>
                                  <button onClick={() => poke("App", { name, type: "decrement" })}>
                                    ➖
                                  </button>
                                  <span className="cartColorImport"> <i className="fa fa-inr"></i>{currentImport}</span>
                                  <button onClick={() => poke("App", { name, type: "remove" })}>🗑</button>
                                  </Col>
        </div>
        </Card.Text>
        </Card.Body>
        </Card>
      </>
    );
  });
  // cart Items
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
  <>
                          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
                                <Col style={{marginTop:'380px'}}>Total Price</Col>
                                <Col className="float-end text-end">
                                <ul>{purchases.length === 0 ? "empty (:" : purchases}</ul>
                                <i className="fa fa-inr"></i>  {total}
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
      
    </>
  );
};

  export default Cart;