import * as index from '../index.js';

const runCalc = () => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * 3)];
    const question = `${number1} ${operator} ${number2}`;
    let correctAnswer;
    if (operator === operators[0]) {
      correctAnswer = number1 + number2;
    } else if (operator === operators[1]) {
      correctAnswer = number1 - number2;
    } else if (operator === operators[2]) {
      correctAnswer = number1 * number2;
    }
    rounds.push([question, correctAnswer.toString()]);
  }
  return index.play(description, rounds);
};

export default runCalc;
