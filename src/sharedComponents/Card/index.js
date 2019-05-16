import React, {Fragment} from "react";
const Card=(props)=>{
    console.log(props.children);
    return(
        <Fragment>
            <div className="card">
                {props.children}       
            </div>       
        </Fragment>
    )
}

export default Card;