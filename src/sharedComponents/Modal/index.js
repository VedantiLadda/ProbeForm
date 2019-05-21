import React, { Fragment } from 'react';
import './main.css';
import formatString from '../../utilities/formatString';

const newModal = props => {
  const { children, dashboard } = props;
  return (
    <Fragment>
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5>{formatString(dashboard.modal)}</h5>
          </div>
          <br />
          {children}
          <button className="btn" type="button">
            Submit
          </button>
          <div className="errorMessage" />
        </div>
      </div>
    </Fragment>
  );
};

export default newModal;
