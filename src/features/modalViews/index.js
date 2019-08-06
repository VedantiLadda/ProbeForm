import React from 'react';
import AddUsers from './addUsers';
import AddQuestion from './addQuestion';
import CreateRole from './createRole';

const ModalViews = (permission, props) => {
  switch (permission) {
    case 'add_users':
    case 'add_interviewer':
    case 'add_hr':
      return <AddUsers props={props} />;
    case 'add_questions':
      return <AddQuestion />;
    case 'create_role':
      return <CreateRole />;
    default:
      return null;
  }
};

export default ModalViews;
