import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import dc from '../../images/Dummy-Certi.png';
import nc from '../../images/newcastle.jpg';
import j2 from '../../images/group.jpg';
import j1 from '../../images/johnhunter.jpg';
import dr1 from '../../images/drAnirban.png';
import dr2 from '../../images/drDebmalya.png';
import dr3 from '../../images/drShamasunder.png';
import dr4 from '../../images/drSoumyabrata.png';
import abnr from '../../images/admission_khf.png';
import brchre from '../../images/brochure2021.pdf';
import CountUp from 'react-countup';
import { fetchCourses } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col, i } from 'react-bootstrap-v5';
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
const IDECourse = (props) => {
    return (
        <>
        <Header/>
        <p className="bg-info">
            <h5 className="text-center text-white p-4">IDEC - Integrated Diabetes & Endocrine Course</h5>
            </p>
        <Container>
            <p className="p-2 rounded-3" style={{ backgroundImage:'linear-gradient(to bottom right, #fff, #f6f6f6)'}}>
                <Row>
                        
                        <Col className="text-center " sm >
                            <p className=" py-2 shadow rounded-3 border border-success border-1">
                            <a className="justify-content-md-center text-decoration-none text-dark" href="#whycourse">
                                <i class="fa fa-question-circle rounded-circle bg-success text-white shadow py-3 px-4 my-3" 
                                style={{fontSize:'70px'}} aria-hidden="true"></i>
                            <h6 className="text-primary">Why this Course?</h6>
                            The world is gripped by pandemics of obesity, diabetes mellitus, 
                            metabolic syndrome, iodine deficiency and osteoporosis....
                            </a>
                            </p>
                        </Col>
                        
                        <Col className="text-center" sm>
                            <p className=" py-2 shadow rounded-3 p-2 border border-light">
                            <a className="justify-content-md-center text-decoration-none text-dark" href="#coursedetails">
                                <i class="fa fa-info-circle rounded-circle bg-primary text-white shadow py-3 px-4 my-3" 
                                style={{fontSize:'70px'}} aria-hidden="true"></i>
                            <h6 className="text-primary">Course Details</h6>
                            Kolkata Hormone Foundation in collaboration with University of 
                            Newcastle (Australia) and John Hunter Hospital, Australia ....
                            </a>
                            </p>
                        </Col>
                        <Col className="text-center" sm>
                        <p className=" py-2 shadow rounded-3 p-2 border border-success border-1">
                            <a className="justify-content-md-center text-decoration-none text-dark" href="#coursestructure">
                                <i class="fa fa-stumbleupon-circle rounded-circle bg-danger text-white shadow py-3 px-4 my-3" 
                                style={{fontSize:'70px'}} aria-hidden="true"></i>
                            <h6 className="text-primary">Course Structure</h6> 
                            This is a non awarded Online Course of Six months 
                            duration on Diabetes and Endocrinology developed by KHF...
                            </a>
                            </p>
                        </Col>
                </Row>        
                <Row>
                    <Col className="text-center" sm>
                    <p className=" py-2 shadow rounded-3 p-2 border border-light">
                        <a className="justify-content-md-center text-decoration-none text-dark" href="#facultymembers">
                            <i class="fa fa-user-md  rounded-circle bg-warning text-white shadow py-3 px-4 my-3" 
                            style={{fontSize:'70px'}} aria-hidden="true"></i>
                        <h6 className="text-primary">Faculty Members</h6>
                        The modules of this online course are conducted by a group of overseas and regional faculties ...
                        </a>
                        </p>
                    </Col>
                    <Col className="text-center" sm>
                    <p className=" py-2 shadow rounded-3 p-2 border border-success border-1">
                        <a className="justify-content-md-center text-decoration-none text-dark" href="#admissioncoursefees">
                            <i class="fa fa-id-card-o  rounded-circle bg-info text-white shadow p-4 my-3" 
                            style={{fontSize:'50px'}} aria-hidden="true"></i>
                        <h6 className="text-primary">Admission Procedure & Fee</h6>
                        Click this to get the details regarding admission procedure, course fee, few rules and regulations
                        </a>
                        </p>
                    </Col>
                    <Col className="text-center" sm>
                    <p className=" py-2 shadow rounded-3 p-2 border border-light">
                        <a className="justify-content-md-center text-decoration-none text-dark" href="/Register">
                            <i class="fa fa-wpforms  rounded-circle bg-secondary text-white shadow py-3 px-4 my-3" 
                            style={{fontSize:'70px'}} aria-hidden="true"></i>
                        <h6 className="text-primary">Registration Form</h6> 
                        Please download the Registration Form (PDF file), get a print out, 
                        fill up and send (or you can e-mail) to KHF office.
                        </a>
                        </p>
                    </Col>
                </Row>
            </p>
                <Card className="border border-success shadow" id="whycourse">
                    <Card.Header className="text-center bg-success text-white"><h5>Why this Course?</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={4} md={4}>
                        <img className="img-fluid" src={dc}/>
                    </Col>
                    <Col lg={8} md={8}>
                        {/* <Card.Title>Diabetes Self Management Education (DSME)</Card.Title> */}<br/>
                        <Card.Text>
                        The world is gripped by pandemics of obesity, diabetes mellitus, metabolic syndrome, 
                        iodine deficiency and osteoporosis. Endocrine disorders in several million children and adults
                         in India remain undetected and untreated because of inadequate professional expertise. 
                         Certificate course on Diabetes & Endocrinology is an optimal way of dissemination of 
                         information among clinicians and physicians of India. The course provides physicians a 
                         foundation in the theoretical and clinically-applied aspects of this discipline.
                         The programme covers a basic curriculum in diabetes and clinical endocrinology. 
                         Aims of the course include:<br/>
                        
                         <ol>
                            <li>To develop understanding of the clinical sciences 
                                relevant to clinical practice in endocrinology and diabetes.
                            </li>
                            <li>To develop knowledge of common and important disorders in 
                                endocrinology and diabetes at a level appropriate to underpin 
                                clinical experience and support independent practice.
                            </li>
                            <li>To develop the problem-solving skills which will enable independent practice.
                            </li>
                         </ol>
                         Studying this course will lead to improved knowledge in the subject including up-to-date and emerging areas of research.
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            <br/>
                <Card className="border border-primary shadow" id="coursedetails">
                        <Card.Header className="text-center bg-primary text-white"><h5>Course Details</h5></Card.Header>
                        <Card.Body>
                        <Row>
                        <Col lg={3} md={3}>
                            <img className="img-fluid" src={nc}/>
                        </Col>
                        <Col lg={9} md={9}>
                            <Card.Title>Kolkata Hormone Foundation (KHF) in collaboration with University
                                of Newcastle (Australia) and John Hunter Hospital, Hunter New England (HNE) 
                                Health, Australia has started ” Integrated Diabetes and Endocrine Certificate 
                                Course (IDECC)” since 2016.</Card.Title><br/>
                            <Card.Text>
                            <u><b>UNIVERSITY OF NEWCASTLE (AUSTRALIA)</b></u>
                            The University of Newcastle (UoN), informally known as Newcastle University,
                            is an Australian Public University established in 1965. It has a primary 
                            campus in Callaghan, a suburb of Newcastle, New South Wales. The university
                            also operates campuses in Ourimbah, Port Macquarie, Singapore and the central 
                            business districts of Newcastle and Sydney.<br/>
                            Historically, the University of Newcastle Medical School has implemented 
                            the problem-based learning system for its undergraduate Bachelor of Medicine
                            programme – a system later mandated for use by the Australian Medical Council 
                            through out Australia.<br/>
                            In 2015, Times Higher Education ranked the University of Newcastle number 2 in 
                            Australia and number 30 in the world for universities under 50 years of age.
                            
                            {/* <ol>
                                <li>To develop understanding of the clinical sciences 
                                    relevant to clinical practice in endocrinology and diabetes.
                                </li>
                                <li>To develop knowledge of common and important disorders in 
                                    endocrinology and diabetes at a level appropriate to underpin 
                                    clinical experience and support independent practice.
                                </li>
                                <li>To develop the problem-solving skills which will enable independent practice.
                                </li>
                            </ol> */}
                            </Card.Text>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg={3} md={3}>
                            <img className="img-fluid" src={j1}/><br/><br/>
                            <img className="img-fluid" src={j2}/>
                        </Col>
                        <Col lg={9} md={9}>
                            {/* <Card.Title>title</Card.Title>*/}<br/> 
                            <Card.Text>
                            <u><b>JOHN HUNTER HOSPITAL (AUSTRALIA)</b></u>
                            The John Hunter Hospital (sometimes known as the JHH or more colloquially The John Hunter) 
                            is the principal referral centre and a community hospital for Newcastle, Lake Macquarie and
                            Northern New South Wales, Australia. It is the main teaching hospital of the University of 
                            Newcastle. The hospital contains the only trauma centre in New South Wales outside the Sydney
                            Metropolitan Area, and has the busiest Emergency Department in the state. John Hunter is the
                            busiest trauma hospital in the state, and the second busiest in the country behind The Alfred 
                            Hospital in Victoria.<br/>
                            This is a Post Graduate Course in Diabetes and Endocrine Science designed to up-skill the physician 
                            in the initial diagnosis and management of diabetes and endocrine disorders. It is a online problem 
                            based learning approach and the course is structured around 12 modules. The topics covered are:
                            
                            <ol>
                                <li> Basics of LIPIDS</li>
                                <li> Diabetes: OPD Management</li>
                                <li> Calcium & Osteoporosis</li>
                                <li> Hyperthyroid</li>
                                <li> Diabetes: Chronic Complications</li>
                                <li> Postmenopausal Hormone Replacement</li>
                                <li> Hypothyroid</li>
                                <li> Diabetes: Acute Complications</li>
                                <li> Basics of  Adrenal Disorders</li>
                                <li> PCOS & Hirsutism</li>
                                <li> Diabetes: In-hospital Management</li>
                                <li> Basics of Pituitary Disorders</li>
                            </ol>
                            </Card.Text>
                        </Col>
                        </Row>

                        </Card.Body>
                </Card><br/>
                <Card className="border border-danger shadow" id="coursestructure">
                    <Card.Header className="text-center bg-danger text-white"><h5>Course Structure</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={3} md={3} className="my-auto">
                        <p className="text-center display-3 fw-bold text-primary">
                            <CountUp end={6} />
                        </p>    
                        <p className="text-center fw-bold text-danger fs-5">Months</p>
                        <p className="text-center display-3 fw-bold text-info">
                            <CountUp end={12} />
                        </p>    
                        <p className="text-center fw-bold text-danger fs-5">Modules</p>

                        <p className="text-center display-3 fw-bold text-success">
                            <CountUp end={135} />+
                        </p>    
                        <p className="text-center fw-bold text-danger fs-5">Successfull Students</p>
                        <div class="d-grid gap-2">
                            <a class="btn btn-primary" target={'_blank'} href="{brchre}" >Download Brochure</a>
                        </div>
                    </Col>
                    <Col lg={9} md={9}>
                        <Card.Title><u>Online Class Format</u></Card.Title>
                        <Card.Text>
                            This is a non awarded online course of six months duration on Diabetes and 
                            Endocrinology developed by Kolkata Hormone Foundation in collaboration with 
                             of New Castle, Australia and Hunter New England Health, Local Health District, Australia.<br/>
                             Studying these courses will lead to improvement of knowledge in the subject including updation 
                             and insight into emerging areas of research. The 12 modules of the basic course will be 
                             delivered online as an audio presentation. There will be 6 weeks for completion of a set of 
                             3 modules (1 Diabetes and 2 Endocrine) after which there will be a contact programme on zoom 
                             platform which will be attended by the faculties and may be deemed as a doubt clearing session.
                              Upon registration you will be granted access to the course, where after a Pre test evaluation, 
                              you will get a password to access modules and you will be provided with a set of reading materials
                               after a specified time period you will have to complete the Post test evaluation. After successful
                                completion of Post test, a gap of 7 days, you have to appear for the module Exit Examination. 
                                You can avail of 3 chances to clear the examination in a span of 7 days.<br/>
                                <Card.Title><u>Examination & Certification</u></Card.Title>
                                <p>
                                    The module Exit Examination conducted at the end of the module will cumulate towards 
                                    award of the certificate. All module examinations must be cleared for the award of the
                                     certificate.
                                </p>
                                <p>
                                 Module will be open on <b>Sunday</b>, a <b>Pre Test</b> will be held to get the password for the study
                                 material. Student should download the presentation (Powerpoint) first, then should go 
                                 through the module, appear for <b>Post Test in next 5 days</b>. Student will get 3 chances 
                                 (Pass marks 8 out of 10) to clear it. The successful/eligible student will get chance 
                                 to appear for Module <b>Exit Examination</b> on pre fixed date and time (preferably on Sunday).
                                  Here also student will get 3 chances (Pass marks 5 out of 10) in next 5 days to clear the module.
                                </p>
                                <p>
                                 <b>Course Completion Certification</b> will be done in a convocation ceremony which will follow a workshop
                                 after <b>successful clearance of ALL MODULES</b>. Maximum three (3) modules uncleared student may get a 
                                 “Course Attending” Certificate only. <b>To get the Completion Certificate</b>, student should clear all 
                                 the modules in next year/session by paying charges of <b>Rs. 4000/- only per module</b>.
                                </p>
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card><br/>
                <Card className="border border-warning shadow" id="facultymembers">
                    <Card.Header className="text-center bg-warning"><h5>National & International Faculty Member</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col className="text-center " sm={6}>
                            <p className=" py-2 shadow rounded-3">
                            
                                <img src={dr1}/>
                            <h6 className="text-primary">Dr. (Prof) Anirban Majumder</h6>
                            MD, DM, FRCP (London)<br/>
                            Endocrinologist<br/>
                            Conjoint Professor<br/>
                            School of Medicine & Public Health
                            University of New Castle, Australia
                            </p>
                        </Col>
                        <Col className="text-center "  sm={6}>
                            <p className=" py-2 shadow rounded-3">
                            
                            <img src={dr2}/>
                            <h6 className="text-primary">Dr. (Prof) Debmalya Sanyal</h6>
                            MD, DM (Endo.), MRCP, MRCPS,<br/>
                            FACE, DTM&H<br/>
                            Conjoint Professor<br/>
                            School of Medicine & Public Health
                            University of New Castle, Australia
                            </p>
                        </Col>
                        <Col className="text-center "  sm={6}>
                            <p className=" py-2 shadow rounded-3">
                            
                            <img src={dr3}/>
                            <h6 className="text-primary">Dr. Shamasunder Acharya</h6>
                            Clinical Director<br/>
                            Diabetes<br/>
                            John Hunter Hospital<br/>
                            New England (HNE) Health
                            </p>
                        </Col>
                        <Col className="text-center " sm={6}>
                            <p className=" py-2 shadow rounded-3">
                            
                            <img src={dr4}/>
                            <h6 className="text-primary">Dr. Soumyabrata Roy Chaudhuri</h6>
                            MBBS, M. Sc (Diabetology), MRCP<br/>
                            Adjunct Faculty, Lecturer<br/>
                            School of Medicine & Public Health
                            University of New Castle, Australia
                            </p>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                <br/>
                <Card className="border border-info shadow" id="admissioncoursefees">
                    <Card.Header className="text-center bg-info text-white"><h5>Admission & Course Fees</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={3} md={3} className="my-auto">
                        <img className="img-fluid" src={abnr}/>
                    </Col>
                    <Col lg={9} md={9}>
                        {/* <Card.Title>Diabetes Self Management Education (DSME)</Card.Title> */}<br/>
                        <Card.Text>
                        Duration of Course: 6 months (March – September)<br/>
                        Last Date of Admission: <b>25th February ‘2022</b><br/>
                        <b>Course fees: Rs. 40,000/-</b><br/>
                        <b>Individual Module Clearing Charge: Rs. 5,000/- (for unsuccessful student also)</b><br/>
                        Participants/students are requested to <b>Register</b>, take print-out, fill-up properly and
                         <b>submit</b> or <b>post by courier service (with acknowledgement)</b> to the office of 
                         “Kolkata Hormone Foundation” along with “<b>A/c Payee Cheque</b>” or <b>Demand Draft (DD)</b>, 
                         should be drawn in favour of <b>“Kolkata Hormone Foundation” & payable at Kolkata</b>
                        <br/><br/>Admission confirmation is subject to realisation of the Cheque/DD.<br/>
                        For any enquiries, please click Contact Us.
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Container>
        <Footer/>

        </>
    )
}
export default IDECourse;