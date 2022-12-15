import React, { useState, useEffect } from 'react';
import { Nav, Row,InputGroup,Button,FormControl } from "react-bootstrap-v5";

const Header = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    return(
        <>
        
        { 
            loggedIn ? (
                <Nav className="navbar navbar-dark bg-Secondary justify-content-between text-dark">
                    <Nav.Item>
                        <Nav.Link href="/dashboard" className="text-dark">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/courses" className="text-dark">Courses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profile" className="text-dark">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/" className="text-dark">Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            ): (
                
                  <div className="container-fluid text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor:'#3244b5'}}>
                    <div className="container py-5 px-lg-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-3">
                                <h5 className="text-white mb-4">Aromist Tea</h5>
                                <p>Our company offering excellent falovour of
                                     Assam and Darjeeling Tea like Organic green
                                      tea ,CTC Tea etc. Get contact details, address, map on this site.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h5 className="text-white mb-4">Popular Link</h5>
                                <a className="btn btn-link" href="/about">About Us</a>
                                <a className="btn btn-link" href="/products">Produts</a>
                                <a className="btn btn-link" href="#1">Sale</a>
                                {/* <a className="btn btn-link" href="#1">Contact Us</a> */}
                                <a className="btn btn-link" href="#1">Privacy Policy</a>
                                <a className="btn btn-link" href="#1">Terms & Condition</a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h5 className="text-white mb-4">Catagories</h5>
                                <a className="btn btn-link" href="#1">Assam Tea</a>
                                <a className="btn btn-link" href="#1">Masala Tea</a>
                                <a className="btn btn-link" href="#1">Blended Tea</a>
                                {/* <a className="btn btn-link" href="#1">Contact Us</a> */}
                                <a className="btn btn-link" href="#1">Darjeeling Tea</a>
                                <a className="btn btn-link" href="#1">Organic green Tea</a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h5 className="text-white mb-4">Get In Touch</h5>
                                <p><i className="fa fa-map-marker me-3"></i> Netaji Subhas Road, Subhas Pally,
                                 Siliguri, Pin- 734001, Dist-Darjeeling, West Bengal</p>
                                <p><a href="tel:+916294811689" ></a><i className="fa fa-phone me-3"></i>+91 6294 811 689</p>
                                <p><i className="fa fa-envelope me-3"></i>info@aromisttea.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fa fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fa fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fa fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fa fa-instagram"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-lg-5">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom text-decoration-none" href="#https://aromisttea.com/">AromistTea.com</a>, All Right Reserved. 
                                
                                    Distributed By: 
                                    <a className="border-bottom text-decoration-none" href="https://grandredtechnology.com" target="_blank">GrandRed Technology</a>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="#1">Home</a>
                                        <a href="#1">Cookies</a>
                                        <a href="#1">Help</a>
                                        <a href="#1">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
        
    )
}
export default Header;