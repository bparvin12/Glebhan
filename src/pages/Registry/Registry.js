import React, { Component } from 'react';
import { Card, CardDeck, Container, Image } from 'react-bootstrap';
import './Registry.scss';
import honeyfund from '../../pictures/honeyfund3.png';
import target from '../../pictures/target.jpg';
import bedbath from '../../pictures/bedbathandbeyond.png';
import CustomButton from '../../components/custom-button/custom-button.component';

class Registry extends Component {
  render() {
    var textCardStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <section className='registrySection'>
        <Container className='guestAccommodations'>
          <div className='header'>Registry</div>
          <CardDeck className=''>
            <Card bg='light' className='cardBody mb-3'>
              {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
              <Card.Body>
                <Card.Title className='cardTitle'>
                  <h4 style={{ color: '#77815c' }}>HoneyFund</h4>
                </Card.Title>
                <Card.Text className='cardText' style={textCardStyle}>
                  <a
                    href='http://www.honeyfund.com/wedding/Glebhangetmarried'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <Image src={honeyfund} fluid />
                  </a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <CustomButton inverted>
                  <a
                    href='http://www.honeyfund.com/wedding/Glebhangetmarried'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    Visit Website
                  </a>
                </CustomButton>
              </Card.Footer>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card bg='light' className='cardBody mb-3'>
              {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
              <Card.Body>
                <Card.Title className='cardTitle'>
                  <h4 style={{ color: '#77815c' }}>Bed Bath & Beyond</h4>
                </Card.Title>
                <Card.Text className='cardText' style={textCardStyle}>
                  <a
                    href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548217580'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <Image src={bedbath} fluid />
                  </a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <CustomButton inverted>
                  <a
                    href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548217580'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    Visit Website
                  </a>
                </CustomButton>
              </Card.Footer>
            </Card>

            <Card bg='light' className='cardBody mb-3'>
              {/* <Card.Img className="cardImage" variant="top" src={courtyardMarriot} fluid/> */}
              <Card.Body>
                <Card.Title className='cardTitle'>
                  <h4 style={{ color: '#77815c' }}>Targèt</h4>
                </Card.Title>
                <Card.Text className='cardText' style={textCardStyle}>
                  <a
                    href='https://www.target.com/gift-registry/giftgiver?registryId=54c50c5b45874f8686aff1bc119e5917&lnk=registry_custom_url'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    <Image src={target} fluid />
                  </a>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <CustomButton inverted>
                  <a
                    href='https://www.target.com/gift-registry/giftgiver?registryId=54c50c5b45874f8686aff1bc119e5917&lnk=registry_custom_url'
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    Visit Website
                  </a>
                </CustomButton>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </section>
    );
  }
}

export default Registry;
