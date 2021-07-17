let generatePrimes = (lowerBound, upperBound) => {
  let type = 'Primes';
  //Function to check if a number is prime
  const isPrime = (number) => {
    if (number === 1) {
      return false;
    } else {
      let i = number - 1;
      while (i > 1) {
        if (number % i === 0) {
          return false;
        }
        i--;
      }
      return true;
    }
  };
  //Create an array of objects with prime numbers
  let numbersArray = [];
  let answer;
  let i = 0;
  while (i < 30) {
    let diceRoll = Math.random();
    //40 percent of the time generate a prime number
    if (diceRoll < 0.4) {
      do {
        answer = Math.floor(
          Math.random() * (upperBound - lowerBound + 1) + lowerBound
        );
      } while (!isPrime(answer));
      //Else return a non-prime number within the number range
    } else {
      do {
        answer = Math.floor(
          Math.random() * (upperBound - lowerBound + 1) + lowerBound
        );
      } while (isPrime(answer));
    }
    //Check if the answer is prime
    let isCorrect = isPrime(answer);
    //Store the answer in an object
    let numObject = { answer, isCorrect };
    numbersArray.push(numObject);
    i++;
  }
  return { type, numbersArray };
};

export { generatePrimes };
