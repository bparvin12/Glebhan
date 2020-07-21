import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  transparent,
  ...otherProps
}) => (
  <button
    className={`
        ${inverted ? 'inverted' : ''} 
        ${transparent ? 'transparent' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''}
         custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
