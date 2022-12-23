import play from '../index.js';

import getRandom from '../utils.js';

const findGcd = (a, b) => b === 0 ? Math.abs(a) : findGcd(b, a % b);

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionAnswerPairs = [];
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number1 = getRandom(100);
    const number2 = getRandom(100);
    const question = `${number1} ${number2}`;
    const correctAnswer = findGcd(number1, number2);
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  return play(description, questionAnswerPairs);
};

export default runGcd;
