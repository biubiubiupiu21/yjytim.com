// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

// css
import './css/headerFooter.css';
import '../css/style.css';

// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"
import { AiOutlineBilibili } from "react-icons/ai";

//  profileimage and thw logo image
import logoImage from '../image/logoImage.png'
import React, { useState} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import {emailAddress, githubUrl, youtubeUrl, insUrl, insPhotoUrl, bilibiliUrl} from './../constantsLink.js';

function BasicExample() {
    const [hideOnScroll, setHideOnScroll] = useState(true)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // Scroll up and down get the the postion alive
    useScrollPosition(({ prevPos, currPos }) => {
        let isShow = currPos.y < prevPos.y;
        if (currPos.y === 0){
            isShow = false
        }
        if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      }, [hideOnScroll])
    
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

return (
    <Navbar className={`backgroundcolor1 PoppinsFont nav  ${hideOnScroll && 'navhide'}`}  variant="dark" fixed="top" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logoImage}
                className="d-inline-block align-top-right logoImage"
                />{' '}
                <p class="d-inline-block align-text-top textColor1" style={{ fontSize: "1.4rem" }}>Junyu Yao</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{paddingRight:"10%"}}>
                        <Nav.Link className='navbarButton textColor1 me-auto' style={{paddingLeft:"12px"}} href="/">Home</Nav.Link>
                        <Nav.Link className='navbarButton textColor1 me-auto' style={{paddingLeft:"12px"}} href={`${githubUrl}`} target="_blank">Projects</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='btn-dark backgroundcolor1 textColor1 mx-auto' style={{ outline: "none", boxShadow: 'none'}}>
                                More
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <NavDropdown.Item href={`${githubUrl}`} target="_blank">
                                    <FontAwesomeIcon icon={ faGithub } className="socialMLogo"/> Github
                                </NavDropdown.Item>  
                                <NavDropdown.Item href={`${youtubeUrl}`} target="_blank">
                                    <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/> YouTube
                                </NavDropdown.Item>
                                <NavDropdown.Item href={`${bilibiliUrl}`} target="_blank">
                                    <AiOutlineBilibili /> Bilibili
                                </NavDropdown.Item>
                                <NavDropdown.Item href={`${insUrl}`} target="_blank">
                                    <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/> Instagram
                                </NavDropdown.Item>
                                <NavDropdown.Item href={`${insPhotoUrl}`} target="_blank">
                                    <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/> Photography
                                </NavDropdown.Item>             

                                <NavDropdown.Divider/>

                                <NavDropdown.Item href={`mailto:${emailAddress}`}>
                                    Contact me
                                </NavDropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicExample;