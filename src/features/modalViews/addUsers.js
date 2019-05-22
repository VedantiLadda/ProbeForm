import React from 'react';
import Input from 'sharedComponents/Input';
import formatString from 'utilities/formatString';

const AddUsers = () => {
  const types = ['super_admin', 'hr', 'interviewer', 'Manager'].map(type => (
    <option key={type} value={type}>
      {formatString(type)}
    </option>
  ));
  const designations = ['AL1', 'AL2', 'SAL1', 'SAL2'].map(d => (
    <option key={d} value={d}>
      {d}
    </option>
  ));
  return (
    <>
      <Input type="text" placeholder="Sapient ID" />
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Password" />
      <select>{types}</select>
      <select>{designations}</select>
    </>
  );
};

export default AddUsers;
