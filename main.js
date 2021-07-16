import { startMenu } from './scripts/startMenu.js';
import { generateMultiples } from './scripts/generateMultiples.js';

let lower = 1;
let upper = 4;
let multi = 3;
let multiplesObj = generateMultiples(lower, upper, multi);
console.log(multiplesObj);
startMenu();
