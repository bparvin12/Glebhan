import React from 'react';
import HotelCard from './HotelCard';
import CourtyardMarriot from '../../pictures/courtyardMarriot.png';
import Homewood from '../../pictures/homewood.png';
import Hampton from '../../pictures/hampton.png';
import Marriot from '../../pictures/marriot.png';
import './HotelCards.styles.scss';

export default function HotelCards(props) {
  return (
    <section className='metaBlogCardSection container'>
      <div className='lt-grid-container'>
        <HotelCard
          blogTitle='Courtyard Marriot'
          shortDescription={
            <>
              2592 Laning Rd <br />
              San Diego, CA 92106 <br />
              (619) 221-1900
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.marriott.com/hotels/travel/sanal-courtyard-san-diego-airport-liberty-station'
          imgSource={CourtyardMarriot}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='Homewood Suites By Hilton'
          shortDescription={
            <>
              2576 Laning Rd <br />
              San Diego, CA 92106 <br />
              (619) 222-0500
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://homewoodsuites3.hilton.com/en/hotels/california/homewood-suites-by-hilton-san-diego-airport-liberty-station-SANLSHW/index.html'
          imgSource={Homewood}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='Hampton Inn & Suites By Hilton'
          shortDescription={
            <>
              2211 Lee C <br />
              San Diego 92101 <br />
              (619) 222-0500
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://hamptoninn3.hilton.com/en/hotels/california/hampton-inn-and-suites-san-diego-airport-liberty-station-SANLBHX/index.html'
          imgSource={Hampton}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
        <HotelCard
          blogTitle='TownePlace Suites San Diego Airport/Liberty Station'
          shortDescription={
            <>
              2311 Lee Court
              <br />
              San Diego 92101
              <br />
              (619) 881-4100
            </>
          }
          internalorExternal='external'
          buttonText='Visit Website'
          buttonLink='https://www.marriott.com/hotels/travel/santa-towneplace-suites-san-diego-airport-liberty-station/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'
          imgSource={Marriot}
          imgAlt='courtyard marriot'
          htmlDescription=''
        />
      </div>
    </section>
  );
}
