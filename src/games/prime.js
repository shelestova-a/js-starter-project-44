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

const isPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const question = `${number}`;
    const correctAnswer = checkIsPrime(number);
    rounds.push([question, correctAnswer.toString()]);
  }
  return index.play(description, rounds);
};

export default isPrime;
