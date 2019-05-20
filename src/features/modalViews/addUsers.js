import React from 'react';
import Input from '../../sharedComponents/Input';

const AddUsers = () => (
  <>
    <Input type="text" placeholder="Sapient ID" />
    <Input type="text" placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <Input type="text" placeholder="Password" />
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
  </>
);

export default AddUsers;
