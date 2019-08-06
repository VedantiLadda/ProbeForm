import React from 'react';
import Input from 'sharedComponents/Input';
import formatString from 'utilities/formatString';

let questionText;
const options = { careerStage: 'AL1', difficulty: 'easy', technology: 'HTML' };
let answer;

const handleQuestionText = e => {
  questionText = e.target.value;
};

const handleTextInput = e => {
  const key = e.target.name;
  options[key] = e.target.value;
};

const handleAnswer = e => {
  answer = e.target.value;
};

export function sendQuestionInfo() {
  return { questionText, options, answer };
}

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
      <textarea required="" placeholder="Question" onChange={handleQuestionText} />
      <Input type="text" name="op1" placeholder="Option 1" onchange={handleTextInput} />
      <Input type="text" name="op2" placeholder="Option 2" onchange={handleTextInput} />
      <Input type="text" name="op3" placeholder="Option 3" onchange={handleTextInput} />
      <Input type="text" name="op4" placeholder="Option 4" onchange={handleTextInput} />
      <Input type="text" name="op5" placeholder="Option 5" onchange={handleTextInput} />
      <Input
        type="number"
        placeholder="Option number of correct answer"
        min="1"
        max="5"
        onchange={handleAnswer}
      />
      <select name="careerStage" onChange={handleTextInput}>
        {designations}
      </select>
      <select name="difficulty" onChange={handleTextInput}>
        {difficulty}
      </select>
      <select name="technology" onChange={handleTextInput}>
        {techs}
      </select>
      <br />
    </>
  );
};

export default AddQuestion;
