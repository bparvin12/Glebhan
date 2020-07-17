import React, { Component } from 'react';
import HotelCards from '../../components/HotelCards';

import './GuestAccommodations.scss';

function GuestAccommodations() {
  return (
    <section className='guestAccommodations'>
      <h1 className='header'>Guest Accommodations</h1>
      <HotelCards />
    </section>
  );
}

export default GuestAccommodations;
