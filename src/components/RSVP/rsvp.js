import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import './rsvp.scss'

class RSVP extends Component {
    render() {
        return (
            <div>
                <Card className="jumbo rsvpCard">
                    <Row>
                        <Col>
                            <div className="writingColumnOurWedding">
                                {/* <Alert className='alertOurWedding'> */}
                                <div className="alertOurWedding">
                                    RSVP
                                </div>
                                <br></br>
                                {/* </Alert> */}
                                {/* <Alert className='alertDetailsOurWedding'> */}
                                <div className="alertDetailsOurWedding">
                                    <div className="headingOurWedding">
                                        Friday August 28, 2020
                                    </div>
                                    Five O'Clock In The Evening
                                </div>
                                <br></br>
                                <div className="alertDetailsOurWedding">
                                    <div className="rsvpParagraph">
                                        We hope you are all staying safe and healthy. 
                                        Due to the recent COVID-19 pandemic, we postponed our wedding and changed our venue due to availability. 
                                        Fear not, we still are SO excited to get married with all our loved ones there with us!
                                        <br></br><br></br>
                                        We would greatly appreciate it if you could RSVP using the link below! Hope to see each-and-every one of you there!  
                                    </div>
                                </div>
                                <br></br>
                                {/* </Alert> */}
                                {/* <Alert className='alertDetailsOurWedding'> */}
                                <div className="alertDetailsOurWedding">
                                    <Button className="rsvpButton" variant="secondary" target="blank" href="https://glebhan2020.app.rsvpify.com/">RSVP HERE</Button>
                                </div>
                                <br></br>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default RSVP;