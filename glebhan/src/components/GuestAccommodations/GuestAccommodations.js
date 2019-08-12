import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap'

// import courtyardMarriot from "../../pictures/courtyard.jpg"
// import Homewood from "../../pictures/Homewood.jpg"
// import Hampton from "../../pictures/hampton.jpg"

import "./GuestAccommodations.css"

class GuestAccommodations extends Component {
    render() {

        return (
            <Container className='guestAccommodations'>
                <br />
                <br />
                <br />
                <div className="header">Guest Accommodations</div>
                <br />
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Courtyard Marriot</Card.Title>
                            <Card.Text className="cardText">
                                2592 Laning Rd <br />
                                San Diego, CA 92106 <br />
                                (619) 221-1900
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.marriott.com/hotels/travel/sanal-courtyard-san-diego-airport-liberty-station">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Homewood} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Homewood Suites By Hilton</Card.Title>
                            <Card.Text className="cardText">
                                2576 Laning Rd <br />
                                San Diego, CA 92106 <br />
                                (619) 222-0500
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://homewoodsuites3.hilton.com/en/hotels/california/homewood-suites-by-hilton-san-diego-airport-liberty-station-SANLSHW/index.html">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Hampton Inn & Suites By Hilton</Card.Title>
                            <Card.Text className="cardText">
                                2211 Lee C <br />
                                San Diego 92101 <br />
                                (619) 222-0500
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://hamptoninn3.hilton.com/en/hotels/california/hampton-inn-and-suites-san-diego-airport-liberty-station-SANLBHX/index.html">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">TownePlace Suites San Diego Airport/Liberty Station</Card.Title>
                            <Card.Text className="cardText">
                                2311 Lee Court<br />
                                San Diego 92101<br />
                                (619) 881-4100
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.marriott.com/hotels/travel/santa-towneplace-suites-san-diego-airport-liberty-station/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

export default GuestAccommodations;