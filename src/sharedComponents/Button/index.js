import React, {Fragment} from "react";
const Button=(props)=>{
    const {children,className} = props;
    return(
        <Fragment>
            <button className={className}>
                {children}       
            </button>       
        </Fragment>
    )
}

export default Button;