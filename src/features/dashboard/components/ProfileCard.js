import React, {Fragment} from 'react';
import './main.css';
import Card from '../../../sharedComponents/Card';
import Button from '../../../sharedComponents/Button';
import Label from '../../../sharedComponents/Label';
import Input from '../../../sharedComponents/Input';

const ProfileCard = () => {
    return (
        <div className="col s12 m4 profile">
            <Card className="card profileCard center">
                <Label>Name</Label>
                <Input type="text" disabled/>
                <Label>Email</Label>
                <Input type="email" disabled/>
                <Label>Designation</Label>
                <Input type="text" disabled/>
                <Button className="button">Cancel</Button>
                <Button className="button">Submit</Button>
                <Button className="button">Change Password</Button>
                <Button className="button">Edit Profile</Button>
            </Card>
        </div>
    )
}

export default ProfileCard;