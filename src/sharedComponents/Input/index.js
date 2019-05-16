import React, {Fragment} from "react";
import './main.css';

const Input=(props)=>{
    return(
        <Fragment>
            <input type={props.type}>
                {props.children}       
            </input>       
        </Fragment>
    )
}

export default Input;