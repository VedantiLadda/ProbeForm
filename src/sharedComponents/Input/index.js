import React, { Fragment } from 'react';
import './main.css';

const Input = props => {
  const { disabled, onchange, type, value, name, placeholder } = props;
  return (
    <Fragment>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={e => (onchange ? onchange.bind(this, e)() : console.log('change not handled'))}
      />
    </Fragment>
  );
};

export default Input;
