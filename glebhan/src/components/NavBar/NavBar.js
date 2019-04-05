import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


import "./NavBar.css"

class Navigation extends Component {
    render() {
        return (
            <Navbar variant="dark" fixed="top" className="NavBarBackground" expand="sm">
                <Navbar.Brand href="home">Glebhan</Navbar.Brand>
                <Nav className="mr-auto Words">
                    <Nav.Link href="home">Our Wedding</Nav.Link>
                    <Nav.Link href="guestaccomodations">Guest Accomodations</Nav.Link>
                    <Nav.Link href="photos">Photos</Nav.Link>
                    <Nav.Link href="registry">Registry</Nav.Link>
                    <Nav.Link href="rsvp">RSVP</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation; // Don’t forget to use export default!