import React, {Fragment, Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allActions from '../../action';
import './main.css';
import '../../../../main.css';
import Card from '../../../../sharedComponents/Card';
import Button from '../../../../sharedComponents/Button';
import Label from '../../../../sharedComponents/Label';
import Input from '../../../../sharedComponents/Input';
// import {handleLogin} from '../../action';
class LoginCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    getUsername = (e) => {
        console.log('user')
        console.log(e);
        this.setState({username:e});
    }
    getPassword = (e) => {
        console.log('pass')
        console.log(e);
        this.setState({password:e});
    }
    test = () => {
        let username = this.state.username;
        let password = this.state.password;
        this.props.handleLogin(username,password);
    }
    render(){
        return(
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
                                        <Input type="text" onchange = {this.getUsername.bind(this)}/>
                                    </div><br/>
                                    <div>
                                        <Label>Password</Label>
                                        <Input type="password" onchange = {this.getPassword.bind(this)}/>
                                    </div><br />
                                    <div>
                                        <Button className="btn-large" display={true} handleClick={this.test.bind(this)}>Login</Button>
                                    </div><br />
                                    <div className="errorMessage"></div>
                                </div>
                            </Card>
                        </div>
                    </div>
            </Fragment>
        )
    }   
}

function mapStateToProps(store){
    return{
        login: store.login
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators(allActions, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);