import React, {Fragment} from "react";
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