import play from '../index.js';

import getRandomNumber from '../utils.js';

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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  const questionAnswerPairs = [];
  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = operators[getRandomNumber(operators.length, 0)];
    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = count(operator, number1, number2);
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  console.log(play(description, questionAnswerPairs));
};

export default runCalc;
