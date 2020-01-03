import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import "./Registry.scss"

class Registry extends Component {
    render () {
        return (
            <section className='registrySection'>
            <Container className='guestAccommodations'>
                <br />
                <br />
                <br />
                <div className="header">Registry</div>
                <br />
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Targèt</Card.Title>
                            <Card.Text className="cardText">
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="#">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Homewood} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Registry 2</Card.Title>
                            <Card.Text className="cardText">
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="#">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Registry 3</Card.Title>
                            <Card.Text className="cardText">
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="#">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Registry 4</Card.Title>
                            <Card.Text className="cardText">
                               
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="#">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
            </section>
        )
    }
}

export default Registry;