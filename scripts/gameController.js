import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';
import { generatePrimes } from './generatePrimes.js';

const gameController = ((practiceArea, difficulty) => {

  const multiplesDifficulty = (difficulty) => {

    let lowerLimit;
    let upperLimit;
    let maxMultiplier;

      switch (difficulty) {
        case 'easy':
          lowerLimit = 2;
          upperLimit = 5;
          maxMultiplier = 5;
          break;
        case 'intermediate':
          lowerLimit = 2;
          upperLimit = 10;
          maxMultiplier = 10;
          break;
        case 'hard':
          lowerLimit = 2;
          upperLimit = 12;
          maxMultiplier = 12;
          break;
        default:
          lowerLimit = 2;
          upperLimit = 5;
          maxMultiplier = 5;
      }
    
    return { lowerLimit, upperLimit, maxMultiplier }
  }

  const factorsDifficulty = (difficulty) => {

    let lowerLimit;
    let upperLimit;

      switch (difficulty) {
        case 'easy':
          lowerLimit = 2;
          upperLimit = 25;
          break;
        case 'intermediate':
          lowerLimit = 2;
          upperLimit = 100;
          break;
        case 'hard':
          lowerLimit = 2;
          upperLimit = 144;
          break;
        default:
          lowerLimit = 2;
          upperLimit = 25;
      }
    
    return { lowerLimit, upperLimit }
  }
  
  const startMultiples = (difficulty) => {
    // const lowerLimit = multiplesDifficulty(difficulty).lowerLimit;
    // const upperLimit = multiplesDifficulty(difficulty).upperLimit;
    const maxMultiplier = multiplesDifficulty(difficulty).maxMultiplier;
    const multiplesObj = generateMultiples(
      maxMultiplier
    );
    console.log(multiplesObj);
    gameBoard.drawBoard(multiplesObj);
  };

  const startFactors = () => {
    const lowerLimit = factorsDifficulty(difficulty).lowerLimit;
    const upperLimit = factorsDifficulty(difficulty).upperLimit;
    const factorsObj = generateFactors(lowerLimit, upperLimit);
    gameBoard.drawBoard(factorsObj);
  };

  const startPrimes = () => {
    const lowerLimit = 1;
    const upperLimit = 20;
    const primesObject = generatePrimes(lowerLimit, upperLimit);
    gameBoard.drawBoard(primesObject);
  };

  // loads game board for play

  const startPlay = (practiceArea, difficulty) => {
    document.body.innerHTML = '';

    switch (practiceArea) {
      case 'factors':
        startFactors(difficulty);
        break;
      case 'multiples':
        startMultiples(difficulty);
        break;
      case 'primes':
        startPrimes(difficulty);
        break;
      default:
        startMultiples(difficulty);
    }
  };

  return { startPlay };

})();

export { gameController };
