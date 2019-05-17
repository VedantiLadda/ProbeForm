import React, {Fragment} from "react";
import './main.css';

const Label=(props)=>{
    console.log(props)
    const {children,className} = props
    return(
        <Fragment>
            <label className={className}>
                {children}       
            </label>       
        </Fragment>
    )
}

export default Label;