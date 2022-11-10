import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Header/footer';
import i1 from '../../images/pic_dsme1.png';
import i2 from '../../images/dc.png';
import i3 from '../../images/cme.png';
import i4 from '../../images/ndep.png';
import { fetchCourses } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal, Col } from 'react-bootstrap-v5';

const Activity = (props) => {
    return (
    <>
        <Header/>
            <p className="bg-info">
            <h5 className="text-center text-white p-4">Activities</h5>
            </p>
        <Container>
                  <Card>
                    <Card.Header className="text-center"><h5>Patient Education</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={2} md={2}>
                        <img src={i1}/>
                    </Col>
                    <Col lg={10} md={10}>
                        <Card.Title>Diabetes Self Management Education (DSME)</Card.Title>
                        <Card.Text>
                        DSME is an essential element of diabetes care. Education helps people with diabetes initiate effective 
                        self-management and to cope with diabetes. The overall objectives are to support informed decision making,
                         self-care behaviors, problem solving, and active collaboration with the health care team to improve clinical
                          outcomes, health status, and quality of life. Whole day camps for DSME are mostly organized on Saturdays 
                          and thirty six were organized in 2014. Educational workshops to built awareness on foot care, Hypoglycaemia 
                          & SMBG, Insulin injection technique are conducted. Detailed laboratory evaluations are an integral part of 
                          the program.
                        </Card.Text>
                    </Col>
                    <p>  </p>
                    <Col lg={2} md={2}>
                        <img src={i2}/>
                    </Col>
                    <Col lg={10} md={10}>
                        <Card.Title>Diabetes Camp</Card.Title>
                        <Card.Text>
                            Community health initiative undertaken by Kolkata Hormone Foundation involves camps in rural part
                             of West Bengal. Free Blood Tests, Health Check up and Education are the component of program.<br/><br/>
                             Contact for this Program:<br/>
                            Office: (033) 2414 8295 / 2966 1221<br/>
                            Mrs. Kheya Sarkar - +91 98305 51903
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
            <br/>
                <Card>
                    <Card.Header className="text-center"><h5>Health Professional</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={2} md={2}>
                        <img src={i3}/>
                    </Col>
                    <Col lg={10} md={10}>
                        <Card.Title>Continuing Medical Education (CME)</Card.Title>
                        <Card.Text>
                        Continuing education helps those in the medical profession to maintain competence and learn about
                         new and developing areas of Endocrine and Diabetes field. These activities take place as liveevents
                          and the content for these programs is developed, reviewed and delivered by faculty who are experts 
                          in these areas. In the year 2002, the MCI introduced a new clause in its ethics code about continuing 
                          medical education (CME) and suggested every doctor to participate in CME activities. Kolkata Hormone 
                          Foundation organizes CME in the form of clinical meetings every month to exchange current knowledge in
                           the field of Diabetes, Endocrinology and Metabolism. Dr. Anirban Majumder, Dr. Debmalya Sanyal & 
                           Dr. Soumyabrata Roy Chaudhuri commonly conduct the CMEs.
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card><br/>
                    <Card>
                    <Card.Header className="text-center"><h5>Diabetes Educator Course</h5></Card.Header>
                    <Card.Body>
                    <Row>
                    <Col lg={2} md={2}>
                        <img src={i4}/>
                    </Col>
                    <Col lg={10} md={10}>
                        <Card.Title>National Diabetes Educator Program (NDEP)</Card.Title>
                        <Card.Text>
                        Continuing to the effort to these academic activities, Kolkata Hormone Foundation started the 
                        Diabetes Educator Course for paramedical care givers in association with Dr. Mohan’s Diabetes 
                        Education Academy from the year 2014. NDEP is developed with the objective of creating professional 
                        diabetes educator in India. Eligible individuals are the primarily staffs currently assisting practicing 
                        physicians but without any formal training in diabetes education. The educational course was designed to 
                        enable educators to provide a complete perspective of the disease condition, the importance of self-care, 
                        blood glucose monitoring, diet, physical activity, self- injection of insulin, medication adherence and the 
                        long term benefits of compliance and a basic awareness of the various complications of diabetes. One of the 
                        objectives of this educational program was also to improve communication skills so that they could help create 
                        awareness and also help improve compliance of people with diabetes therapy resulting in better management of their 
                        condition. It would be undoubtedly beneficial to Indian society, particularly in view of the growing number of 
                        diabetes mellitus in India and acute shortage of trained educator in this field.
                        </Card.Text>
                    </Col>
                    </Row>
                    </Card.Body>
                    </Card>
        </Container><br/>
        <Footer/>

    </>);
}
export default Activity;