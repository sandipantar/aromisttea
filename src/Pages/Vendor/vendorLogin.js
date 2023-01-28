import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { Form, Card,Row,Col } from "react-bootstrap-v5";
 import { loginUser } from "../../crud/common.crud";

const VendorLogin = () => {
        
    const [ userEmail, setUserEmail ]= useState('');
    const [ userPswd, setUserPswd ]= useState('');
    const [ redirect, setRedirect ]= useState(false);
    const [ clicked, setClicked] = useState(0);
    const [ logerr, setLogerr] = useState(0);

    const handleSubmit=(e) => {
        e.preventDefault();
        setLogerr(0);
        setClicked(1); 
        loginUser(userEmail,userPswd).then((res)=>{
            setRedirect(true);
            const user = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userLoggedin', JSON.stringify(true));
        }).catch((err)=>{
            console.log(err);
            setLogerr(1);
        });
        // console.log('hhh');
    }
    if(redirect) {
        return <Navigate to="/vendorDashboard" />;
    }
    return (
        <Row>
        <Col md={12} className="d-flex justify-content-center align-items-center">
            <Card >
             {logerr? (
                        <Card.Header className="bg-danger text-white"><h3 className="text-center">Wrong Credentials</h3></Card.Header>
                    ):(
                        <Card.Header className="bg-dark text-white"><h3 className="text-center">{clicked ? 'Loading...' : ' Vendor Welcome Back'}</h3></Card.Header>
                    )}
            
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formCompanyName">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={userEmail}
                            onChange={(e)=>{setUserEmail(e.target.value)}}  
                            placeholder="Enter Email"  autoFocus/>  
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formModel">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" required
                            value={userPswd}
                            onChange={(e)=>{setUserPswd(e.target.value)}}  
                            placeholder="Enter Password" />  
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formJsonData">
                        <button className="btn btn-info btn-sm col-12" type="submit">Login</button> 
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </Col>
        </Row>
    );
   

};

export default VendorLogin;
