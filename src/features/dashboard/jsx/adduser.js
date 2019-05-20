import React, { Fragment } from 'react';

const AddUser = () => (
  <Fragment>
    <input type="text" placeholder="Sapient ID" />
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="text" placeholder="Password" />
    <select>
      <option value="super_admin">super_admin</option>
      <option value="hr">hr</option>
      <option value="interviewer">interviewer</option>
      <option value="Manager">Manager</option>
    </select>
    <select>
      <option value="AL1">AL1</option>
      <option value="AL2">AL2</option>
      <option value="SAL1">SAL1</option>
      <option value="SAL2">SAL2</option>
    </select>
    <button type="button" className="btn">Submit</button>
    <br />
  </Fragment>
);

export default AddUser;
