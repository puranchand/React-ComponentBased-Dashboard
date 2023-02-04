import React from 'react';
import "../styles/fifthContainer.scss";
import { Container, Image, CardColumns } from 'react-bootstrap';
import { companyLogos } from '../constants/constants'


const FifthContainer = () => {
    return (
        <Container fluid="md" className="fifth-conatiner" id="careers">
            <div className="fifth-container-label">
                <h1>
                    {companyLogos.headerTitle}
                </h1>
            </div>
            <div className="fifth-conatiner-image-list">
                {companyLogos.logoList.map((logo, index) => {
                    return(
                    <div className="brand-logo" key={index}>
                        <Image src={logo.image} />
                    </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default FifthContainer;