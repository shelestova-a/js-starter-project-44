import readlineSync from 'readline-sync';

import * as index from '../index.js';

const operators = ['+', '-', '*'];

export const count = (operator, number1, number2) => {
  switch (operator) {
    case operators[0]:
      return number1 + number2;
    case operators[1]:
      return number1 - number2;
    case operators[2]:
      return number1 * number2;
    default:
      return null;
  }
};

const calculate = () => {
  const name = index.greeting();
  console.log('What is the result of the expression?');
  let i = 0;

  while (i < index.max) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = count(operator, number1, number2);
    if (answer * 1 === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default calculate;
