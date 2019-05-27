import React, { Fragment } from 'react';
import Input from 'sharedComponents/Input';
import Label from 'sharedComponents/Label';
import formatString from 'utilities/formatString';

const roleBody = { role: ' ', permissions: [] };

export function sendRoleInfo(allPermissions) {
  let i = 0;
  const newList = [];
  while (i < roleBody.permissions.length) {
    if (allPermissions.includes(roleBody.permissions[i])) {
      newList.push(allPermissions.indexOf(roleBody.permissions[i]) + 1);
    }
    i += 1;
  }
  roleBody.permissions = newList;
  return roleBody;
}

const handleCheck = e => {
  if (e.target.checked) {
    roleBody.permissions.push(e.target.value);
  }
  if (!e.target.checked) {
    roleBody.permissions = roleBody.permissions.filter(permission => permission !== e.target.value);
  }
};

const handleInput = e => {
  roleBody.role = e.target.value;
};

const CreateRole = () => {
  const permissions = [
    'add_users',
    'review_users',
    'add_questions',
    'review_questions',
    'create_role',
    'skill_matrix',
    'add_hr',
    'add_candidate',
    'review_candidate',
    'create_quiz',
    'add_interviewer'
  ].map(p => (
    <Fragment key={p}>
      <Label>
        <Input type="checkbox" name="permissions" value={p} onchange={handleCheck} />
        {formatString(p)}
      </Label>
      <br />
    </Fragment>
  ));
  return (
    <>
      <Input type="text" placeholder="Role Name" onchange={handleInput} />
      <div>
        <h5>Select Permissions</h5>
        {permissions}
      </div>
      <br />
    </>
  );
};

export default CreateRole;
