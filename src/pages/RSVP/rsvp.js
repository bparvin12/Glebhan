import React, { Component } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import CustomButton from '../../components/custom-button/custom-button.component';
import './rsvp.scss';

class RSVP extends Component {
  render() {
    return (
      <div className='rsvpSection'>
        <div className='jumbo rsvpCard'>
          <div className='writingColumnOurWedding'>
            <h2 className='alertOurWedding'>Siobhan & Glenn</h2>
            <br></br>
            <div className='alertDetailsOurWedding'>
              Friday August 6<sup>th</sup>, 2021
              <br />
              Half After Four O'Clock In The Afternoon
              <br></br>
              <br></br>
              <strong>Please, kindly let us know if you will be able to celebrate with
              us!</strong>
              <br /><br />
            </div>

            <div className='alertDetailsOurWedding'>
              <CustomButton>
                <a
                  href='https://glebhan2020.app.rsvpify.com/'
                  rel='noreferrer noopener'
                  target='_blank'
                  style={{ textDecoration: 'inherit', color: 'inherit' }}>
                  RSVP
                  <BsArrowRight className='arrowIcon' />
                </a>
              </CustomButton>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default RSVP;
