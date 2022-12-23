import play from '../index.js';

import getRandom from '../utils.js';

const isPrime = (number) => {
  if (number === 1 || number === 0) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionAnswerPairs = [];
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = getRandom(100);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  return play(description, questionAnswerPairs);
};

export default runPrime;
