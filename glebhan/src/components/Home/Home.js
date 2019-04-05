import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import weddingImage from "../../pictures/wedding.jpg";
import liberty from "../../pictures/liberty.jpg"
import Carousel from 'react-bootstrap/Carousel'
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={weddingImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="writing1">
                                <h3>Glenn & Siobhan</h3>
                            </div>
                            <div className="writing2">
                                <h5>May 2, 2020</h5>
                                <h5>San Diego, CA</h5>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={liberty}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="carousel2">
                                <h2>Liberty Station - Building 177</h2>
                                <div className="address">
                                    <h4>2875 Dewey Rd</h4>
                                    <h4>San Diego, CA 92106</h4>
                                </div>
                                <h4>(619) 203-5610</h4>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={weddingImage}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Home;