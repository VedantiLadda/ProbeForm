import React, {Fragment} from "react";
import './main.css';

const Input=(props)=>{
    const {disabled, children} = props;
    return(
        <Fragment>
            <input type={props.type} disabled={disabled}>
                {children}       
            </input>       
        </Fragment>
    )
}

export default Input;