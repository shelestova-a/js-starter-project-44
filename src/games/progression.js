import play from '../index.js';

import getRandom from '../utils.js';

const makeProgression = (number, difference) => {
  const result = [number];
  let number1 = number;
  const totalNumbers = 9;
  for (let i = 0; i < totalNumbers; i += 1) {
    number1 += difference;
    result.push(number1);
  }
  return result;
};

const callProgression = () => {
  const description = 'What number is missing in the progression?';
  const questionAnswerPairs = [];
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = getRandom(100);
    const difference = getRandom(100);
    const indexMissed = getRandom(10);
    const result = makeProgression(number, difference);
    const correctAnswer = result[indexMissed];
    result[indexMissed] = '..';
    const question = result.join(' ');
    questionAnswerPairs.push([question, correctAnswer.toString()]);
  }
  return play(description, questionAnswerPairs);
};

export default callProgression;
