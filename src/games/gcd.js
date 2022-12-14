import readlineSync from 'readline-sync';

import * as index from '../index.js';

export const count = (numberOne, numberTwo) => {
  let numberOneNew = numberOne;
  let numberTwoNew = numberTwo;
  let result;
  if (numberOne >= numberTwo) {
    while (numberTwoNew >= 0) {
      if ((numberOne % numberTwoNew === 0) && (numberTwo % numberTwoNew === 0)) {
        result = numberTwoNew;
        return result;
      }
      numberTwoNew -= 1;
    }
  } else if (numberOne < numberTwo) {
    while (numberOneNew >= 0) {
      if ((numberTwo % numberOneNew === 0) && (numberOne % numberOneNew === 0)) {
        result = numberOneNew;
        return result;
      }
      numberOneNew -= 1;
    }
  }
  return result;
};

export const findGcd = () => {
  const name = index.greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < index.max) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberOne} ${numberTwo}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = count(numberOne, numberTwo);
    if (answer * 1 === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
