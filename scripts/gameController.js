import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';
import { generatePrimes } from './generatePrimes.js';
import character from './character.js';

const gameController = (() => {

  const createDifficulty = 
   (name, maxRange, speed, baseScore) => 
   ({ name, maxRange, speed, baseScore });

  const easy = createDifficulty(
    'easy', 
    5, 
    5000,
    10,
  );
  const intermediate = createDifficulty(
    'intermediate', 
    10, 
    3000,
    20,
  );
  const hard = createDifficulty(
    'hard',
    12,
    1000,
    30,
  )

  const startMultiples = (difficulty) => {
    const multiplesObj = generateMultiples(
      difficulty
    );
    gameBoard.drawBoard(multiplesObj);
    character.displayEnemy(difficulty.speed);
  };

  const startFactors = (difficulty) => {
    const factorsObj = generateFactors(difficulty);
    gameBoard.drawBoard(factorsObj);
    character.displayEnemy(difficulty.speed);
  };

  const startPrimes = (difficulty) => {
    const lowerLimit = 1;
    const upperLimit = difficulty.maxRange * (Math.floor(Math.random() * 5) + 1);
    const primesObject = generatePrimes(lowerLimit, upperLimit, difficulty);
    gameBoard.drawBoard(primesObject);
    character.displayEnemy(difficulty.speed);
  };

  // loads game board for play

  const startPlay = (practiceArea, level) => {

    practiceArea = practiceArea.toLowerCase();

    let difficulty;
    switch (level) {
      case 'easy':
        difficulty = easy;
        break;
      case 'intermediate':
        difficulty = intermediate;
        break;
      case 'hard':
        difficulty = hard;
        break;
    }
        
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
