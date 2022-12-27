import readlineSync from 'readline-sync';

import greeting from './cli.js';

export const questionsCount = 3;

export const play = (description, questionAnswerPairs) => {
  const name = greeting();
  console.log(`${description}`);
  for (let i = 0; i < questionsCount; i += 1) {
    const [question, correctAnswer] = questionAnswerPairs[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

// export default play;
