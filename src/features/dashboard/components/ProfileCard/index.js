import React from 'react';
import './main.css';
import Card from '../../../../sharedComponents/Card';
import Button from '../../../../sharedComponents/Button';
import Label from '../../../../sharedComponents/Label';
import Input from '../../../../sharedComponents/Input';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      fields: {
        name: props.login.name,
        email: props.login.email,
        designation: props.login.designation
      }
    };
  }

  editEnable = () => {
    this.setState({
      disabled: false
    });
  };

  editDisable = () => {
    this.setState({
      disabled: true
    });
  };

  editCancel = () => {
    const { login } = this.props;
    const { name, email, designation } = login;
    this.setState({
      fields: { name, email, designation }
    });
    this.editDisable();
  };

  getInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      fields: { ...prevState.fields, [name]: value }
    }));
  };

  profileSubmit = () => {
    const { login } = this.props;
    const { editProfile } = this.props;
    const { fields } = this.state;
    const { sapientId } = login;
    const { name } = fields;
    const { email } = fields;
    const { type } = login;
    const { designation } = fields;
    this.editDisable();
    editProfile(sapientId, name, email, type, designation);
  };

  render() {
    const { fields, disabled } = this.state;
    const { name, email, designation } = fields;
    return (
      <div className="col s12 m4 l3 profile">
        <Card className="card profileCard center">
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            name="name"
            placeholder={name}
            disabled={disabled}
            onchange={this.getInput}
          />
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            name="email"
            placeholder={email}
            disabled={disabled}
            onchange={this.getInput}
          />
          <Label>Designation</Label>
          <Input
            type="text"
            value={designation}
            name="designation"
            placeholder={designation}
            disabled={disabled}
            onchange={this.getInput}
          />
          <Button className="button" display={!disabled} handleClick={this.editCancel}>
            Cancel
          </Button>
          <Button className="button" display={!disabled} handleClick={this.profileSubmit}>
            Submit
          </Button>
          <Button className="button" display={disabled}>
            Change Password
          </Button>
          <Button className="button" display={disabled} handleClick={this.editEnable}>
            Edit Profile
          </Button>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
