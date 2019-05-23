import React, { Fragment } from 'react';
import './main.css';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { children, className } = props;
  return (
      <label className={className}>
        {children}
      </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
export default Label;
