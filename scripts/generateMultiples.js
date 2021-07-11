let generateMultiples = (lowerBound, upperBound, maxMultiplier) => {
  let multiplesArray = [];
  //Generate a base number between the upper and lower bounds
  let base = Math.floor(
    Math.random() * (upperBound - lowerBound + 1) + lowerBound
  );
  let i = 0;
  while (i < 30) {
    let diceRoll = Math.random();
    let factor;
    //Store a random multiplier between 1 and the maximum multiplier
    let multiplier = Math.floor(Math.random() * maxMultiplier + 1);
    //40 percent of the time use base number
    if (diceRoll < 0.4) {
      factor = base;
    }
    //Else keep generating a new random number until the answer is not a multiple of the base number
    else {
      do {
        factor = Math.floor(
          Math.random() * (upperBound - lowerBound + 1) + lowerBound
        );
      } while ((factor * multiplier) % base === 0);
    }
    //The answer is the factor times the multiplier
    let a = factor * multiplier;
    //Check if the answer is multiple of the base number
    let isMultiple = (factor * multiplier) % base === 0;
    //Store the answer in an object and add it to the multiples array
    let numObject = { answer: a, isCorrect: isMultiple };
    multiplesArray.push(numObject);
    i++;
  }
  return { base, multiplesArray };
};

export { generateMultiples };
