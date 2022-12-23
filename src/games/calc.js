import play from '../index.js';

import getRandom from '../utils.js';

const operators = ['+', '-', '*'];

const count = (operator, number1, number2) => {
  switch (operator) {
  case '+':
    return number1 + number2;
  case '-':
    return number1 - number2;
  case '*':
    return number1 * number2;
  default:
    return null;
  }
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  const questionAnswerPairs = [];
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number1 = getRandom(100);
    const number2 = getRandom(100);
    const operator = operators[getRandom(operators.length)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = count(operator, number1, number2);
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  return play(description, questionAnswerPairs);
};

export default runCalc;
