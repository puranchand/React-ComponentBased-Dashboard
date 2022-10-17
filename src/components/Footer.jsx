import React from 'react';
import '../styles/footer.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { footerConstant } from '../constants/constants';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-div">
                <img src="./assets/6-footer/footer-rounded-001.svg" className="first-footer-img"/>
                <img src="./assets/6-footer/footer-rounded-002.svg" className="second-footer-img"/>
            </div>
            <Container>
                <div className="footer-content">
                    <Row>
                        <Col xs={12} md={3}>
                            <div className="hero-logo">
                                <img src={"./assets/1-header/logo.png"} />
                                <h2>Easy Work</h2>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="footer-content-padding">
                            <h5>Address</h5>
                            <p>{footerConstant.address.line1}</p>
                            <p>{footerConstant.address.line2}</p>
                            <p>{footerConstant.address.line3}</p>
                            <p>{footerConstant.address.line4}</p>
                        </Col>
                        <Col xs={12} md={3} className="footer-content-padding">
                            <h5>Contact</h5>
                            <p>{footerConstant.contentNo}</p>
                            <br />
                            <h5>Fax</h5>
                            <p>{footerConstant.faxNo}</p>
                        </Col>
                        <Col xs={12} md={2}>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Footer;