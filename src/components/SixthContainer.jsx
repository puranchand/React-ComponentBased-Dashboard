import React from 'react';
import "../styles/sixthContainer.scss";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { subjectList } from '../constants/constants';
import GoogleMapComponent from './GoogleMap';


const SixthContainer = () => {
    return (
        <Container fluid="md" className="sixth-conatiner" id="pricing">
            <div className="sith-container-label">
                <h1>
                    {"Contact Us"}
                </h1>
            </div>
            <div className="sixth-content-conatiner">
                <Row>
                    <Col xs={12} md={6}>
                    <div className="form-wrapper">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="select" placeholder="Please select your subject">
                                    {subjectList.map((item, index) => {
                                       return <option key={index} >{item}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Write your message here"/>
                            </Form.Group>
                            <div className="sixth-container-button">
                                <Button variant="primary">Send</Button>{' '}
                            </div>
                        </Form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="map-div">
                        <GoogleMapComponent />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SixthContainer;