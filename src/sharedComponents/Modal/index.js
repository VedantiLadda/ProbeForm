import React, { Fragment } from "react";
// import './LoginCard.css';
import './main.css';

const newModal = () => {
    return (
        <Fragment>
            <div className="modal" style={{ display: 'block' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        {/* <h5>Add New User</h5> */}
                    </div>
                        {/* <input type="text" placeholder="Sapient ID" id="sapientId" /><input type="text" placeholder="Name" id="newName" /><input type="email" placeholder="Email" id="newEmail" /><input type="text" placeholder="Password" id="newPassword" /><select id="newRole">
                        <option value="super_admin">super_admin</option>
                        <option value="hr">hr</option>
                        <option value="interviewer">interviewer</option>
                    </select><select id="careerStage">
                        <option value="AL1">AL1</option>
                        <option value="AL2">AL2</option>
                        <option value="SAL1">SAL1</option>
                        <option value="SAL2">SAL2</option> */}
                    {/* </select> */}
                    <button className="btn">Submit</button>
                    <div className="errorMessage" />
                </div>
            </div>
        </Fragment>
    )
}

export default newModal;