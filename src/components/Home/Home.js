import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
// import weddingImage from "../../pictures/wedding.jpg";
// import liberty from "../../pictures/liberty.jpg"
import { Carousel, Card } from 'react-bootstrap'
import coverImage from '../../pictures/glebhanWeddingPhotos/Cover Photo_.jpg'
import "./Home.css";

class Home extends Component {
    render() {

        return (
            <div>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={coverImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Card className='cardHome'>
                                <div className='writingDiv'>
                                    <div className="writing1">
                                        Glenn & Siobhan
                                    </div>
                                    <div className="writing2">
                                        <div>May 2, 2020</div>
                                        <div>San Diego, CA</div>
                                    </div>
                                </div>
                            </Card>
                        </Carousel.Caption>
                        <Carousel.Caption className='countdown'>
                        <div className="countdownTitle">Wedding Countdown</div>
                        <div data-type="countdown" data-id="1344628" className="tickcounter"><a href="//www.tickcounter.com/countdown/1344601" title="My countdown">My countdown</a></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Home;