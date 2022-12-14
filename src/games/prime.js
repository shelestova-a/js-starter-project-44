import readlineSync from 'readline-sync';

import * as index from '../index.js';

export const checkIsPrime = (number) => {
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

export const isPrime = () => {
  const name = index.greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;

  while (i < index.max) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = checkIsPrime(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
