import React from 'react';
import Input from 'sharedComponents/Input';
import formatString from 'utilities/formatString';

let currentType = [];
const userDetails = { designation: 'AL1', type: currentType[0] };

const handleTextInput = e => {
  const key = e.target.name;
  userDetails[key] = e.target.value;
};

export function sendUserInfo() {
  return userDetails;
}

const AddUsers = ({ props }) => {
  const { allTypes } = props.dashboard;
  console.log(allTypes);
  currentType = [props.login.type];
  userDetails.type = currentType;
  console.log(currentType);
  let types = [];
  if (currentType == 'super_admin') {
    types = allTypes.map(type => (
      <option key={type} value={type}>
        {formatString(type)}
      </option>
    ));
  } else {
    types = currentType.map(type => (
      <option key={type} value={type}>
        {formatString(type)}
      </option>
    ));
  }

  const designations = ['AL1', 'AL2', 'SAL1', 'SAL2'].map(d => (
    <option key={d} value={d}>
      {d}
    </option>
  ));
  return (
    <>
      <Input type="text" placeholder="Sapient ID" name="sapientId" onchange={handleTextInput} />
      <Input type="text" placeholder="Name" name="name" onchange={handleTextInput} />
      <Input type="email" placeholder="Email" name="email" onchange={handleTextInput} />
      <Input type="text" placeholder="Password" name="password" onchange={handleTextInput} />
      <select name="type" onChange={handleTextInput}>
        {types}
      </select>
      <select name="designation" onChange={handleTextInput}>
        {designations}
      </select>
    </>
  );
};

export default AddUsers;
