const getRandomNumber = (minNumber = 1, maxNumber = 100) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return result;
};

export default getRandomNumber;
