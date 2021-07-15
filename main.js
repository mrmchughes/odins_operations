import { generateMultiples } from './scripts/generateMultiples.js';
import { generateFactors } from './scripts/generateFactors.js';
import { gameBoard } from './scripts/gameBoard.js';
import character from './scripts/character.js';

//Create a new factors object
let factorsObj = generateFactors(2, 25);

gameBoard.drawBoard(factorsObj.factorsArray);
