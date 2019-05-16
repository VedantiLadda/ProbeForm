import React, {Fragment} from "react";
const Input=(props)=>{
    console.log(props.children);
    return(
        <Fragment>
            <input type={props.type}>
                {props.children}       
            </input>       
        </Fragment>
    )
}

export default Input;