import { gameBoard } from './gameBoard.js';
import { generateMultiples } from './generateMultiples.js';
import { generateFactors } from './generateFactors.js';

const startMenu = () => {


  // loads game board for play

  const startPlay = () => {
        
    const lowerLimit = 2;
    const upperLimit = 25;

    const factorsObj = generateFactors(lowerLimit, upperLimit);
    gameBoard.drawBoard(factorsObj);

  }

  const drawPage = (() => {

    // creates title
    
    const header = document.querySelector('#header');
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'Math Mayhem';
    header.appendChild(titleHeader);

    const instructions = document.createElement('h2');
    instructions.innerText = 'Select Game Options';
    header.appendChild(instructions);

    const container = document.querySelector('#container');

    const nameInputTitle = document.createElement('h3');
    nameInputTitle.innerHTML = 'User Name';
    container.appendChild(nameInputTitle);

    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.className = 'user-name-input';
    userNameInput.style.backgroundColor = 'gray';
    container.appendChild(userNameInput);

    const practiceAreaTitle = document.createElement('h3');
    practiceAreaTitle.innerHTML = 'Practice Area';
    container.appendChild(practiceAreaTitle);

    const practiceContainer = document.createElement('box');
    practiceContainer.className = 'practice-container';
    container.appendChild(practiceContainer);

    const selectMultiples = document.createElement('button');
    selectMultiples.innerHTML = 'Multiples';
    selectMultiples.className = 'practice-area';
    practiceContainer.appendChild(selectMultiples);
    const selectFactors = document.createElement('button');
    selectFactors.innerHTML = 'Factors';
    selectFactors.className = 'practice-area';
    practiceContainer.appendChild(selectFactors);
    const selectPrimes = document.createElement('button');
    selectPrimes.innerHTML = 'Primes';
    selectPrimes.className = 'practice-area';
    practiceContainer.appendChild(selectPrimes);
    const selectInequalities = document.createElement('button');
    selectInequalities.innerHTML = 'Inequalities';
    selectInequalities.className = 'practice-area';
    practiceContainer.appendChild(selectInequalities);
    const selectEqualities = document.createElement('button');
    selectEqualities.innerHTML = 'Equalities';
    selectEqualities.className = 'practice-area';
    practiceContainer.appendChild(selectEqualities);

    const beginGame = document.createElement('button');
    beginGame.innerHTML = 'Begin!';
    beginGame.className = 'begin-button';
    beginGame.id = 'begin';
    container.appendChild(beginGame);

    const beginButton = document.getElementById('begin');
    beginButton.addEventListener('click', startPlay);

  })();

};
  
  export { startMenu };