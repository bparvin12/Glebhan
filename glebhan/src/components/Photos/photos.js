import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import "./photos.css"

class Photos extends Component {

    render() {
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/250" />
                    </Card>   
                </CardColumns>
            </Container>
        )
    }
}

export default Photos; 