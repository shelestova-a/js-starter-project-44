import readlineSync from 'readline-sync';

import greeting from './cli.js';

const play = (description, questionAnswerPairs) => {
  const name = greeting();
  console.log(`${description}`);
  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    console.log(`Question: ${questionAnswerPairs[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = questionAnswerPairs[i][1];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default play;
