import React, { Component } from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap'
import photo from '../../pictures/glebhanWeddingPhotos/Cover photo2_.jpg'

import "./OurWedding.scss"

class OurWedding extends Component {
    render() {
        return (
            <div>
                <Card className='jumbo'>
                    <Row>
                        <Col xs={7}>
                            <div className="writingColumnOurWedding">
                                {/* <Alert className='alertOurWedding'> */}
                                <div className='alertOurWedding'>Save The Date</div><br></br>
                                {/* </Alert> */}
                                {/* <Alert className='alertDetailsOurWedding'> */}
                                <div className='alertDetailsOurWedding'>
                                    <div className='headingOurWedding'>Saturday May 02, 2020</div>
                                    {/* Five O'Clock In The Evening */}
                                </div><br></br>
                                {/* </Alert> */}
                                {/* <Alert className='alertDetailsOurWedding'> */}
                                <div className='alertDetailsOurWedding'>
                                    <div className='headingOurWedding'>Ceremony and Reception</div>
                                    <div>Liberty Station - Building 177</div>
                                    <div>2875 Dewey Rd</div>
                                    <div>San Diego, CA 92106</div>
                                    <div>(619) 203-5610</div>
                                    {/* </Alert> */}
                                </div><br></br>
                                <div className='alertDetailsOurWedding'>
                                    <div className='headingOurWedding'>Attire</div>
                                    Semi-Formal
                                </div>
                            </div>
                        </Col>
                        <Col xs={5} className='imgColumnOurWedding'>
                            <div >
                                <Image src={photo} className='imgOurWedding' />
                            </div>
                        </Col>
                    </Row>


                </Card>
            </div>
        )
    }
}

export default OurWedding;