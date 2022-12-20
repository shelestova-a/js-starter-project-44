import * as index from '../index.js';

const buildStr = (array) => {
  let result = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    result = `${result} ${item}`;
  }
  return result;
};

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
    const question = buildStr(result);
    rounds.push([question, correctAnswer.toString()]);
  }
  return index.play(description, rounds);
};

export default callProgression;
