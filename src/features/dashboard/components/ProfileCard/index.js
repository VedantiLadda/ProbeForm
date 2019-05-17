import React from 'react';
import './main.css';
import Card from '../../../../sharedComponents/Card';
import Button from '../../../../sharedComponents/Button';
import Label from '../../../../sharedComponents/Label';
import Input from '../../../../sharedComponents/Input';

class ProfileCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true
        }
    }
    render() {
        return (
            <div className="col s12 m4 l3 profile">
                <Card className="card profileCard center">
                    <Label>Name</Label>
                    <Input type="text" disabled={this.state.disabled}/>
                    <Label>Email</Label>
                    <Input type="email" disabled={this.state.disabled}/>
                    <Label>Designation</Label>
                    <Input type="text" disabled={this.state.disabled}/>
                    <Button className="button">Cancel</Button>
                    <Button className="button">Submit</Button>
                    <Button className="button">Change Password</Button>
                    <Button className="button">Edit Profile</Button>
                </Card>
            </div>
        )
    }
}

export default ProfileCard;