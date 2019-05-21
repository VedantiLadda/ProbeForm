import React, { Fragment } from 'react';
import Input from '../../sharedComponents/Input';
import Label from '../../sharedComponents/Label';
import fomratString from '../../utilities/formatString';

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
        <Input type="checkbox" name="permissions" value={p} />
        {fomratString(p)}
      </Label>
      <br />
    </Fragment>
  ));
  return (
    <>
      <Input type="text" placeholder="Role Name" />
      <div>
        <h5>Select Permissions</h5>
        {permissions}
      </div>
      <br />
    </>
  );
};

export default CreateRole;
