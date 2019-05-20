import React from 'react';
import Input from '../../sharedComponents/Input';

const AddQuestion = () => (
  <>
    <textarea required="" placeholder="Question" />
    <Input type="text" placeholder="Option 1" />
    <Input type="text" placeholder="Option 2" />
    <Input type="text" placeholder="Option 3" />
    <Input type="text" placeholder="Option 4" />
    <Input type="text" placeholder="Option 5" />
    <Input type="number" placeholder="Option number of correct answer" min="1" max="5" />
    <select>
      <option value="AL1">AL1</option>
      <option value="AL2">AL2</option>
      <option value="SAL1">SAL1</option>
      <option value="SAL2">SAL2</option>
    </select>
    <select>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="difficult">difficult</option>
    </select>
    <select>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="Javascript">Javascript</option>
      <option value="JS Libraries/Frameworks">JS Libraries/Frameworks</option>
      <option value="Mobile Web HTML5 Mark-up and APIs">Mobile Web HTML5 Mark-up and APIs</option>
      <option value="Standards">Standards</option>
      <option value="Debugging and Optimization">Debugging and Optimization</option>
      <option value="Accessibility">Accessibility</option>
    </select>
    <br />
  </>
);

export default AddQuestion;
