import React, { Component } from "react";
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
// import weddingImage from "../../pictures/wedding.jpg";
// import liberty from "../../pictures/liberty.jpg"
import { Carousel, Card } from "react-bootstrap";
import coverImage from "../../pictures/glebhanWeddingPhotos/Cover Photo_.jpg";
import "./Home.scss";

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel
                    controls={false}
                    indicators={false}
                    className="customCarousel"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imageCover"
                            src={coverImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Card className="cardHome displayable">
                                <div className="writingDiv">
                                    <div className="writing1">
                                        Siobhan & Glenn
                                    </div>
                                    <div className="writing2">
                                        <div>August 28, 2020</div>
                                        <div>San Diego, CA</div>
                                        <div>5pm - Midnight</div>
                                    </div>
                                </div>
                            </Card>
                        </Carousel.Caption>
                        <Carousel.Caption className="countdown displayable">
                            <div className="countdownTitle">
                                Wedding Countdown
                            </div>
                            <div
                                data-type="countdown"
                                data-id="1882091"
                                className="tickcounter"
                            >
                                <a
                                    href="//www.tickcounter.com/countdown/1882091/my-countdown"
                                    title="My countdown"
                                >
                                    My countdown
                                </a>
                                <a
                                    href="//www.tickcounter.com/"
                                    title="Countdown"
                                >
                                    Countdown
                                </a>
                            </div>
                            {/* <div
                                data-type="countdown"
                                data-id="1344628"
                                className="tickcounter"
                            >
                                <a
                                    href="//www.tickcounter.com/countdown/1882091/my-countdown"
                                    title="My countdown"
                                >
                                    My countdown
                                </a>
                            </div> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* hidden portions when screen is larger than 480px */}
                <Card className="cardHome hideable">
                    <div className="writingDiv">
                        <div className="writing1">Siobhan & Glenn</div>
                        <div className="writing2">
                            <div>August 28, 2020</div>
                            <div>San Diego, CA</div>
                            <div>5pm - Midnight</div>
                        </div>
                    </div>
                </Card>
                <div className="countdown hideable">
                    <div className="countdownTitle">Wedding Countdown</div>
                    <div
                        data-type="countdown"
                        data-id="1882091"
                        className="tickcounter"
                    >
                        <a
                            href="//www.tickcounter.com/countdown/1882091/my-countdown"
                            title="My countdown"
                        >
                            My countdown
                        </a>
                        <a href="//www.tickcounter.com/" title="Countdown">
                            Countdown
                        </a>
                    </div>
                    {/* <div
                        data-type="countdown"
                        data-id="1344628"
                        className="tickcounter"
                    >
                        <a
                            href="//www.tickcounter.com/countdown/1879933/my-countdown"
                            title="My countdown"
                        >
                            My countdown
                        </a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Home;
