import { questionsCount, play } from '../index.js';

import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const runEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    questionAnswerPairs.push([question, correctAnswer]);
  }
  console.log(play(description, questionAnswerPairs));
};

export default runEven;
