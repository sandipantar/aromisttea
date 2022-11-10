import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import LabelFood from '../../images/label-pack-demo.png';
import stationImage from '../../images/AGC.webp';
import biriyani from '../../images/biriyani.jpeg';
import dish1 from '../../images/dish1.jpeg';
import dish2 from '../../images/dish2.jpeg';
import {fetchStation, fetchStationEmail,fetchRestaurant,fetchRestaurantStationCode,fetchPnr } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col, i,Badge } from 'react-bootstrap-v5';
import '../../css/style.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stationimg from '../../images/njp.jpg';

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
const OrderFoodPNR = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    
  const [pnr, setPnr] = useState({
      pnrNumber: '',
      trainDetail:[{
                
                  trainNumber:'',
                  trainName:'',
      }],
      dateJourney: '',
      stationDetail:[{
                 
                  stationName:'',
                  code:'',
                  HALT: '',
                  STA: '',
                  ETA:'String'
              }],
  
      seatDetail:[{
                 
                  seatNumber:'',
                  coachNumber:'',
                  class:''
                  }],
  
      passengerDetail:[{
                 
                  name:'',
                  age:'',
                  sex:'',
                  dob: ''
      }]
});

  
   
    const pnr1 = JSON.parse(localStorage.getItem("pnr"));
    const [satWithStation1, setApiData] = useState([{
      stationName:'',
      restuarant:[{
        resName : '',
        resType : '',
        reslocation: [{
                     stationName1 : "",
                     code: ""
                 }],
        rating: '',
        review: ''
      }]
    }]);

    const getAsset = async () => {
    
    fetchPnr(pnr1).then(res => {
      let pnrStation=res.data,satWithStation = [];
      setPnr(pnrStation);

     
         pnrStation.stationDetail.forEach(function (eachRow, index) {
           fetchRestaurantStationCode(eachRow.stationName).then(res => {
            let stationRet={
              stationName:eachRow.stationName,
              restuarant:res.data
            };
            satWithStation.push(stationRet);
           
          });
          setApiData(satWithStation); 
            console.log(satWithStation);
          
          }); 
            
    })
  }
  
 
  useEffect(() => {
    getAsset();
    
    },[])

    

    return (
        <>              
         <Row className="banner-row bg-primary bg-area">
        <Header/>
        </Row>
        <div className=' bg-color text-primary py-5 my-5'>
                <Container className="pt-4 rounded-edge">
                        <Row className="px-2">
                                {/* <span className="fs-2 fw-bolder text-center p-4">Search Stations</span> */}
                            <Col>
                                <h3 className='text-uppercase fw-bold text-center'>Famous Railway Stations</h3>
                                </Col>
                            
                        </Row>
                      
                        <Carousel responsive={responsive} infinite={true}>
                       
                        <div className='d-flex '>
                          
                         {
                            pnr.stationDetail.map((usr,index) =>
                            <div className='m-2' key={index}>
                              <Card className='opacity-80 rounded'>
                                <Card.Img variant="top" className="opacity-100" src={stationimg} height="100px" />
                                <Card.Body>
                                  <Card.Title className='text-center'>{usr.stationName} </Card.Title>
                               
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-center d-flex justify-content-center">
                                 ETA:{usr.ETA}  HALT:{usr.HALT}
                                    </small>
                                </Card.Footer>
                              </Card>
                            </div>
                             )
                            }
                            
                          </div> 
                        </Carousel>

                        <div><h1>Restuarant Detail</h1>
                        {satWithStation1.map((usr1,index) =>
                            <div className='m-2' key={index}>
                              <h1>hffyhh</h1>
                                {usr1.stationName}
                                {usr1.restuarant.map((item,index)=>
                                <h1 key={index}>{item.resName}</h1>
                                )}

                            </div>)}</div>
                </Container>
                </div>
               
        <Footer/>
       
        </>
    )
}
export default OrderFoodPNR;