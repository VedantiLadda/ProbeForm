import React from 'react';
import 'main.css';
import PropTypes from 'prop-types';
import 'sharedComponents/Card/main.css';
import Card from 'sharedComponents/Card';
import formatString from 'utilities/formatString';

const CardComp = props => {
  const { cardLabel, setModal } = props;
  const openModel = () => setModal(cardLabel);
  return (
    <div className="col s12 m6 xl6">
      <Card className="card" onClick={openModel}>
        <div className="card-content">
          <span className="card-title center-align">{formatString(cardLabel)}</span>
        </div>
      </Card>
    </div>
  );
};
CardComp.propTypes = {
  cardLabel: PropTypes.string.isRequired
};

export default CardComp;
