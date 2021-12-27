import React from 'react';
import './NavMenu.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../Images/about.png';

const NavMenu = () => {
    return (
        <div className="header">
            <Navbar bg="dark" expand={false}>
                <Container>
                    <Navbar.Brand className="text-light name" href="#"><h2 className="text">OMAR FARUK</h2></Navbar.Brand>
                    <Navbar.Toggle className="bg-nav bg-success btn-outline-info " aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="bg-dark"
                    >
                        <Offcanvas.Header className="btn-close-white" closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img src={img} className="pro-pic btn-c-dark" alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body className="bg-dark text-light">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link className="d-block fw-bold text-decoration-none fs-4" to="/">
                                    Home
                                </Link>
                                <Link className="d-block fw-bold text-decoration-none fs-4" to="/about">
                                    About
                                </Link>
                                <Link className="d-block fw-bold text-decoration-none fs-4" to="/blog">
                                    Blog
                                </Link>
                                <Link className="d-block fw-bold text-decoration-none fs-4" to="/skill">
                                    Skills
                                </Link>
                                <Link className="d-block fw-bold text-decoration-none fs-4" to="/contact">
                                    Contact
                                </Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;