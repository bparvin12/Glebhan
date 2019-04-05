import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";


import "./NavBar.css"

class Navigation extends Component {

    render() {
        return (
            <Navbar variant="dark" className="NavBarBackground" expand="sm" fixed="top">
                <Navbar.Brand href="/">Glebhan</Navbar.Brand>
                <Nav className="mr-auto Words">
                    <Nav.Link href="/">Our Wedding</Nav.Link>
                    <Nav.Link href="guestaccommodations">Guest Accommodations</Nav.Link>
                    <Nav.Link href="photos">Photos</Nav.Link>
                    <Nav.Link href="registry">Registry</Nav.Link>
                    <Nav.Link href="rsvp">RSVP</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation; 