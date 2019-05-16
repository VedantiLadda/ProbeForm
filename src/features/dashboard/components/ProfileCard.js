import React from 'react';
import Card from '../../../sharedComponents/Card';
import Button from '../../../sharedComponents/Button';
import Label from '../../../sharedComponents/Label';
import Input from '../../../sharedComponents/Input';
const ProfileCard = () => {
    return (
        <div className="row">
        <div className="col s12 offset-m6 m6" data-component="Login">
        <Card>
                <div className="card-action">
                    <h3>Probe Form</h3>
                </div>
                <div className="card-content">
                    <div>
                        <Label>Username</Label>
                        <Input type={"text"}/>
                    </div><br/>
                    <div>
                        <Label>Password</Label>
                        <input type="password" />
                    </div><br/>
                    <div>
                       <Button >Login</Button>
                    </div><br/>
                    <div className="errorMessage"></div>
                </div>
            </Card>
        </div>
    </div>
    )
}

export default ProfileCard;