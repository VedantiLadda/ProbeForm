import React from "react";
import '../../../../main.css';
import '../../../../sharedComponents/Card/main.css';
import Card from '../../../../sharedComponents/Card';

const CardComp = (props) => {
    return (
        <div className="col s12 m6 xl6">
            <Card className="card">
                <div className="card-content">
                    <span className="card-title center-align">
                        {props.cardLabel}
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default CardComp;