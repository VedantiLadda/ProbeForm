import React, {Fragment} from "react";
import './main.css';

const Input=(props)=>{
    const {disabled, children, onchange} = props;
    return(
        <Fragment>
            <input type={props.type} disabled={disabled} onChange={(e)=>(onchange)?onchange.bind(this,e.target.value)():console.log("change not handled")}>
                {children}       
            </input>       
        </Fragment>
    )
}

export default Input;