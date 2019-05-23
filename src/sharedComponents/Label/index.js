import React from 'react';
import './main.css';
import PropTypes from 'prop-types';

const Label = props => {
  const { children, className, htmlFor, handleClick } = props;
  return (
      <label className={className} htmlFor={htmlFor} onClick={handleClick}>
        {children}
      </label>
  );
};

// Label.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string.isRequired,
// };
export default Label;
