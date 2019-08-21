import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";


import "./NavBar.scss"

class Navigation extends Component {

    render() {
        return (
            <Navbar variant="dark" className="NavBarBackground navbar-collapse" expand="sm" fixed="top">
                <Navbar.Brand href="/">Glebhan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto Words">
                        <Nav.Link href="/ourwedding">Our Wedding</Nav.Link>
                        <Nav.Link href="photos">Photos</Nav.Link>
                        <Nav.Link href="guestaccommodations">Guest Accommodations</Nav.Link>
                        {/* <Nav.Link href="registry">Registry</Nav.Link>
                        <Nav.Link href="rsvp">RSVP</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation; 