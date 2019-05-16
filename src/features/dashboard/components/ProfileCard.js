import React from 'react';

const ProfileCard = () => {
    return (
        <div className="row">
        <div className="col s12 offset-m6 m6" data-component="Login">
            <div className="card">
                <div className="card-action">
                    <h3>Probe Form</h3>
                </div>
                <div className="card-content">
                    <div>
                        <label>Username</label>
                        <input type="text" id="username"/>
                    </div><br/>
                    <div>
                        <label>Password</label>
                        <input type="password" id="password"/>
                    </div><br/>
                    <div>
                       <button id="login" className="btn-large">Login</button>
                    </div><br/>
                    <div id="errorMessage" className="errorMessage"></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileCard;