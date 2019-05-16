import React, {Fragment} from "react";
import './LoginCard.css';
import '../../../main.css';
const LoginCard=()=>{
    return(
        <Fragment>
            <form action="/v1/apis/login" method="post">
                <div className="row">
                    <div className="col s12 offset-m6 m6" data-component="Login">
                        <div className="card">
                            <div className="card-action">
                                <h3>Probe Form</h3>
                            </div>
                            <div className="card-content">
                                <div>
                                    <label>Username</label>
                                    <input type="text" />
                                </div><br />
                                <div>
                                    <label>Password</label>
                                    <input type="password" />
                                </div><br />
                                <div>
                                    <button className="btn-large">Login</button>
                                </div><br />
                                <div className="errorMessage"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginCard;