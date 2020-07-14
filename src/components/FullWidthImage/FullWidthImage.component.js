import React from 'react';
import coverImage from '../../pictures/glebhanWeddingPhotos/Cover Photo_.jpg';
import './FullWidthImage.styles.scss';

export default function FullWidthImage() {
  return (
    <section className='fullWidthImageSection'>
      <div className='container-fluid sectionRow p-0'>
        <img className='bg-image' src={coverImage} alt={'cover'} />
        {/* <div className='container content-container'>
          <div className='row row-alignment '>
            <span className='category-title'>{'Siobhan & Glenn'}</span>
            <hr className='brand-hr' />
            <div className=''>
              <h2 className='item'>{'Wedding Countdown'}</h2>
              <div>
                <p className=''>
                  {
                    <div className='writing2'>
                      <div>May 2, 2020</div>
                      <div>San Diego, CA</div>
                    </div>
                  }
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
