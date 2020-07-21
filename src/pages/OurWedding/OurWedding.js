import React, { Component } from 'react';
import ImageSplit from '../../components/ImageSplit'
import photo from '../../pictures/glebhanWeddingPhotos/Cover photo2_.jpg'

import "./OurWedding.scss"

class OurWedding extends Component {
    render() {
        return (
            <section className="ourWeddingSection">
            <ImageSplit
                imageUrl={photo}
                splitConfiguration="right"
                categoryTitle={<span style={{fontWeight:"bold"}}>Save the Date</span>}
                headline={
                    <div>
                        <h4>Friday August 6<sup>th</sup>, 2021</h4>
                        <br /><br />
                        <div style={{textAlign: "center"}}>
                            <h4 style={{color: "#77815c"}}>Ceremony and Reception</h4>
                            <span>The Lane</span><br />
                            <span>900 Bayfront Ct.</span><br />
                            <span>San Diego, CA 92101</span><br />
                            <span>(619) 203-5610</span><br />
                            <sub style={{fontSize:"10px"}}>SITTING ON THE HISTORIC LAND THAT HOUSED THE ORIGINAL PADRES STADIUM--LANE FIELD</sub><br /><br />
                            <h4 style={{color: "#77815c"}}>Attire</h4>
                            <span>Semi-Formal</span> 
                        </div>
                        
                    </div>
                }
                body={''}
                buttonUrl='/guest-accommodations'
                buttonText="Guest Accommodations"
            />
            </section>
        )
    }
}

export default OurWedding;