const generateFactors = (maxMultiplier) => {

  // initiates variables

  let type = 'Factors';
  let answer;
  let isFactor;
  let numbersArray = [];

  // determines base factor

  const multiplier = Math.floor(Math.random() * (maxMultiplier - 1)) + 2;
  const multicand = Math.floor(Math.random() * maxMultiplier) + 1;
  const base = multiplier * multicand;

  // generates 30 random numbers to populate grid

  for (let i = 1; i <= 30; i++) {

    // resets variables

    let randomNumber = '';
    answer = '';

    // generates random number for approximately 40% chance of correct selection

    randomNumber = Math.random();

    if (randomNumber < .40) {

      // tries random answers until correct factor is returned

      for (let j = 0; j < 1; j++) {
        let correctAnswer = Math.floor(Math.random() * base) + 1;
        if ((base % correctAnswer) === 0) {
          answer = correctAnswer;
          isFactor = true;
        } else {
          j--;
        }
      }

    } else {

      // tries random answers until incorrect answer is returned

      for (let k = 0; k < 1; k++) {
        let wrongAnswer = Math.floor(Math.random() * base) + 1;
        if ((base % wrongAnswer) === 0) {
          k--;
        } else {
          answer = wrongAnswer;
          isFactor = false;
        }
      }
    }

    // Stores the answer in an object and add it to the multiples array

    const numObject = { answer, isCorrect: isFactor, selected: false };
    numbersArray.push(numObject);
  }

  return { type, base, numbersArray };
};

export { generateFactors };
