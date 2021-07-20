import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';
import { generatePrimes } from './generatePrimes.js';

const gameController = ((practiceArea, difficulty) => {

  const generateDifficulty = (difficulty) => {

    let maxMultiplier;

      switch (difficulty) {
        case 'easy':
          maxMultiplier = 5;
          console.log('easy');
          break;
        case 'intermediate':
          maxMultiplier = 10;
          break;
        case 'hard':
          maxMultiplier = 12;
          break;
        default:
          maxMultiplier = 5;
      }
    
    return maxMultiplier;
  }

  const startMultiples = (difficulty) => {
    const maxMultiplier = generateDifficulty(difficulty);
    const multiplesObj = generateMultiples(
      maxMultiplier
    );
    gameBoard.drawBoard(multiplesObj);
  };

  const startFactors = (difficulty) => {
    const maxMultiplier = generateDifficulty(difficulty);
    const factorsObj = generateFactors(maxMultiplier);
    gameBoard.drawBoard(factorsObj);
  };

  const startPrimes = (difficulty) => {
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
