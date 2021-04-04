import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button.component';
import './HotelCard.styles.scss';

const HotelCard = ({
  blogTitle,
  shortDescription,
  buttonLink,
  buttonText,
  imgSource,
  imgAlt,
  history,
  htmlDescription,
  internalorExternal,
  venue
}) => {
  return (
    <div className='metaBlogCard'>
      <div className='lt-gridCard-container'>
        <div className='content'>
          <h4 className='top'>{blogTitle}</h4>
          {shortDescription ? (
            <p className='middle'>{shortDescription}</p>
          ) : null}
          {htmlDescription ? (
            <div
              className='crafterHTML'
              dangerouslySetInnerHTML={{ __html: htmlDescription }}
            />
          ) : null}
          <div className='bottom'>
            {internalorExternal === 'internal' ? (
              <CustomButton
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  history.push(`/${buttonLink}`);
                }}>
                {buttonText}
              </CustomButton>
            ) : (
              <div>
                <CustomButton inverted>
                  <a
                    href={buttonLink}
                    rel='noreferrer noopener'
                    target='_blank'
                    style={{ textDecoration: 'inherit', color: 'inherit' }}>
                    {buttonText}
                  </a>
                </CustomButton>
              </div>
            )}
          </div>
        </div>
        <div className='image'>
          <img className='imgElement' src={imgSource} alt={imgAlt} />
        </div>
      </div>
      {venue ? <div className="cirlce"><span>Venue Located Here!</span></div> : null }
    </div>
  );
};

export default withRouter(HotelCard);
