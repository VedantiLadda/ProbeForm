import React, { Fragment } from 'react';
import '../../../../main.css';
import Card from '../cardComp';

const CardsContainer = (props) => {
  const { dashboard } = props;
  const cardContentDisplay = dashboard.permissions.map(val => <Card key={val} cardLabel={val} />);
  return (
    <Fragment>
      <div className="container col s12 m8 l9">
        <div data-component="Cards" className="row">
          {cardContentDisplay}
        </div>
      </div>
    </Fragment>
  );
};
export default CardsContainer;
