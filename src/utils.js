const getRandom = (maxNumber) => {
  const result = Math.floor(Math.random() * maxNumber);
  return result;
};

export default getRandom;
