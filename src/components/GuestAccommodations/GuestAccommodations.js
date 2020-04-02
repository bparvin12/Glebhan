import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap'

// import courtyardMarriot from "../../pictures/courtyard.jpg"
// import Homewood from "../../pictures/Homewood.jpg"
// import Hampton from "../../pictures/hampton.jpg"

import "./GuestAccommodations.scss"

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
                            <Card.Title className="cardTitle">Residence Inn by Marriott San Diego Downtown/Bayfront</Card.Title>
                            <Card.Text className="cardText">
                                900 Bayfornt Ct.<br />
                                San Diego, CA 92101 <br />
                                (619) 831-0225
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.marriott.com/hotels/travel/sanrh-residence-inn-san-diego-downtown-bayfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Homewood} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">SpringHill Suites by Marriott San Diego Downtown/Bayfront</Card.Title>
                            <Card.Text className="cardText">
                                900 Bayfront Ct. <br />
                                San Diego, CA 92101 <br />
                                (619) 831-0224
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.marriott.com/hotels/travel/sandh-springhill-suites-san-diego-downtown-bayfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">InterContinental San Diego</Card.Title>
                            <Card.Text className="cardText">
                                901 Bayfront Ct<br />
                                San Diego 92101 <br />
                                (619) 501-9400
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.ihg.com/intercontinental/hotels/us/en/san-diego/sanhb/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-US-_-SANHB">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={Hampton} /> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Wyndham San Diego Bayside</Card.Title>
                            <Card.Text className="cardText">
                                1355 North Harbor Drive<br />
                                San Diego 92101<br />
                                (619) 232-3861
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="https://www.wyndhamhotels.com/wyndham/san-diego-california/wyndham-san-diego-bayside/overview?CID=LC:HR::GGL:RIO:National:47150&iata=00093796">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

export default GuestAccommodations;