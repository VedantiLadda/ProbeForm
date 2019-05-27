import React, { Fragment } from 'react';
import './main.css';
import formatString from 'utilities/formatString';
import Button from 'sharedComponents/Button';

const newModal = props => {
  const { children, dashboard, handleClick } = props;
  return (
    <Fragment>
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5>{formatString(dashboard.modal)}</h5>
          </div>
          <br />
          {children}
          <Button className="btn" type="button" display="visible" handleClick={handleClick}>
            Submit
          </Button>
          <div className="errorMessage" />
        </div>
      </div>
    </Fragment>
  );
};

export default newModal;
