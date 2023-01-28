import React, { useState, useEffect } from 'react';
import logo from '../../img/AROMIST_LOGO.png'
import { Nav, Form, FormControl, Button, Navbar, Container, NavDropdown,navbarScroll, Badge, Dropdown, Toast, DropdownButton } from "react-bootstrap-v5";
import '../../css/style1.css';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../css/style.css';

const Header = (props) => {
    const {
        state:{ cart},
        dispatch
    } = CartState();

    const loggedIn = localStorage.getItem('loggedin');
    // const scrollFunction = function () {
    //     // scrollFunction()
    //     window.onscroll();
    // }
    // const scrollToBottom = (id) => {
    //     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    //         document.getElementById("scrollNav").style.position = 'FIXED';
    //     } else {
    //         document.getElementById("scrollNav").style.backgroundColor = "blue";
    //       }
    // }
    // const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);
    // console.log(offset); 
    // const [loggedIn, setLoggedIn] = useState(false);
    return(
        <>
        
        { 
            loggedIn ? (
                <Navbar bg="transparent" expand="lg">
                <Container fluid className="navstyle">
                <Navbar.Brand className="navbrand" href="/"><img className="img-fluid" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="" />
                    <Navbar.Collapse id="">
                    <Nav
                      className=" justify-content-end text-center"
                      style={{ maxHeight: '350px', width:'100%'}}
                        >
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/registerCourse">Register New</Nav.Link>
                        <Nav.Link href="/enrolledCourses">Enrolled Course</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link> */}
                        {/* <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                         <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                         </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
</Navbar>
            ): (
                <Navbar bg="transparent" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} width='80px'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-dark-green" href="#action1">Home</Nav.Link>
                            <Nav.Link className="text-dark-green" href="#action2">About Us</Nav.Link>
                            <NavDropdown className="text-dark-green" title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item className="text-dark-green" href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="text-dark-green" href="#">
                            Contact Us
                            </Nav.Link>
                        </Nav>
                        
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search Your Product"
                            className="rounded-pill shadow pl-3 p-2 me-2 border-light-green"
                            aria-label="Search"
                            />
                        </Form>
                        <Nav>
                         <Dropdown>
                             <Dropdown.Toggle className="rounded-pill" variant="success">
                                 {/* <i class="fa fa-shopping-bag" aria-hidden="true"></i> */}
                                 <FaShoppingCart color='white' fontSize="20px"/>
                                 <Badge> {cart.length}</Badge>
                             </Dropdown.Toggle>

                             <Dropdown.Menu className="dropdown-menu-right">
                                 {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                                 { cart.length>0?(
                                    <>
                                    {
                                        cart.map(prod => (
                                            <Toast className='cartItem' key={prod.id}>
                                                <Toast.Body>
                                                    <img
                                                    src={prod.image}
                                                    className="cartItemImg float-start rounded me-2"
                                                    alt={prod.name}
                                                    />
                                                    <div className='cartItemDetail float-start'>
                                                        <strong className="me-auto">{prod.name}</strong><br/>
                                                        <span className="me-auto">₹ {prod.price.split(".")[0]}</span>
                                                    </div>
                                                    <div className='float-end'>
                                                    <AiFillDelete
                                                        className=''
                                                        fontSize="18px"
                                                        style={{cursor: "pointer"}}
                                                        onClick={()=>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }
                                                    />
                                                    </div>
                                                </Toast.Body>
                                            </Toast>
                                        ))}
                                        <Link to="/cart">
                                            <Button className='bg-dark-green cartList-button'>Go to cart</Button>
                                        </Link>
                                    </>
                                 ):(
                                    <span style={{padding:'10px'}}>Cart is Empty!</span>
                                 )}
                                 
                             </Dropdown.Menu>
                         </Dropdown>
                         </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
        }
        </>
        
    )
}
export default Header;