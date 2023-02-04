import React from 'react';
import '../styles/secondContainer.scss'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { secondContentData } from '../constants/constants'

const SecondContainer = () => {


    const contentBox = (data) => {
        return (
            <div className="content-card">
                <Card className="noBorder">
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    };

    const leftImageWithContent = (item, index) => {
        return (
            <Row className="image-with-content" key={index}>
                <Col>
                    <div className="left-content-image">
                        <img src={item.image} className="" />
                    </div>
                </Col>
                <Col className="left-content-box">
                    {contentBox(item)}  
                </Col>
            </Row>
        )
    };

    return (
        <div className="second-container" id="about-us">
            <Container fluid="md">
                {secondContentData.map((item, index) => {
                    return leftImageWithContent(item, index)
                })}
            </Container>
        </div>
    )
}

export default SecondContainer;