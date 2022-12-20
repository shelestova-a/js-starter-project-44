import readlineSync from 'readline-sync';

import greeting from './cli.js';

const play = (description, rounds) => {
  const name1 = greeting();
  console.log(`${description}`);
  let i = 0;
  while (i < 3) {
    console.log(`Question: ${rounds[i][0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = rounds[i][1];
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
