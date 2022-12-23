import readlineSync from 'readline-sync';

import greeting from './cli.js';

const play = (description, questionAnswerPairs) => {
  const name1 = greeting();
  console.log(`${description}`);
  const numberOfQuestions = 3;
  let i = 0;
  while (i < numberOfQuestions) {
    console.log(`Question: ${questionAnswerPairs[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = questionAnswerPairs[i][1];
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name1}!`;
    }
  }
  return `Congratulations, ${name1}!`;
};

export default play;
