import readlineSync from 'readline-sync';

import * as index from '../index.js';

const buildStr = (array) => {
  let result = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    result = `${result} ${item}`;
  }
  return result;
};

export const callProgression = () => {
  const name = index.greeting();
  console.log('What number is missing in the progression?');
  let i = 0;

  while (i < index.max) {
    let number1 = Math.floor(Math.random() * 100);
    const difference = Math.floor(Math.random() * 100);
    const result = [number1];
    const indexMissed = Math.floor(Math.random() * 10);
    let j = 0;
    while (j < 9) {
      number1 += difference;
      result.push(number1);
      j += 1;
    }
    const correctAnswer = result[indexMissed];
    result[indexMissed] = '..';
    const resultStr = buildStr(result);
    console.log(`Question:${resultStr}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === `${correctAnswer}`) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
