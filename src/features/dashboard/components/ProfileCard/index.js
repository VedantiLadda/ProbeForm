import React from 'react';
import './main.css';
import Card from '../../../../sharedComponents/Card';
import Button from '../../../../sharedComponents/Button';
import Label from '../../../../sharedComponents/Label';
import Input from '../../../../sharedComponents/Input';
import {editProfile} from '../../action';
class ProfileCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
            name: "",
            email: "",
            designation: "",
        }
    }
    editEnable = () => {
        this.setState({
            disabled: false,
        })
    }
    editDisable = () => {
        this.setState({
            disabled: true,
        })
    }
    getNewName = (e) => {
        this.setState({name:e});
    }
    getNewEmail = (e) => {
        this.setState({email:e});
    }
    getNewDesignation = (e) =>{
        this.setState({designation:e});
    }

    profileSubmit = () => {
        let sapientId = "145001";
        let name = this.state.name;
        let email = this.state.email;
        let type = "super_admin";
        let designation =this.state.designation;
        this.editDisable();
        editProfile(sapientId,name,email,type,designation);
    }
    render() {
        return (
            <div className="col s12 m4 l3 profile">
                <Card className="card profileCard center">
                    <Label>Name</Label>
                    <Input type="text" disabled={this.state.disabled} onchange = {this.getNewName.bind(this)}/>
                    <Label>Email</Label>
                    <Input type="email" disabled={this.state.disabled} onchange = {this.getNewEmail.bind(this)}/>
                    <Label>Designation</Label>
                    <Input type="text" disabled={this.state.disabled} onchange = {this.getNewDesignation.bind(this)}/>
                    <Button className="button" display={!this.state.disabled} handleClick={this.editDisable.bind(this)}>Cancel</Button>
                    <Button className="button" display={!this.state.disabled} handleClick={this.profileSubmit.bind(this)}>Submit</Button>
                    <Button className="button" display={this.state.disabled}>Change Password</Button>
                    <Button className="button" display={this.state.disabled} handleClick={this.editEnable.bind(this)}>Edit Profile</Button>
                </Card>
            </div>
        )
    }
}

export default ProfileCard;