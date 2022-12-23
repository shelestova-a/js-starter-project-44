import play from '../index.js';

import getRandom from '../utils.js';

const isEven = (number) => number % 2 === 0;

const runEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];
  const numberOfQuestions = 3;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = (getRandom(100) + 1);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    questionAnswerPairs.push([question, correctAnswer]);
  }
  return play(description, questionAnswerPairs);
};

export default runEven;
