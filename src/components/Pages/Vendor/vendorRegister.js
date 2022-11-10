import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import {  createUser } from "../../../crud/common.crud";
import { Card,Container,Row,Form,Modal,Button } from 'react-bootstrap-v5';

const Vendor = () => {
    const [ userName, setUserName ]= useState('');
    const [ userEmail, setUserEmail ]= useState('');
    const [ userPswd, setUserPswd ]= useState('');
    const [ userPhone, setUserPhone ]= useState('');
    const handleSubmit=(e) => {
        e.preventDefault();     
            createUser(userName,userEmail,userPswd,userPhone).then((res)=>{
            // window.location.reload();
            window.alert("Vendor Registration Successfull");
            window.location.replace("/vendorLogin");
        }).catch((err)=>{
        console.log(err);
        });
        // console.log(userName,userEmail,userPswd)
    };
    
    return(
        <>
        <div id="wrapper">
        <Container className="m-5 p-5">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}  
                    placeholder="Enter Full Name" />  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text"
                        value={userEmail}
                        onChange={(e)=>{setUserEmail(e.target.value)}}  
                        placeholder="Enter Email Address" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    value={userPswd}
                    onChange={(e)=>{setUserPswd(e.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" 
                    value={userPhone}
                    onChange={(e)=>{setUserPhone(e.target.value)}} />
                </Form.Group>

                <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                       
            </Form>
            <h6>Already Register <a href="/vendorLogin">click here</a></h6>
        </Container>
        </div>       
        </>
    )
}

export default Vendor;