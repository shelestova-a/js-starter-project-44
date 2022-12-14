import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (answer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default game;
