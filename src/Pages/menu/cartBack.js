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