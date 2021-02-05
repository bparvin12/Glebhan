import React from 'react';
import HotelCard from './HotelCard';
import Wyndham from '../../pictures/wyndham.png';
import Bayfront from '../../pictures/bayfront.jpg';
import ResidenceInn from '../../pictures/residenceinn.jpg';
import Intercontinental from '../../pictures/intercontinental.jpeg';
import './HotelCards.styles.scss';

export default function HotelCards(props) {
  return (
    <section className='metaBlogCardSection container'>
      <div className='lt-grid-container'>
        <HotelCard
          blogTitle='Springhill Suites: San Diego Downtown/Bayfront'
          shortDescription={
            <>
              900 Bayfront Court<br />
              San Diego, CA 92101 <br />
              (619) 831-0224
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.marriott.com/hotels/travel/sandh-springhill-suites-san-diego-downtown-bayfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_Mjc3MTM4NS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D'
          imgSource={Bayfront}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='Residence Inn: San Diego Downtown/Bayfront'
          shortDescription={
            <>
              900 Bayfront Court<br />
              San Diego, CA 92101 <br />
              (619) 831-0225
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.marriott.com/hotels/travel/sanrh-residence-inn-san-diego-downtown-bayfront/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjgyNjc4MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D'
          imgSource={ResidenceInn}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='InterContinental Hotel & Resorts'
          shortDescription={
            <>
              901 Bayfront Court<br />
              San Diego, CA 92101 <br />
              (888) 424-6835
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.ihg.com/intercontinental/hotels/us/en/san-diego/sanhb/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-US-_-SANHB'
          imgSource={Intercontinental}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='Wyndham San Diego Bayside'
          shortDescription={
            <>
              1355 North Harbor Drive<br />
              San Diego, CA 92101 <br />
              (619) 232-3861
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.wyndhamhotels.com/wyndham/san-diego-california/wyndham-san-diego-bayside/overview?CID=LC:HR::GGL:RIO:National:47150&iata=00093796'
          imgSource={Wyndham}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
      </div>
    </section>
  );
}
