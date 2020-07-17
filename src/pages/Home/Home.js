import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { Carousel, Card } from 'react-bootstrap'
// import FullWidthImage from '../../components/FullWidthImage';
import ImageSplit from '../../components/ImageSplit';
import coverImage from '../../pictures/glebhanWeddingPhotos/Cover Photo_.jpg'
import "./Home.scss";


class Home extends Component {
    render() {

        return (
            <div className="homeSection">
                <ImageSplit
                    imageUrl={coverImage}
                    splitConfiguration="left"
                    categoryTitle="Glenn & Siobhan"
                    headline={
                        <span>
                            August 6<sup>th</sup>, 2021 <span style={{fontSize: '25px'}}>&bull;</span> San Diego, CA
                        </span>
                    }
                    body={<Countdown
                        date='2021-08-06T17:00:00'
                        renderer={({total, days, hours, minutes, seconds, milliseconds, completed}) => <div>{days} Days To Go!</div>}
                     />}
                    buttonUrl='/our-wedding'
                    buttonText="Our Wedding"
                />
                {/* <Carousel controls={false} indicators={false} className='customCarousel'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 imageCover"
                            src={coverImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Card className='cardHome displayable'>
                                <div className='writingDiv'>
                                    <div className="writing1">
                                        Siobhan & Glenn
                                    </div>
                                    <div className="writing2">
                                        <div>May 2, 2020</div>
                                        <div>San Diego, CA</div>
                                    </div>
                                </div>
                            </Card>
                        </Carousel.Caption>
                        <Carousel.Caption className='countdown displayable'>
                            <div className="countdownTitle">Wedding Countdown</div>
                            <div data-type="countdown" data-id="2081112" className="tickcounter"><a href="//www.tickcounter.com/countdown/2081112" title="My countdown">My countdown</a></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                {/* hidden portions when screen is larger than 480px */}
                {/* <Card className='cardHome hideable'>
                    <div className='writingDiv'>
                        <div className="writing1">
                            Siobhan & Glenn
                                    </div>
                        <div className="writing2">
                            <div>May 2, 2020</div>
                            <div>San Diego, CA</div>
                        </div>
                    </div>
                </Card>
                <div className='countdown hideable'>
                    <div className="countdownTitle">Wedding Countdown</div>
                    <div data-type="countdown" data-id="2081112" className="tickcounter"><a href="//www.tickcounter.com/countdown/2081112" title="My countdown">My countdown</a></div>
                </div> */}
            </div>
        )
    }
}

export default Home;