import React from 'react';
import '../styles/thirdContainer.scss'
import { Container, Row, Card } from 'react-bootstrap';
import { peopleData } from '../constants/constants';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const ThirdContainer = () => {

    const cardItem = (people, index) => {
        return (
            <Card border="light" key={index} style={{ width: '18rem', minWidth: 150, }}>
                <Card.Header className="card-header-div">
                    <div className="user-avatar">
                        <img src={people.image} />
                    </div>
                    <div className="user-info">
                        <Card.Title>Light Card Title</Card.Title>
                        <span>{people.desination}</span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {people.discription}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="third-container">
            <Container fluid="md">
                <div className="third-container-label">
                    <span>
                        <img src={peopleData.icon}/>
                    </span>
                    <h1>
                        {peopleData.headerTitle}
                    </h1>
                </div>
                <Row>
                    <Carousel
                        plugins={[
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3
                                }
                            },
                        ]}
                        className="slider-div"
                    >
                        {peopleData.peopleInfoList.map((person, index) => {
                            return cardItem(person, index);
                        })}
                    </Carousel>
                    <Dots number={3} />
                </Row>
            </Container>
        </div>
    )
}

export default ThirdContainer;