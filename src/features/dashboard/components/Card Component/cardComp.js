import React from "react";
// import '../../../main.css';

const Card = () => {
    return (
        <div className="col s12 m6 xl6">
            <div className="card">
                <div className="card-content"><span className="card-title center-align">{this.props.cardLabel}</span></div>
            </div>
        </div>
    );
}

export default Card;
