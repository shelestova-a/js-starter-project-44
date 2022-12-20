import play from '../index.js';

const callProgression = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    let number = Math.floor(Math.random() * 100);
    const difference = Math.floor(Math.random() * 100);
    const result = [number];
    const indexMissed = Math.floor(Math.random() * 10);
    let j = 0;
    while (j < 9) {
      number += difference;
      result.push(number);
      j += 1;
    }
    const correctAnswer = result[indexMissed];
    result[indexMissed] = '..';
    const question = result.join(' ');
    rounds.push([question, correctAnswer.toString()]);
  }
  return play(description, rounds);
};

export default callProgression;
