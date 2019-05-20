import React, { Fragment } from 'react';

const CreateRole = () => (
  <Fragment>
    <input type="text" placeholder="Role Name" id="role" />
    <div>
      <h5>Select Permissions</h5>
      <label>
        <input id="add_users" type="checkbox" name="permissions" value="add_users" />
Add Users
      </label>
      <br />
      <label>
        <input id="review_users" type="checkbox" name="permissions" value="review_users" />
Review Users
      </label>
      <br />
      <label>
        <input id="add_questions" type="checkbox" name="permissions" value="add_questions" />
Add Questions
      </label>
      <br />
      <label>
        <input id="review_questions" type="checkbox" name="permissions" value="review_questions" />
Review Questions
      </label>
      <br />
      <label>
        <input id="create_role" type="checkbox" name="permissions" value="create_role" />
Create Role
      </label>
      <br />
      <label>
        <input id="skill_matrix" type="checkbox" name="permissions" value="skill_matrix" />
Skill Matrix
      </label>
      <br />
      <label>
        <input id="add_hr" type="checkbox" name="permissions" value="add_hr" />
Add Hr
      </label>
      <br />
      <label>
        <input id="add_candidate" type="checkbox" name="permissions" value="add_candidate" />
Add Candidate
      </label>
      <br />
      <label>
        <input id="review_candidate" type="checkbox" name="permissions" value="review_candidate" />
Review
					Candidate
      </label>
      <br />
      <label>
        <input type="checkbox" name="permissions" value="create_quiz" />
Create Quiz
      </label>
      <br />
      <label>
        <input id="add_interviewer" type="checkbox" name="permissions" value="add_interviewer" />
Add Interviewer
      </label>
      <br />
    </div>
    <button className="btn" type="button" style="margin-top: 20px;">Submit</button>
    <br />
  </Fragment>
);

export default CreateRole;
