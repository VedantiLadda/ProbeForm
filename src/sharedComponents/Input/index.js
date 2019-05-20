import React, {Fragment} from "react";
import './main.css';

const Input=(props)=>{
    
    return(
        <Fragment>
            <input type={props.type} disabled={disabled} onChange={(e)=>(this.onchange)?onchange.bind(this,e.target.value)():console.log("change not handled")}>
                {children}       
            </input>       
        </Fragment>
    )
}

export default Input;