function generateRandomNumberArray(size, min, max) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

module.exports = { generateRandomNumberArray };
