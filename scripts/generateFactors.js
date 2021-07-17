let generateFactors = (lowerBound, upperBound) => {
  console.log('generate factors');
  let type = 'Factors';
  let numbersArray = [];
  //Generate a base number between the upper and lower bounds
  let base = Math.floor(
    Math.random() * (upperBound - lowerBound + 1) + lowerBound
  );
  let answer;
  let i = 0;
  while (i < 30) {
    let diceRoll = Math.random();
    //40 percent of the time generate a correct answer
    if (diceRoll < 0.4) {
      do {
        answer = Math.floor(Math.random() * (base + 1));
      } while (base % answer !== 0);
    }
    //Else return an incorrect answer
    else {
      do {
        answer = Math.floor(
          Math.random() * (base - lowerBound + 1) + lowerBound
        );
      } while (base % answer === 0);
    }
    //Check if the answer is factor of the base number
    let isFactor = base % answer === 0;
    //Store the answer in an object and add it to the multiples array
    let numObject = { answer, isCorrect: isFactor };
    numbersArray.push(numObject);
    i++;
  }
  return { type, base, numbersArray };
};

export { generateFactors };
