import React from 'react';
import '../styles/firstContainer.scss'
import { Container, Row, Col } from 'react-bootstrap';

const FirstContainer = () => {
    return(
        <div className="first-container">
            <Row>
                <Col>
                    <div className="left-nanner">
                        <img src={'./assets/2-banner/banner-rounded-001.svg'} className="left-nanner-bg-img"/>
                        <div className="left-nanner-content">
                            <h1>
                                Make development <br/>
                                <span>easy with us.</span>
                            </h1>
                            <div className="small-text">
                                <p>Doing development can never be easy, and it takes time and resources.</p>
                                <p>We at EasyWork has the solution.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="right-banner">
                        <img src={'./assets/2-banner/banner.png'} className="right-banner-first-img" />
                        <img src={'./assets/2-banner/banner-rounded-002.svg'} className="right-banner-second-img" />
                    </div>
                </Col>
            </Row>
        </div>
    )
} 

export default FirstContainer;