import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import LabelFood from '../../images/label-pack-demo.png';
import stationImage from '../../images/AGC.webp';
import biriyani from '../../images/biriyani.jpeg';
import dish1 from '../../images/dish1.jpeg';
import dish2 from '../../images/dish2.jpeg';
import { fetchStationEmail,fetchRestaurant,fetchRestaurantStationCode } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col, i,Badge } from 'react-bootstrap-v5';
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
        resStat:'',
        review: ''
    }]);

   

    useEffect(() => {
        fetchRestaurantStationCode(stnName).then(res => {
            setUsers(res.data);
            console.log(res.data);
            console.log(stnName);
        })
    }, []);

    return (
        <>              
         <Row className="banner-row bg-primary bg-area">
        <Header/>
        </Row>
        <div className="label-bg">
            <h2 className="text-left text-white p-4">Order From Your Seat At {stnName} ({stnCode})</h2>
            <img className="img-fluid station-img" src={stationImage}/>
            <img className="img-fluid label-food" src={LabelFood}/>
        </div>
        <Container>
            <Row>
            {restaurant.map((usr, index)  =>
            <div >
             {(usr.resStat===true)?
              <Col key={index}  md={4}>
           
                <Card className="restaurants rounded-edge"  >
                    <Card.Img variant="top" src={biriyani} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            <Row>
                                <Col md={10}>
                                    <h6>{usr.resName}</h6>
                                </Col>
                                <Col md={2}>
                                    <Badge bg="success">4.3 <i className="fa fa-star" style={{fontSize:'9.5px'}}></i></Badge>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <p style={{fontSize:'13px', margin:'0'}}>
                                        North Indian, Fast Food, Chinese, Mughalai
                                    <br/><i className="fa fa-inr"></i> 100 Min Order</p>
                                </Col>
                                <Col md={6} className="my-auto">
                                    <Button style={{width:'100%'}} variant="danger" href="/foodMenu">ORDER NOW</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
              
                </Col>
                  :null
                }
                </div>
                 )
                }
                
                {/* <Col md={4}>
                <Card className="restaurants">
                    <Card.Img variant="top" src={dish1} />
                    <Card.Body>
                       
                        <Card.Text>
                            <Row>
                                <Col md={10}>
                                    <h6>Lime Lite Hotel and Restaurant</h6>
                                </Col>
                                <Col md={2}>
                                    <Badge bg="success">4.3 <i className="fa fa-star" style={{fontSize:'9.5px'}}></i></Badge>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <p style={{fontSize:'13px', margin:'0'}}>
                                        North Indian, Fast Food, Chinese, Mughalai
                                    <br/><i className="fa fa-inr"></i> 100 Min Order</p>
                                </Col>
                                <Col md={6} className="my-auto">
                                    <Button style={{width:'100%'}} variant="danger">ORDER NOW</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>
                <Col md={4}>
                <Card className="restaurants">
                    <Card.Img variant="top" src={dish2} />
                    <Card.Body>
                      
                        <Card.Text>
                            <Row>
                                <Col md={10}>
                                    <h6>Lime Lite Hotel and Restaurant</h6>
                                </Col>
                                <Col md={2}>
                                    <Badge bg="success">4.3 <i className="fa fa-star" style={{fontSize:'9.5px'}}></i></Badge>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <p style={{fontSize:'13px', margin:'0'}}>
                                        North Indian, Fast Food, Chinese, Mughalai
                                    <br/><i className="fa fa-inr"></i> 100 Min Order</p>
                                </Col>
                                <Col md={6} className="my-auto">
                                    <Button style={{width:'100%'}} variant="danger">ORDER NOW</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>
                 */}
            </Row>  
        </Container>
        <Footer/>
       
        </>
    )
}
export default IDECourse;