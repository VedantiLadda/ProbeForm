import React, {Fragment} from "react";
import './LoginCard.css';
import '../../../main.css';
import Card from '../../../sharedComponents/Card';
import Button from '../../../sharedComponents/Button';
import Label from '../../../sharedComponents/Label';
import Input from '../../../sharedComponents/Input';

const LoginCard=()=>{
    return(
        <Fragment>
            <form action="/v1/apis/login" method="post">
                <div className="row">
                    <div className="col s12 offset-m6 m6" data-component="Login">
                        <Card className="card">
                            <div className="card-action">
                                <h3>Probe Form</h3>
                            </div>
                            <div className="card-content">
                                <div>
                                    <Label>Username</Label>
                                    <Input type="text"/>
                                </div><br/>
                                <div>
                                    <Label>Password</Label>
                                    <Input type="password"/>
                                </div><br />
                                <div>
                                    <Button className="btn-large">Login</Button>
                                </div><br />
                                <div className="errorMessage"></div>
                            </div>
                        </Card>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default LoginCard;