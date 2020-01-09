import React, { Component } from 'react';
import { Card, CardDeck, Container, Button, Image } from 'react-bootstrap';
import "./Registry.scss";
import target from '../../pictures/target.jpg';
import bedbath from '../../pictures/bedbathandbeyond.png'

class Registry extends Component {
    render () {
        var style1 = {
            width: '200px',
            margin: '0 auto',
        }
        var style2 = {
            textAlign: 'left',
            background: "url('http://www.honeyfund.com/share/honeyfund3.png') no-repeat",
            display: "block", 
            width: '200px',
            height: '100px',
            textIndent: '-9999em'
        }
        var textCardStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

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
                            <Card.Title className="cardTitle">HoneyFund</Card.Title>
                            <Card.Text className="cardText">
                            <div style={style1}><a href="http://www.honeyfund.com/wedding/Glebhangetmarried" target= "_blank"  rel="noopener noreferrer" style={style2}>Visit our honeyfund at Honeyfund.com, the free honeymoon registry</a></div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="blank" href="http://www.honeyfund.com/wedding/Glebhangetmarried" target= "_blank"  rel="noopener noreferrer">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck>
                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Bed Bath & Beyond</Card.Title>
                            <Card.Text className="cardText" style={textCardStyle}>
                                <Image src={bedbath} fluid />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="_blank" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548217580"  rel="noopener noreferrer">Visit Website</Button>
                        </Card.Footer>
                    </Card>

                    <Card bg="light">
                        {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
                        <Card.Body>
                            <Card.Title className="cardTitle">Targèt</Card.Title>
                            <Card.Text className="cardText" style={textCardStyle}>
                                <Image src={target} fluid />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button className="cardButton" variant="secondary" target="_blank" href="https://www.target.com/gift-registry/giftgiver?registryId=54c50c5b45874f8686aff1bc119e5917&lnk=registry_custom_url"  rel="noopener noreferrer">Visit Website</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
            </Container>
            </section>
        )
    }
}

export default Registry;