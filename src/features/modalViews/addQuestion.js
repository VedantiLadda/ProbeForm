import React from 'react';
import Input from 'sharedComponents/Input';
import formatString from 'utilities/formatString';

const AddQuestion = () => {
  const designations = ['AL1', 'AL2', 'SAL1', 'SAL2'].map(d => (
    <option key={d} value={d}>
      {d}
    </option>
  ));
  const difficulty = ['easy', 'medium', 'difficult'].map(d => (
    <option key={d} value={d}>
      {formatString(d)}
    </option>
  ));
  const techs = [
    'HTML',
    'CSS',
    'JavaScript',
    'JS Libraries/Frameworks',
    'Mobile Web HTML5 Mark-up and APIs',
    'Standards',
    'Debugging and Optimization',
    'Accessibility'
  ].map(tech => (
    <option key={tech} value={tech}>
      {tech}
    </option>
  ));
  return (
    <>
      <textarea required="" placeholder="Question" />
      <Input type="text" placeholder="Option 1" />
      <Input type="text" placeholder="Option 2" />
      <Input type="text" placeholder="Option 3" />
      <Input type="text" placeholder="Option 4" />
      <Input type="text" placeholder="Option 5" />
      <Input type="number" placeholder="Option number of correct answer" min="1" max="5" />
      <select>{designations}</select>
      <select>{difficulty}</select>
      <select>{techs}</select>
      <br />
    </>
  );
};

export default AddQuestion;
