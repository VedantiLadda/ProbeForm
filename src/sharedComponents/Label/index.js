import React, {Fragment} from "react";
const Label=(props)=>{
    return(
        <Fragment>
            <label>
                {props.children}       
            </label>       
        </Fragment>
    )
}

export default Label;