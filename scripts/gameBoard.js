import character from './character.js';
import checkGameOver from './checkGameOver.js';
import { cssLoader } from './cssLoader.js';
import score from './score.js';

const gameBoard = (() => {

  //Create a grid square element for an answer object
  const gridSquare = (answer) => {
    let squareEl = document.createElement('div');
    squareEl.classList.add('grid-square');

    // Create an element to show the answer and append it to the square

    let answerEl = document.createElement('p');
    answerEl.classList.add('grid-answer');
    answerEl.innerText = answer;
    squareEl.appendChild(answerEl);
    return squareEl;
  };

  // Create a board to hold all the grid squares

  const drawBoard = (answerObj) => {
    cssLoader.load('./stylesheets/game-board.css');
    const answerArray = answerObj.numbersArray;
    let rule;
    if (answerObj.type === 'Multiples' || answerObj.type === 'Factors') {
      const base = answerObj.base;
      rule = answerObj.type + ' of ' + base;
    } else {
      rule = 'Prime numbers';
    }
    
    const gameboardHeader = document.createElement('div');
    gameboardHeader.id = 'gameboard-header';
    const titleCard = document.createElement('h2');
    titleCard.id = 'title-card';
    titleCard.innerText = rule;
    document.body.appendChild(gameboardHeader);
    gameboardHeader.appendChild(titleCard);
    document.body.appendChild(gameboardHeader);

    // displays current score

    const scoreHeader =  document.createElement('div');
    scoreHeader.id = 'score-header';
    gameboardHeader.appendChild(scoreHeader);
    score.changeScore(0);

    // displays remaining lives out of 3

    const livesHeader =  document.createElement('div');
    livesHeader.id = 'lives-header';
    gameboardHeader.appendChild(livesHeader);
    checkGameOver.displayLives(0);

    let board = document.createElement('div');
    board.classList.add('game-board');
    board.id = 'game-board';

    // Iterate over the answer array, create a grid square for each answer
    // and append it to the board

    answerArray.forEach((item, index) => {
      let square = gridSquare(item.answer);
      square.dataset.index = index;
      square.id = 'grid-' + index;
      board.appendChild(square);
    });

    //Append the character to the board
    board.appendChild(character.createMuncher(answerObj));
    board.appendChild(character.createEnemy());

    // Append the board to the body

    document.body.appendChild(board);
  };

  return { drawBoard };
})();

export { gameBoard };
