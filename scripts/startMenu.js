/* eslint-disable no-unused-vars */
import { gameController } from './gameController.js';
import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/start-menu.css');

const startMenu = (() => {

  let newName = 'Player';
  let startMusic = new Audio('../audio/intro_music.wav');

  // creates header text

  const drawHeader = () => {

    // draws start header

    const header = document.querySelector('#header');
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'Math Mayhem';
    titleHeader.id = 'title-header';
    header.appendChild(titleHeader);

    const instructions = document.createElement('h2');
    instructions.innerText = 'Select Game Options';
    instructions.id = 'instructions';
    header.appendChild(instructions);

    // // creates container with play options

    const container = document.querySelector('#container');

    // creates input for players name

    const nameInputTitle = document.createElement('h3');
    nameInputTitle.innerHTML = 'User Name';
    container.appendChild(nameInputTitle);

    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.className = 'user-name-input';
    userNameInput.style.backgroundColor = '#EDE6F2';
    userNameInput.id = 'userName';
    container.appendChild(userNameInput);

    // creates practice area button container

    const practiceAreaTitle = document.createElement('h3');
    practiceAreaTitle.innerHTML = 'Practice Area';
    practiceAreaTitle.id = 'practice-title';
    container.appendChild(practiceAreaTitle);

    const practiceContainer = document.createElement('box');
    practiceContainer.className = 'practice-container';
    container.appendChild(practiceContainer);

    // defines default options

    let practiceArea = 'multiples';
    let difficulty = 'intermediate';

    // creates buttons to select math area to practice

    const selectMultiples = document.createElement('button');
    selectMultiples.innerHTML = 'Multiples';
    selectMultiples.className = 'practice-area';
    selectMultiples.id = 'multiples';
    selectMultiples.style.backgroundColor = 'hotpink';
    practiceContainer.appendChild(selectMultiples);

    const multiplesButton = document.getElementById('multiples');
    multiplesButton.addEventListener('click', function () {
      selectMultiples.style.backgroundColor = 'hotpink';
      selectFactors.style.backgroundColor = 'whitesmoke';
      selectPrimes.style.backgroundColor = 'whitesmoke';
      practiceArea = 'multiples';
    });

    const selectFactors = document.createElement('button');
    selectFactors.innerHTML = 'Factors';
    selectFactors.className = 'practice-area';
    selectFactors.id = 'factors';
    practiceContainer.appendChild(selectFactors);

    const factorsButton = document.getElementById('factors');
    factorsButton.addEventListener('click', function () {
      selectMultiples.style.backgroundColor = 'whitesmoke';
      selectFactors.style.backgroundColor = 'hotpink';
      selectPrimes.style.backgroundColor = 'whitesmoke';
      practiceArea = 'factors';
    });

    const selectPrimes = document.createElement('button');
    selectPrimes.innerHTML = 'Primes';
    selectPrimes.className = 'practice-area';
    selectPrimes.id = 'primes';
    practiceContainer.appendChild(selectPrimes);

    const primesButton = document.getElementById('primes');
    primesButton.addEventListener('click', function () {
      selectMultiples.style.backgroundColor = 'whitesmoke';
      selectFactors.style.backgroundColor = 'whitesmoke';
      selectPrimes.style.backgroundColor = 'hotpink';
      practiceArea = 'primes';
    });

    // creates difficuly button container

    const difficultyTitle = document.createElement('h3');
    difficultyTitle.innerHTML = 'Difficulty';
    difficultyTitle.id = 'difficulty-title';
    container.appendChild(difficultyTitle);

    const difficultyContainer = document.createElement('box');
    difficultyContainer.className = 'difficulty-container';
    container.appendChild(difficultyContainer);

    // creates buttons to select math area to practice

    const selectEasy = document.createElement('button');
    selectEasy.innerHTML = 'Easy';
    selectEasy.className = 'difficulty';
    selectEasy.id = 'easy';
    difficultyContainer.appendChild(selectEasy);

    const easyButton = document.getElementById('easy');
    easyButton.addEventListener('click', function () {
      selectEasy.style.backgroundColor = 'hotpink';
      selectIntermediate.style.backgroundColor = 'whitesmoke';
      selectHard.style.backgroundColor = 'whitesmoke';
      difficulty = 'easy';
    });

    const selectIntermediate = document.createElement('button');
    selectIntermediate.innerHTML = 'Intermediate';
    selectIntermediate.className = 'difficulty';
    selectIntermediate.id = 'intermediate';
    selectIntermediate.style.backgroundColor = 'hotpink';
    difficultyContainer.appendChild(selectIntermediate);

    const intermediateButton = document.getElementById('intermediate');
    intermediateButton.addEventListener('click', function () {
      selectEasy.style.backgroundColor = 'whitesmoke';
      selectIntermediate.style.backgroundColor = 'hotpink';
      selectHard.style.backgroundColor = 'whitesmoke';
      difficulty = 'intermediate';
    });

    const selectHard = document.createElement('button');
    selectHard.innerHTML = 'Hard';
    selectHard.className = 'difficulty';
    selectHard.id = 'hard';
    difficultyContainer.appendChild(selectHard);

    const hardButton = document.getElementById('hard');
    hardButton.addEventListener('click', function () {
      selectEasy.style.backgroundColor = 'whitesmoke';
      selectIntermediate.style.backgroundColor = 'whitesmoke';
      selectHard.style.backgroundColor = 'hotpink';
      difficulty = 'hard';
    });

    // creates button to enable the game to begin

    const beginContainer = document.createElement('div');
    beginContainer.className = 'begin-container';
    container.appendChild(beginContainer);

    const playInstructions = document.createElement('div');
    playInstructions.className = 'instructions';
    playInstructions.innerHTML = 'Press the arrow keys or click to move through the board. When a number follows the rule on top, select the number by pressing either Enter, Space, or double clicking with your mouse on the square.'
    beginContainer.appendChild(playInstructions);

    const beginGame = document.createElement('button');
    beginGame.innerHTML = 'Begin!';
    beginGame.className = 'begin-button';
    beginGame.id = 'begin';
    beginContainer.appendChild(beginGame);

    const beginButton = document.getElementById('begin');

    beginButton.addEventListener('click', function () {

      // starts looping intro music
      
      startMusic.play();
      startMusic.loop = true;

      newName = document.getElementById('userName').value;
      header.innerHTML = '';
      container.innerHTML = '';
      gameController.startPlay(practiceArea, difficulty);
    });

  }

  const getUserName = (() => {
      return newName;
    })

  return { getUserName, drawHeader, 
    // startContainer 
  };
})();

export default startMenu;
