import React, { useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import './MetaNavBar.styles.scss';

const reducer = (state, nextState) => ({ ...state, ...nextState });

export default function MetaNavBar() {
  const [state, setState] = useReducer(reducer, {
    isScrolling: false,
    thePosition: 0,
  });

  useEffect(() => {
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = winScroll / height;
      if (winScroll < 150) {
        setState({ isScrolling: false });
      } else {
        setState({ isScrolling: true });
      }

      setState({ thePosition: scrolled });
    };
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, [setState]);

  return (
    <section className='navBarSection'>
      <div
        id='TopNavigation'
        className={
          state.isScrolling
            ? 'nav navbar navbar-expand-lg navbar-light bg-light fixed-top is-scrolling'
            : 'nav navbar navbar-expand-lg navbar-light bg-light fixed-top is-not-scrolling'
        }>
        <NavLink
          className='navbar-brand navBarLink'
          exact
          to='/'
          activeClassName='selected'>
          Glebhan
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item' data-toggle='collapse' data-target='#navbarSupportedContent'>
              <NavLink
                className='nav-link'
                to='/our-wedding'>
                Our Wedding
              </NavLink>
            </li>
            <li className='nav-item' data-toggle='collapse' data-target='#navbarSupportedContent'>
              <NavLink
                className='nav-link'
                to='/photos'>
                Photos
              </NavLink>
            </li>
            <li className='nav-item' data-toggle='collapse' data-target='#navbarSupportedContent'>
              <NavLink
                className='nav-link'
                to='/guest-accommodations'>
                Guest Accommodations
              </NavLink>
            </li>
            <li className='nav-item' data-toggle='collapse' data-target='#navbarSupportedContent'>
              <NavLink
                className='nav-link'
                to='/registry'>
                Registry
              </NavLink>
            </li>
            {/* <li className='nav-item' data-toggle='collapse' data-target='#navbarSupportedContent'>
              <NavLink
                className='nav-link'
                to='/rsvp'>
                RSVP
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
