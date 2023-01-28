import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import userImage from '../../images/user.webp';
import CountUp from 'react-countup';
import { Card, Row, Col, Container } from 'react-bootstrap-v5';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 66;
const mystyle = {
    padding: "10px",
    borderRadius: "25px",
    boxShadow: "0 20px 20px #737dc1",
    backgroundColor: "#f0f3fe",
    borderTop: "3px solid #fff",
    borderLeft: "3px solid #e6e6e6",
    borderBottom: "7px solid #ced2f4"
};
function Dashboard() {
    const studentDetails = JSON.parse(localStorage.getItem('student'));
    
    return(
        <>
            <Header />
            <div className="container shadow px-4 py-2" style={{borderRadius:'20px', backgroundColor:'#767eb69e'}}>
                <div className="row" style={{borderRadius:'20px', backgroundColor:'#fbfbfbe3', boxShadow:'0px 0px -20px #666'}}>
                    <div className="p-3 px-5">
                        <p className="float-start fw-bold fs-5">Hello {studentDetails.studentName}</p>
                        <img 
                            className="float-end img-fluid rounded-circle border border-1 " 
                            style={{width:'3%'}} 
                            src={userImage} 
                            alt="username"
                        />                   
                    </div> 
                    <hr className="bg-white" style={{padding:'1px'}}></hr>
                    {/* courses */}
                    <Row className="mx-3"> 
                        {/* <p className="fs-6 fw-bold" style={{margin:'0', float:'left', paddingBottom:'10px'}}>Courses</p> */}
                        <br/>
                        <Row>
                            <Col sm >
                                <p style={mystyle}>
                                    <a className="justify-content-md-center text-decoration-none text-dark" href="/profile">
                                    <Container><br/>
                                        <Row>
                                            <Col>
                                                <i style={{fontSize:'35px'}} className="fa fa-user" aria-hidden="true"></i>
                                            </Col>
                                            <Col>
                                            <div style={{width:'40px', float:'right'}}>
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col> 
                                                <p style={{float:'left'}}>Profile</p>
                                                <p className="border border-2 border-primary rounded-circle px-2" style={{float:'right', boxShadow:'0px 0px 10px #737dc1'}}><CountUp end={6} />
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    </a>
                                </p>
                            </Col>
                            <Col sm >
                                <p style={mystyle}>
                                    <a className="justify-content-md-center text-decoration-none text-dark" href="/enrolledCourses">
                                    <Container><br/>
                                        <Row>
                                            <Col>
                                                <i style={{fontSize:'35px'}} className="fa fa-check-square" aria-hidden="true"></i>
                                            </Col>
                                            <Col>
                                            <div style={{width:'40px', float:'right'}}>
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col> 
                                                <p style={{float:'left'}}>Enrolled Courses</p>
                                                <p className="border border-2 border-primary rounded-circle px-2" style={{float:'right', boxShadow:'0px 0px 10px #737dc1'}}><CountUp end={6} />
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    </a>
                                </p>
                            </Col>
                            <Col sm >
                                <p style={mystyle}>
                                    <a className="justify-content-md-center text-decoration-none text-dark" href="/registerCourse">
                                    <Container><br/>
                                        <Row>
                                            <Col>
                                                <i style={{fontSize:'35px'}} className="fa fa-check-square-o" aria-hidden="true"></i>
                                            </Col>
                                            <Col>
                                            <div style={{width:'40px', float:'right'}}>
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            </div>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col> 
                                                <p style={{float:'left'}}>Register New Course</p>
                                                <p className="border border-2 border-primary rounded-circle px-2" style={{float:'right', boxShadow:'0px 0px 10px #737dc1'}}><CountUp end={6} />
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </Row>
                    {/* courses */}
                </div>
            </div>
        </>
    )
}
export default Dashboard;