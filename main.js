import { generateMultiples } from './scripts/generateMultiples.js';
import { generateFactors } from './scripts/generateFactors.js';
import { gameBoard } from './scripts/gameBoard.js';
import character from './scripts/character.js';

//Create a new factors object
let factorsObj = generateFactors(2, 25);

//Create a quick heading, move to different file later
let titleCard = document.createElement('h2');
titleCard.innerText = 'Factors of ' + factorsObj.base;
document.body.appendChild(titleCard);
gameBoard.drawBoard(factorsObj.factorsArray);
let munch = character.createMuncher();
document.querySelector('.game-board').appendChild(munch);
