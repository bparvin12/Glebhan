import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import pic1 from '../../pictures/glebhanWeddingPhotos/pic1.jpg'
import pic2 from '../../pictures/glebhanWeddingPhotos/pic2.jpg'
import pic3 from '../../pictures/glebhanWeddingPhotos/pic3.jpg'
import pic4 from '../../pictures/glebhanWeddingPhotos/pic4.jpg'
import pic5 from '../../pictures/glebhanWeddingPhotos/pic5.jpg'
import pic6 from '../../pictures/glebhanWeddingPhotos/pic6.jpg'
import pic7 from '../../pictures/glebhanWeddingPhotos/pic7.jpg'
import pic8 from '../../pictures/glebhanWeddingPhotos/pic8.jpg'
import pic9 from '../../pictures/glebhanWeddingPhotos/pic9.jpg'
import pic10 from '../../pictures/glebhanWeddingPhotos/pic10.jpg'
import pic11 from '../../pictures/glebhanWeddingPhotos/pic11.jpg'
import pic12 from '../../pictures/glebhanWeddingPhotos/pic12.jpg'
import pic13 from '../../pictures/glebhanWeddingPhotos/pic13.jpg'
import pic14 from '../../pictures/glebhanWeddingPhotos/pic14.jpg'
import pic15 from '../../pictures/glebhanWeddingPhotos/pic15.jpg'
import pic16 from '../../pictures/glebhanWeddingPhotos/pic16.jpg'
import pic17 from '../../pictures/glebhanWeddingPhotos/pic17.jpg'
import pic18 from '../../pictures/glebhanWeddingPhotos/pic18.jpg'
import pic19 from '../../pictures/glebhanWeddingPhotos/Cover Photo_.jpg'
import pic20 from '../../pictures/glebhanWeddingPhotos/Cover photo2_.jpg'

import "./photos.scss"

class Photos extends Component {

    render() {
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={pic1}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic2}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic3}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic4}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic5}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic6}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic7}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic8}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic9}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic10}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic11}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic12}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic13}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic14}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic15}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic16}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic17}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic18}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic19}/>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={pic20}/>
                    </Card>
                </CardColumns>
            </Container>
        )
    }
}

export default Photos; 