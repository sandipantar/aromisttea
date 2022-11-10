import React, { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';
import {  createBlog } from "../../../crud/common.crud";
import { Card,Container,Row,Form,Modal,Button } from 'react-bootstrap-v5';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Blog =(props) => {
    const loggedin = JSON.parse(localStorage.getItem("adminLoggedin"));
    const [isOpen, setIsOpen] = useState(false);
    const [isEOpen, setIsEOpen] = useState(false);
    const [blog, setBlogs] = useState([]);

    const [ blogName, setBlogName ]= useState('');
    const [ title, setTitle ]= useState('');
   
    const [ description, setDescription ]= useState('');
    const [ image, setImage ]= useState('');
   
    

    const handleSubmit=(e) => {
        e.preventDefault();     
        createBlog( blogName,title,description,image).then((res)=>{
            window.location.reload();
        }).catch((err)=>{
        console.log(err);
        });
    };

  
   

   

    return(
        <>
           
            <Container>
                <Row className="p-2 m-2 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <h1>Add New Blog</h1>
                </Row>
             

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Blog Name</Form.Label>
                            <Form.Control type="text" 
                                value={blogName}
                                onChange={(e)=>{setBlogName(e.target.value)}}  
                                placeholder="Enter Blog Name" />  
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label> Title</Form.Label>
                            <Form.Control type="text" 
                                value={title}
                                onChange={(e)=>{setTitle(e.target.value)}}  
                                placeholder="Enter Title" />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formCode">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" 
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPic">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" 
                            value={image}
                            onChange={(e)=>{setImage(e.target.value)}} />
                        </Form.Group>

                       
            
                        <Modal.Footer>
                   
                        <Button className="btn btn-success btn-sm" type="submit">Save</Button>
                        </Modal.Footer>

                    </Form>
                 

              

                
                
            </Container>    
        </>
    )
}

export default Blog;