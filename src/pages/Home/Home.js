import React, { Component } from 'react';
import Countdown from 'react-countdown';
// import { Carousel, Card } from 'react-bootstrap'
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
                    categoryTitle="Siobhan & Glenn"
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
            </div>
        );
    }
}

export default Home;
