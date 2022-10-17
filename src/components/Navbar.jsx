import React, { useState } from 'react';
import '../styles/navBar.scss'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navber = () => {
    
    const [toggle, setToggle] = useState(false)
    const [menu, setMenu] = useState({
        home: 'home'
    })

    const handleToggle = (value) => {
        // console.log(value, ":877")
        setToggle({
            toggle: value
        })
    }

    const handleSelectMenu = (value) => {
        setMenu({[value]: value})
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar">
                <Container>
                <Navbar.Brand href="#home">
                    <span className="hero-logo-icon">
                        <img src="./assets/1-header/logo.png" />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" 
                >
                         <Nav className="m-auto justify-content-center custome-active-menu" >
                            <Nav.Item onClick={() => handleSelectMenu('home')}>
                                <Nav.Link className={menu && menu.home ? "active " : ''}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => handleSelectMenu('about')}>
                                <Nav.Link  className={menu && menu.about ? "active " : ''}>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => handleSelectMenu('service')}>
                                <Nav.Link className={menu && menu.service ? "active " : ''}>Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => handleSelectMenu('pricing')}>
                                <Nav.Link className={menu && menu.pricing ? "active " : ''}>Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => handleSelectMenu('careers')}>
                                <Nav.Link className={menu && menu.careers ? "active " : ''}>careers</Nav.Link>
                            </Nav.Item>
                        </Nav>
                   
                    <Nav className="search-icon">
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navber;