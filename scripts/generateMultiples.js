
const generateMultiples = (maxMultiplier) => {

  // initiates variables

  let type = 'Multiples';
  let answer;
  let wrongAnswer;
  let isMultiple;
  let numbersArray = [];

  const multiplier = Math.floor(Math.random() * (maxMultiplier - 1)) + 2;

  // generates 30 random numbers to populate grid

  for (let i = 1; i <= 30; i++) {

    // resets variables

    let randomNumber = '';
    let multiplicand = '';
    answer = '';

    multiplicand = Math.floor(Math.random() * maxMultiplier) + 1;

    // generates random number for approximately 40% chance of correct selection

    randomNumber = Math.random();

    if (randomNumber < .40) {

      // returns correct multiplier

      answer = multiplier * multiplicand;
      isMultiple = true;
    } else {

      // tries random answers until incorrect answer is returned

      for (let j = 0; j < 1; j++) {
        wrongAnswer = (Math.floor(Math.random() * maxMultiplier) + 1) * 
          (Math.floor(Math.random() * multiplier) + 1);

        if (wrongAnswer % multiplier === 0) {
          j--;
        } else {
          answer = wrongAnswer;
          isMultiple = false;
        }
      }
    }

    // Stores the answer in an object and add it to the multiples array

    const numObject = { answer, isCorrect: isMultiple, selected: false };
    numbersArray.push(numObject);
  }

  return { type, multiplier, numbersArray };
};

export { generateMultiples };
