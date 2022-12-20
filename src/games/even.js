import play from '../index.js';

const isEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const question = (Math.floor(Math.random() * 100) + 1);
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    rounds.push([question, correctAnswer]);
  }
  return play(description, rounds);
};

export default isEven;
