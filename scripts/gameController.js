import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';
import { generatePrimes } from './generatePrimes.js';

const gameController = (practiceArea, difficulty) => {
  const startMultiples = () => {
    const lowerLimit = 4;
    const upperLimit = 5;
    const maxMultiplier = 3;
    const multiplesObj = generateMultiples(
      lowerLimit,
      upperLimit,
      maxMultiplier
    );
    gameBoard.drawBoard(multiplesObj);
  };

  const startFactors = () => {
    const lowerLimit = 2;
    const upperLimit = 25;
    const factorsObj = generateFactors(lowerLimit, upperLimit);
    gameBoard.drawBoard(factorsObj);
  };

  const startPrimes = () => {
    const lowerLimit = 1;
    const upperLimit = 3;
    const primesObject = generatePrimes(lowerLimit, upperLimit);
    gameBoard.drawBoard(primesObject);
  };

  // loads game board for play

  const startPlay = (practiceArea, difficulty) => {
    document.body.innerHTML = '';

    switch (practiceArea) {
      case 'factors':
        startFactors();
        break;
      case 'multiples':
        startMultiples();
        break;
      case 'primes':
        startPrimes();
        break;
      default:
        startMultiples();
    }
  };

  // initiates controller choice

  startPlay(practiceArea);
};

export { gameController };
