import React from "react";
import './Header.css'

import {
    Container, Navbar, Nav
} from "react-bootstrap";

const Header = () => {
    return <section className="Sidebar">
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/mainPageLogo.jpg"
                            width="40"
                        />
                        Print4U
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link className="home" href="/">Главная</Nav.Link>
                            <Nav.Link className="reviews" href="/reviews">Отзывы</Nav.Link>
                            <Nav.Link className="about" href="/about">Контакты</Nav.Link>
                            <Nav.Link className="login" href="/login">Войти</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </section>
}
export default Header;