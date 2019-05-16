import React, {Fragment} from "react";
import './main.css';

const Button=(props)=>{
    const {children,className} = props;
    return(
        <Fragment>
            <button className={className}>
                {children}       
            </button>       
        </Fragment>
    )
}

export default Button;