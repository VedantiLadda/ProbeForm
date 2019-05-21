import React, { Fragment } from 'react';
import './main.css';
import PropTypes from 'prop-types';

const Label = props => {
  const { children, className, htmlFor, handleClick } = props;
  return (
    <Fragment>
      <label className={className} htmlFor={htmlFor} onClick={handleClick}>
        {children}
      </label>
    </Fragment>
  );
};

// Label.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string.isRequired,
// };
export default Label;
