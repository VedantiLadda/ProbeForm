import React from 'react';
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
        </div>
    )
}

export default ProfileCard;