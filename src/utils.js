const getRandomNumber = (maxNumber = 100, minNumber = 1) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return result;
};

export default getRandomNumber;
