import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { fetchCourses } from "../../../crud/common.crud";
import { Card, Container, Row, Button, Modal } from 'react-bootstrap-v5';

const Contact = (props) => {
    return (
    <>
        <Header/>
        <Container>
            This is Contact
        </Container>

    </>
    )
}
export default Contact;