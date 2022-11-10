import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
// import { fetchCourses } from "../../../crud/common.crud";
import { fetchStation,fetchMenu,fetchRestaurant,fetchPnr ,fetchBlog} from "../../../crud/common.crud";
import timg from '../../images/travelintrain.jpeg';
import imgabout from '../../images/newsletter.png';
import stationimg from '../../images/njp.jpg';
import banner from '../../images/banner1.png';
import { Card, Container, Row, Button, Modal, Col,FormControl,Form,InputGroup,Accordion } from 'react-bootstrap-v5';
import '../../css/style.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SelectStations from 'react-select';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = (props) => {
  const [station, setStation] = useState([]);
  const [menu, setMenu] = useState([]);
  const [restaurant, setRes] = useState([]);
  const [blog, setBlog] = useState([]);
  
  const[searchPNR, setSearchPNR] = useState('');
  
 
  const clickRestaurantDtl = (stationName,code) => {
    localStorage.setItem('stnName', JSON.stringify(stationName));
    localStorage.setItem('stnCode', JSON.stringify(code));
}


  useEffect(() => {
    fetchStation().then(res => {
        setStation(res.data);
    })
}, []);

 useEffect(() => {
        fetchRestaurant().then(res => {
            setRes(res.data);
        })
    }, []);
    
    useEffect(() => {
        fetchMenu().then(res => {
            setMenu(res.data);
        })
    }, []);

    useEffect(() => {
      fetchBlog().then(res => {
          setBlog(res.data);
      })
  }, []);

  const handleSearch = (data,e) => {
    // e.preventDefault();
     localStorage.setItem('pnr', JSON.stringify(data))
     console.log(data);
     
    
};



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
      const stations = [
        { value: 'njp', label: 'New Jalpaiguri (NJP)' },
        { value: 'kne', label: 'Kishanganj (KNE)' },
        { value: 'dli', label: 'Delhi JN: (DLI)' },
        { value: 'sdah', label: 'Sealdah (SDAH)' },
        { value: 'hwh', label: 'Howrah JN. (HWH)' },
        { value: 'anvt', label: 'Anand Vihar Terminal (ANVT)' }
      ]
      const {text} = useTypewriter({
        words: [ 'Search your PNR Here'],
        loop: 1000,
        deleteSpeed: 1,
        typeSpeed: .5,
      })
    return (

        <>
       
        <Container fluid style={{paddingLeft:'0',paddingRight:'0'}}>
            <Row className="banner-row pb-5 bg-primary hero-header mb-5">
        <Header/>
            <Row>
                <Col className="banner-body my-auto" md={5}>
                    <h4>Order food in train online from your seat FSSAI & 
                        IRCTC approved restaurants Zero Booking Fee
                        
                    </h4>
                    <InputGroup className="mb-3">
                        <FormControl
                        className="py-3 rounded-pill"
                        placeholder={text}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={searchPNR}
                        onChange={e => setSearchPNR(e.target.value)}
                        />
                        <Button className="pnrSearchButton py-2 rounded-pill my-auto" variant="outline-warning" id="button-addon2" style={{zIndex:'999'}} href="/OrderFoodPNR" onClick={e => handleSearch(searchPNR,e)}>
                        <i className="fa fa-search"></i>
                        </Button>
                        {/* href="/OrderFoodPNR" */}
                    </InputGroup>
                </Col>
                <Col className="" md={7}>
                    <img className="img-fluid" src={banner} />
                </Col>
            </Row><br/>
            </Row>
            {/* Steps how to order */}
            <Row>
              <h2 className="text-center pb-4">How To Get Your Food</h2>
              <Col md={3} data-wow-delay="0.1s">
                        <div className="service-item py-2 d-flex flex-column justify-content-center text-center bg-area bg-danger rounded-edge">
                            <div className="service-icon flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn3.iconfinder.com/data/icons/map-navigation-8/512/z5-map-location-pin-512.png" width="75px"/>
                            </div>
                            <h5 className="mb-3">Choose Your Delivery Location</h5>
                        </div>
                </Col>
                <Col md={3} data-wow-delay="0.1s">
                        <div className="service-item py-2 d-flex flex-column justify-content-center text-center bg-area bg-warning rounded-edge">
                            <div className="service-icon flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/february/64/store-locator-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3">Select A Restaurant</h5>
                        </div>
                </Col>
                <Col md={3} data-wow-delay="0.1s">
                        <div className="service-item py-2 d-flex flex-column justify-content-center text-center bg-area bg-info rounded-edge">
                            <div className="service-icon flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn2.iconfinder.com/data/icons/food-delivery-wildberry-vol-2/256/Pay_Online-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3">Pay Online or Cash</h5>
                        </div>
                </Col>
                <Col md={3} data-wow-delay="0.1s">
                        <div className="service-item py-2 d-flex flex-column justify-content-center text-center bg-area bg-success rounded-edge">
                            <div className="service-icon flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn3.iconfinder.com/data/icons/restaurant-2-3-1/300/diner--serve-3-food-meal-drink-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3">Deliver At Your Seat</h5>
                        </div>
                </Col>
            </Row>
            {/* Steps how to order */}
            {/* Types Of Foods*/}
            <div className='show-food bg-primary rounded-edge py-5 my-5'>
                <Container className="pt-4 rounded-edge">
                <h3 className='text-uppercase fw-bold text-white text-center'>Food What You Like</h3>
                      
                        <Carousel responsive={responsive} infinite={true}>
                        {
                    menu.map(usr =>
                            <div className='m-2' key={usr._id}>
                              <Card className='rounded'>
                              <Card.Header className="text-center" as="h5">{usr.category} </Card.Header>
                                <Card.Img variant="top" className="opacity-100" src="https://www.zoopindia.com/assets/images/products/biryani.webp?w=384&q=75" height="184px" />
                                <Card.Footer>
                                  <small className="text-center d-flex justify-content-center">
                                  <Button className=' w-100' variant="outline-primary" href="/OrderFoodAt">View Restaurants</Button>
                                    </small>
                                </Card.Footer>
                              </Card>
                            </div>
                             )
                            }
                        </Carousel>
                </Container>
                </div>
            {/* Types Of Foods*/}  
            {/* More Services */}
            <Row>
              <h2 className="text-center py-4">More Services</h2>
              <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn2.iconfinder.com/data/icons/food-delivery-wildberry-vol-1/256/Group_Order-512.png" width="75px"/>
                            </div>
                            <h5 className="mb-3 text-dark">Group Order</h5>
                        </div>
                </Col>
                <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/train-station-color/100/Train_station-12-512.png" width="75px"/>
                            </div>
                            <h5 className="mb-3 text-dark">PNR Check</h5>
                        </div>
                </Col>
                <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/train-station-color/100/Train_station-10-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3 text-dark">Platform Locator</h5>
                        </div>
                </Col>
                <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/train-station-color/100/Train_station-18-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3 text-dark">Train Schedule</h5>
                        </div>
                </Col>
                <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/train-station-color/100/Train_station-22-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3 text-dark">Coach Position</h5>
                        </div>
                </Col>
                <Col className="p-0">
                        <div className="service-item-more py-2 d-flex flex-column justify-content-center text-center border border-2 bg-area rounded-edge">
                            <div className="service-icon-more flex-shrink-0">
                                {/* <i className="fa fa-home "></i> */}
                                {/* <i className="fa fa-street-view fa-2x" aria-hidden="true"></i> */}
                                <img src="https://cdn0.iconfinder.com/data/icons/logistic-delivery-1-5/128/35-512.png" width="85px"/>
                            </div>
                            <h5 className="mb-3 text-dark">Helpline</h5>
                        </div>
                </Col>
            </Row>
            {/* More Services */}
            </Container><br/>
            {/* Search and select stations*/}
              <div className='station-search bg-color text-primary py-5 my-5'>
                <Container className="pt-4 rounded-edge">
                        <Row className="px-2">
                                {/* <span className="fs-2 fw-bolder text-center p-4">Search Stations</span> */}
                            <Col>
                                <h3 className='text-uppercase fw-bold text-center'>Famous Railway Stations</h3>
                                </Col>
                            <Col md={6}>
                                <SelectStations options={stations} />
                            </Col>
                        </Row>
                      
                        <Carousel responsive={responsive} infinite={true}>
                        {
                    station.map(usr =>
                            <div className='m-2' key={usr._id}>
                              <Card className='opacity-80 rounded'>
                                <Card.Img variant="top" className="opacity-100" src={stationimg} height="184px" />
                                <Card.Body>
                                  <Card.Title className='text-center'>{usr.stationName}</Card.Title>
                                
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-center d-flex justify-content-center">
                                  <Button className=' w-100' variant="outline-primary" href="/OrderFoodAt"
                                  onClick={(e) => {clickRestaurantDtl(usr.stationName,usr.code)}}>View Restaurants</Button>
                                    </small>
                                </Card.Footer>
                              </Card>
                            </div>
                             )
                            }
                        </Carousel>
                </Container>
                </div>
            {/* Search and select stations*/} 
            {/* resgiter restaurant owner*/}
            <div className="container-xxl bg-primary newsletter bg-area my-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: '250px'}}>
                    <div className="mb-5 col-12 col-md-6">
                        <h3 className="text-white">ARE YOU A RESTAURANT OWNER?</h3>
                        <small className="text-white">Take your business online with IRCTC e-Catering. Become an authorized vendor for train food order delivery and expand your business.</small>
                        <Col className="">
                            <div>
                                <Button className="mt-3" variant="info">
                              <a href="/vendorRegister" >
                                SIGN UP AS PARTNER
                              </a>
                              </Button>
                              </div>
                            </Col>
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{height: '250px'}} src={imgabout}/>
                    </div>
                </div>
            </div>
            </div> 
            {/* resgiter restaurant owner*/} 
            {/* blog */}
            <Container id="blog_stories">
            <h2 className="text-center py-4">LATEST TRAVEL & FOOD STORIES</h2>
           
            <Row xs={1} md={2} className="g-4">
              
            {/* { blog.slice(0, 4).map((usr,index) =>  index < 5 &&( */}
            { blog.reverse().map((usr,index) =>  index < 4 &&(
              // {Array.from({ length: 4 }).map((_, idx) => (
               
                <Col> 
                 {usr.blog_stat?(
                  <Card key={usr.id}>
                    <Card.Img variant="top" src={timg} />
                    <Card.Body>
                      <Card.Title>{usr.title}</Card.Title>
                      <Card.Text>
                      {usr.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>  
                  ):( null)
                  }
                </Col>
               
              // ))}
             ) )}
            </Row>
            <small className="text-center d-flex justify-content-center">
              <Button className=' w-100' variant="outline-primary" href="/blog">Create Your Own Blog</Button>
            </small>
            </Container>
            {/* blog */}
            {/* FAQ*/}
            <Container>
            <div className='text-primary py-5 my-5'>
                <Container className="py-4 rounded-edge">
                       
                                {/* <span className="fs-2 fw-bolder text-center p-4">Search Stations</span> */}
                              <Col>
                                <h3 className='text-uppercase fw-bold text-center'>Frequenly Asked Questions</h3>
                              </Col>
                              <Accordion defaultActiveKey="0">
                        <Card eventkey="0" className="mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Question 1
                                <i className='fa fa-plus float-end'></i>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>This is first tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card eventkey="1" className="mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            Question 2
                                <i className='fa fa-plus float-end'></i>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
                </div>
            </Container> 
            {/* FAQ*/}   
                    
       
        <Footer/>
    </>
    )
}
export default Home;