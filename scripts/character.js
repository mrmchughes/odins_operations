import moveCharacter from './moveCharacter.js';

let character = (() => {

  //Randomly spawn on an interior square of the board

  const spawn = () => {
    let spawnSquares = [7, 8, 9, 10, 13, 16, 19, 20, 21, 22];
    let spawnIndex = Math.floor(Math.random() * spawnSquares.length - 1) + 1;
    let spawnSquare = spawnSquares[spawnIndex];
    return spawnSquare;
  };

  // Keep track of the current index of the character

  let position;
  let answerObject;

  let createMuncher = (answerObj) => {
    position = spawn();
    answerObject = answerObj;
    console.log(position);
    let muncher = document.createElement('div');
    muncher.classList.add('character');
    muncher.style.position = 'absolute';
    muncher.style.left = (position % 6) * 100 + 'px';
    muncher.style.top = Math.floor(position / 6) * 100 + 'px';
    muncher.style.backgroundImage = "url('../images/goldenmuncher_100.gif')";
    return muncher;
  };

  document.addEventListener('keydown', function (e) {
    let key = e.key;
    switch (key) {
      case 'ArrowRight': //Right arrow key
        moveRight();
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowLeft': //Left arrow key
        moveLeft();
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowUp': //Up arrow key
        moveUp();
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowDown': //Down arrow key
        moveDown();
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
    }
  });

  function moveRight() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.left) < 500) {
      position++;
      character.style.left = parseInt(character.style.left) + 100 + 'px';
    }
  }

  function moveLeft() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.left) > 0) {
      position--;
      character.style.left = parseInt(character.style.left) - 100 + 'px';
    }
  }

  function moveUp() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.top) > 0) {
      position = position - 6;
      character.style.top = parseInt(character.style.top) - 100 + 'px';
    }
  }

  function moveDown() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.top) < 400) {
      position = position + 6;
      character.style.top = parseInt(character.style.top) + 100 + 'px';
    }
  }
  return { createMuncher, position, answerObject };
})();

export default character;
