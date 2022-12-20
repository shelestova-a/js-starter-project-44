import play from '../index.js';

export const count = (number1, number2) => {
  let number1New = number1;
  let number2New = number2;
  let result;
  if (number1 >= number2) {
    while (number2New >= 0) {
      if ((number1 % number2New === 0) && (number2 % number2New === 0)) {
        result = number2New;
        return result;
      }
      number2New -= 1;
    }
  } else if (number1 < number2) {
    while (number1New >= 0) {
      if ((number2 % number1New === 0) && (number1 % number1New === 0)) {
        result = number1New;
        return result;
      }
      number1New -= 1;
    }
  }
  return result;
};

const findGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const question = `${number1} ${number2}`;
    const correctAnswer = count(number1, number2);
    rounds.push([question, correctAnswer.toString()]);
  }
  return play(description, rounds);
};

export default findGcd;
