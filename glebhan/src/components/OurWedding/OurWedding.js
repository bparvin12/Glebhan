import React, { Component } from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap'
import photo from '../../pictures/glebhanWeddingPhotos/Cover\ photo2_.jpg'

import "./OurWedding.css"

class OurWedding extends Component {
    render() {
        return (
            <div>
                <Card className='jumbo'>
                    <Row>
                        <Col xs={7}>

                        </Col>
                        <Col xs={5} className='imgColumnOurWedding'>
                            <div >
                                <Image src={photo} className='imgOurWedding' fluid/>
                            </div>
                            
                        </Col>
                    </Row>


                </Card>
            </div>
        )
    }
}

export default OurWedding;