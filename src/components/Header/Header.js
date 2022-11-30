import React, { useState, useEffect } from 'react';
import logo from '../../img/AROMIST_LOGO.png'
import '../css/style.css';
import { Nav, Form, FormControl, Button, Navbar, Container, NavDropdown,navbarScroll, Badge, Dropdown, Toast, DropdownButton } from "react-bootstrap-v5";
import '../css/style.css';
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
                // <Navbar id='scrollNav' bg="transparent" expand="lg" style={{borderBottom:'1px solid #ffffff52', boxShadow:'0 1px #888'}}>
                // <Container fluid className="navstyle ">
                //     <Navbar.Brand className="navbrand" href="/"><img className="img-fluid logo" src={logo}/></Navbar.Brand>
                //     <Navbar.Toggle aria-controls="" />
                //     <Navbar.Collapse id="">
                    
                //     <Nav
                //         className=" justify-content-end text-center"
                //         style={{ maxHeight: '350px', width:'100%'}}
                //         >
                //         <Nav.Link className='text-white' href="/">Home</Nav.Link>
                //         <Nav.Link className='text-white' href="/about">About Us</Nav.Link>
                //         <Nav.Link className='text-white' href="/OrderFoodAt">Fooddff at Station</Nav.Link>
                //         <Nav.Link className='text-white' href="/#blog_stories">Stories</Nav.Link>
                //         {/* <NavDropdown title="Courses" id="navbarScrollingDropdown">
                //             <NavDropdown.Item className='text-white' href="/OrderFood-at">IDE Course</NavDropdown.Item>
                //             <NavDropdown.Item className='text-white' href="/IDECourse">DiaTech (Basic)</NavDropdown.Item>
                //          <NavDropdown.Divider />
                //             <NavDropdown.Item className='text-white' href="#action5">
                //             Something else here
                //          </NavDropdown.Item>
                //         </NavDropdown> */}
                //         {/* <Nav.Link className='text-white' href="/#contact">Contact</Nav.Link> */}
                //         <Nav.Link className='text-white' href="/login">Login</Nav.Link>
                //         {/* <Nav.Link className='text-white' href="/register">Register</Nav.Link> */}
                //     </Nav>
                //     </Navbar.Collapse>
                // </Container>
                // </Navbar>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} width='80px'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        {/* <Navbar.Text classname="search">
                             <FormControl 
                                 className='m-auto'
                                 style={{width:'500'}}
                                 placeholder='Search your product'
                             />
                         </Navbar.Text> */}
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search Your Product"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                        <Nav>
                         <Dropdown>
                             <Dropdown.Toggle variant="success">
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
                // <Navbar bg="dark" variant='dark'>
                //     <Container fluid>
                //         <Navbar.Brand href="#">Aromist Tea</Navbar.Brand>
                //         <Navbar.Toggle aria-controls="navbarScroll" />
                //         <Navbar.Collapse id="navbarScroll">
                //         <Nav>
                //             <Nav.Link href="#action1">Home</Nav.Link>
                //             <Nav.Link href="#action2">Link</Nav.Link>
                //             <NavDropdown title="Link" id="navbarScrollingDropdown">
                //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                //             <NavDropdown.Item href="#action4">
                //                 Another action
                //             </NavDropdown.Item>
                //             <NavDropdown.Divider />
                //             <NavDropdown.Item href="#action5">
                //                 Something else here
                //             </NavDropdown.Item>
                //             </NavDropdown>
                //             <Nav.Link href="#" disabled>
                //             Link
                //             </Nav.Link>
                //         </Nav>
                //         <div className='me-auto'>
                //         <Navbar.Text classname="search">
                //             <FormControl 
                //                 className='m-auto'
                //                 style={{width:'500'}}
                //                 placeholder='Search your product'
                //             />
                //         </Navbar.Text>
                //         <Nav>
                //         <Dropdown alignright>
                //             <Dropdown.Toggle variant="success" id="dropdown-basic">
                //                 {/* <i class="fa fa-shopping-bag" aria-hidden="true"></i> */}
                //                 <FaShoppingCart color='white' fontSize="25px"/>
                //                 <badge> {10}</badge>
                //             </Dropdown.Toggle>

                //             <Dropdown.Menu>
                //                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                //                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                //                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                //             </Dropdown.Menu>
                //         </Dropdown>
                //         </Nav>
                //         </div>
                //         </Navbar.Collapse>
                //     </Container>
                // </Navbar>
            )
        }
        </>
        
    )
}
export default Header;