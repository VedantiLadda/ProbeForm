import React, { Fragment } from 'react';
import './main.css';

const Button = (props) => {
  const {
    children, className, handleClick, display,
  } = props;
  return (
      <button
        className={className}
        onClick={(handleClick) ? handleClick.bind(null) : console.log('click not handled')}
        style={{ display: display ? '' : 'none' }}
        type="button"
      >
        {children}
      </button>
  );
};

export default Button;
