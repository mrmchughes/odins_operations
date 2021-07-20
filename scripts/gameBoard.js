import character from './character.js';
import { cssLoader } from './cssLoader.js';

const gameBoard = (() => {
  console.log('game board');

  //Create a grid square element for an answer object
  const gridSquare = (answer) => {
    let squareEl = document.createElement('div');
    squareEl.classList.add('grid-square');
    //Create an element to show the answer and append it to the square
    let answerEl = document.createElement('p');
    answerEl.classList.add('grid-answer');
    answerEl.innerText = answer;
    squareEl.appendChild(answerEl);
    return squareEl;
  };

  // Create a board to hold all the grid squares

  const drawBoard = (answerObj) => {
    console.log('draw board');
    cssLoader.load('./stylesheets/game-board.css');
    const answerArray = answerObj.numbersArray;
    console.log(answerObj);
    let rule;
    if (answerObj.type === 'Multiples' || answerObj.type === 'Factors') {
      const base = answerObj.multiplier;
      rule = answerObj.type + ' of ' + base;
    } else {
      rule = 'Prime numbers';
    }

    const header = document.createElement('div');
    header.id = 'gameboard-header';
    const titleCard = document.createElement('h2');
    titleCard.innerText = rule;
    document.body.appendChild(header);
    header.appendChild(titleCard);

    let board = document.createElement('div');
    board.classList.add('game-board');

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

    // Append the board to the body

    document.body.appendChild(board);
  };

  return { drawBoard };
})();

export { gameBoard };
