import React from 'react';
import Input from '../../sharedComponents/Input';

const CreateRole = () => (
  <>
    <Input type="text" placeholder="Role Name" />
    <div>
      <h5>Select Permissions</h5>
      <label>
        <Input type="checkbox" name="permissions" value="add_users" />
        Add Users
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="review_users" />
        Review Users
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="add_questions" />
        Add Questions
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="review_questions" />
        Review Questions
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="create_role" />
        Create Role
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="skill_matrix" />
        Skill Matrix
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="add_hr" />
        Add Hr
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="add_candidate" />
        Add Candidate
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="review_candidate" />
        Review Candidate
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="create_quiz" />
        Create Quiz
      </label>
      <br />
      <label>
        <Input type="checkbox" name="permissions" value="add_interviewer" />
        Add Interviewer
      </label>
      <br />
    </div>
  </>
);

export default CreateRole;
