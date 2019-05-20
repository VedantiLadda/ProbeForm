import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Card = (props) => {
  const { children, className } = props;
  return (
    <Fragment>
      <div className={className}>
        {children}
      </div>
    </Fragment>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
