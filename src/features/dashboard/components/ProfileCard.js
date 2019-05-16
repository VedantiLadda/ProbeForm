import React from 'react';
<<<<<<< HEAD
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
=======
import './main.css';

const ProfileCard = () => {
    return (
        <div class="col s12 m4 l3 profile">
            <div id="profile" data-component="Profile" class="card center">
                <label>Name</label>
                <input type="text" placeholder="name" disabled />
                <label>Email</label>
                <input type="email" placeholder="email" disabled />
                <label>Designation</label>
                <input type="text" placeholder="designation" disabled />
                <button class="button">Cancel</button>
                <button class="button">Submit</button>
                <button class="button">Change Password</button>
                <button class="button">Edit Profile</button>
            </div>
>>>>>>> ad371e178a0f4cb22b97a7f3454d6b4a20814d56
        </div>
    )
}

export default ProfileCard;