import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';

const gameController = (practiceArea, difficulty) => {

    console.log('game controller');
    console.log(practiceArea);
    const lowerLimit = 2;
    const upperLimit = 25;

  const startMultiples = () => {
    const multiplesObj = generateMultiples(lowerLimit, upperLimit);
    gameBoard.drawBoard(multiplesObj);
  }

  const startFactors = () => {
    console.log('start factors');
    const factorsObj = generateFactors(lowerLimit, upperLimit);
    gameBoard.drawBoard(factorsObj);

  }

    // loads game board for play

  const startPlay = ((practiceArea, difficulty) => {

    console.log('start play');

    document.body.innerHTML = '';

    switch(practiceArea) {

      // TODO: fix switch statements so that 'case' works correctly

      case 'factors':
        startFactors();
        break;
      case 'multiples':
        startMultiples();
        break;
      default:
        startFactors();
    }
             
  })();

}

export { gameController };