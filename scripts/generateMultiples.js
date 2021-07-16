let generateMultiples = (lowerBound, upperBound, maxMultiplier) => {
  let type = 'Multiples';
  let generateNumber = () => {
    let n = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    return n;
  };

  let generateMultiplier = () => {
    let m = Math.floor(Math.random() * maxMultiplier + 1);
    return m;
  };
  //Variable declaration
  let numbersArray = [];
  let base = 1;
  //Generate a base number between the upper and lower bounds, not equal to 1
  while (base == 1) {
    base = generateNumber();
  }
  //Create Objects and add them to the answers array
  let i = 0;
  while (i < 30) {
    let diceRoll = Math.random();
    //Variable declaration
    let factor;
    let multiplier = base;
    //Store a random multiplier between 1 and the maximum multiplier, not equal to the base
    while (multiplier == base) {
      multiplier = generateMultiplier();
    }
    //40 percent of the time use base number as the factor
    if (diceRoll < 0.4) {
      factor = base;
    }
    //Else keep generating a new random number until the answer is not a multiple of the base number
    else {
      do {
        factor = generateNumber();
      } while ((factor * multiplier) % base === 0);
    }
    //The answer is the factor times the multiplier
    let answer = factor * multiplier;
    //Check if the answer is multiple of the base number
    let isMultiple = (factor * multiplier) % base === 0;
    //Store the answer in an object and add it to the multiples array
    let numObject = { answer, isCorrect: isMultiple };
    numbersArray.push(numObject);
    i++;
  }
  return { type, base, numbersArray };
};

export { generateMultiples };
