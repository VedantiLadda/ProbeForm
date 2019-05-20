import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as allActions from '../../action';
import './main.css';
import '../../../../main.css';
import Card from '../../../../sharedComponents/Card';
import Button from '../../../../sharedComponents/Button';
import Label from '../../../../sharedComponents/Label';
import Input from '../../../../sharedComponents/Input';

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: '',
        password: '',
      },
    };
  }

    getInput = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        fields: { ...prevState.fields, [name]: value },
      }));
    }

    test = () => {
      const { fields } = this.state;
      const { username } = fields;
      const { password } = fields;
      const { handleLogin } = this.props;
      handleLogin(username, password);
    }

    render() {
      return (
        <Fragment>
          <div className="row">
            <div className="col s12 offset-m6 m6" data-component="Login">
              <Card className="card">
                <div className="card-action">
                  <h3>Probe Form</h3>
                </div>
                <div className="pad-24">
                  <div>
                    <Label>Username</Label>
                    <Input type="text" name="username" onchange={this.getInput} />
                  </div>
                  <br />
                  <div>
                    <Label>Password</Label>
                    <Input type="password" name="password" onchange={this.getInput} />
                  </div>
                  <br />
                  <div>
                    <Button className="btn-large" display handleClick={this.test}>Login</Button>
                  </div>
                  <br />
                  <div className="errorMessage" />
                </div>
              </Card>
            </div>
          </div>
        </Fragment>
      );
    }
}

LoginCard.propTypes = {
  handleLogin: PropTypes.string.isRequired,
};

function mapStateToProps(store) {
  return {
    login: store.login,
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(allActions, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
