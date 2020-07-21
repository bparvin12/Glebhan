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
}) => {
  return (
    <div className="metaBlogCard">
      <div className="lt-gridCard-container">
        <div className="content">
          <h4 className="top">{blogTitle}</h4>
          {shortDescription ? (
            <p className="middle">{shortDescription}</p>
          ) : null}
          {htmlDescription ? (
            <div
              className="crafterHTML"
              dangerouslySetInnerHTML={{ __html: htmlDescription }}
            />
          ) : null}
          <div className="bottom">
            {internalorExternal === 'internal' ? (
              <CustomButton
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  history.push(`/${buttonLink}`);
                }}
              >
                {buttonText}
              </CustomButton>
            ) : (
              <CustomButton inverted>
                <a
                  href={buttonLink}
                  rel="noreferrer noopener"
                  target="_blank"
                  style={{ textDecoration: 'inherit', color: 'inherit' }}
                >
                  {buttonText}
                </a>
              </CustomButton>
            )}
          </div>
        </div>
        <div className="image">
          <img className="imgElement" src={imgSource} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(HotelCard);
