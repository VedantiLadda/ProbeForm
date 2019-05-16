import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const Card=(props)=>{
    const {children,className} = props;
    return(
        <Fragment>
            <div className={className}>
                {children}       
            </div>       
        </Fragment>
    )
}

Card.propTypes = {
    children: PropTypes.any
};

export default Card;