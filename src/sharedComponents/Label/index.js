import React, {Fragment} from "react";
const Label=(props)=>{
    console.log(props.children);
    return(
        <Fragment>
            <label>
                {props.children}       
            </label>       
        </Fragment>
    )
}

export default Label;