import React, {Fragment} from "react";
const Button=(props)=>{
    console.log(props.children);
    return(
        <Fragment>
            <button className="btn-large">
                {props.children}       
            </button>       
        </Fragment>
    )
}

export default Button;