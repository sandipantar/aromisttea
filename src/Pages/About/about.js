import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import aboutImg from '../../images/about.jpg';
import imgabout from '../../images/newsletter.png';
import { fetchStation,fetchMenu,fetchRestaurant,fetchPnr ,fetchBlog} from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col,FormControl,Form,InputGroup,Accordion } from 'react-bootstrap-v5';
import '../../css/style.css';
import "react-multi-carousel/lib/styles.css";

const About = (props) => {
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

    return (

        <>
       
        <Container fluid>
            <Row className="banner-row pb-5 bg-primary hero-header mb-5">
        <Header/>
            <div className="container my-3 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 text-center">
                            <h1 className="text-white animated zoomIn">About Us</h1>
                            <hr className="bg-white mx-auto mt-0" style={{width: '90px'}}/>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
            </div>
            </Row>
            {/* about */}
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">About Us</h6>
                            <h2 className="mt-2">The best SEO solution with 10 years of experience</h2>
                        </div>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fa fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={aboutImg} style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'zoomIn'}}/>
                    </div>
                </div>
            </div>
            {/* about */}
            </Container><br/>

            <div className="container-xxl bg-primary newsletter show-food my-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{height: '250px'}}>
                    <div className="col-12 col-md-6">
                        <h3 className="text-white">ARE YOU A RESTAURANT OWNER?</h3>
                        <small className="text-white">Take your business online with IRCTC e-Catering. Become an authorized vendor for train food order delivery and expand your business.</small>
                        <Col className="my-auto">
                            <div className="">
                              <Button variant="info">
                                SIGN UP AS PARTNER
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
              
                    
       
        <Footer/>
    </>
    )
}
export default About;