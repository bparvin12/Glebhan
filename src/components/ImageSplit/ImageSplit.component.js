import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import './ImageSplit.styles.scss';

const ImageSplit = (props) => {
  const {
    imageUrl,
    splitConfiguration,
    categoryTitle,
    headline,
    body,
    bodyHTML_html_raw,
    buttonUrl,
    buttonText,
  } = props;
  const imageColumn = (
    <div className='item imageColumn videoRenderSettings'>
      <img src={imageUrl} alt='TODO' />
    </div>
  );

  const contentColumn = (
    <div
      className={
        splitConfiguration === 'left'
          ? 'leftMedia item writingSplit'
          : 'rightMedia item writingSplit'
      }>
      <div className='item innerWritingSplit'>
        <h2 className='category-title'>{categoryTitle}</h2>
        <hr className='brand-hr' />
        <span className='item'>{headline}</span>
        <p className='item'>{body}</p>
        <div
          className='crafterHTML'
          dangerouslySetInnerHTML={{ __html: bodyHTML_html_raw }}
        />
      </div>
      <div className='item innerWritingSplit'>
        {buttonText ? (
          <CustomButton>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to={buttonUrl}>
              {buttonText}
            </Link>
          </CustomButton>
        ) : null}
      </div>
    </div>
  );

  let firstColumn;
  let secondColumn;
  if (splitConfiguration === 'left') {
    firstColumn = imageColumn;
    secondColumn = contentColumn;
  } else {
    firstColumn = contentColumn;
    secondColumn = imageColumn;
  }

  return (
    <section className={'ImageSplitSection'}>
      <div className='container-fluid sectionRow p-0'>
        {firstColumn}
        {secondColumn}
      </div>
    </section>
  );
};

export default ImageSplit;
