import { questionsCount, play } from '../index.js';

import getRandomNumber from '../utils.js';

const makeProgression = (number, difference, numbersCount = 9) => {
  const result = [number];
  let number1 = number;
  for (let i = 0; i < numbersCount; i += 1) {
    number1 += difference;
    result.push(number1);
  }
  return result;
};

const callProgression = () => {
  const description = 'What number is missing in the progression?';
  const questionAnswerPairs = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const number = getRandomNumber();
    const difference = getRandomNumber();
    const indexMissed = getRandomNumber(0, 9);
    const result = makeProgression(number, difference);
    const correctAnswer = result[indexMissed];
    result[indexMissed] = '..';
    const question = result.join(' ');
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  console.log(play(description, questionAnswerPairs));
};

export default callProgression;
