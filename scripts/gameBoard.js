import character from './character.js';

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
    console.log(answerObj);
    const answerArray = answerObj.numbersArray;
    const base = answerObj.base;

    console.log('draw board');

    //Create a quick heading, move to different file later

    const titleCard = document.createElement('h2');
    titleCard.innerText = 'Factors of ' + base;
    document.body.appendChild(titleCard);

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
    board.appendChild(character.createMuncher());

    // Append the board to the body

    document.body.appendChild(board);
  };

  return { drawBoard };
})();

export { gameBoard };
