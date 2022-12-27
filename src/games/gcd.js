import { questionsCount, play } from '../index.js';

import getRandomNumber from '../utils.js';

const findGcd = (a, b) => {
  const result = (b === 0 ? Math.abs(a) : findGcd(b, a % b));
  return result;
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionAnswerPairs = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const question = `${number1} ${number2}`;
    const correctAnswer = findGcd(number1, number2);
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  console.log(play(description, questionAnswerPairs));
};

export default runGcd;
