import moveCharacter from './moveCharacter.js';

let character = (() => {

  const createAvatar = (userName, marker) => ({ userName, marker });
  const player = createAvatar('Player', "url('../images/goldenmuncher_100.gif')");
  const enemy = createAvatar('Enemy', "url('../images/goldenmuncher_100.gif')");
  let character = player;

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

    let muncher = document.createElement('div');
    muncher.classList.add(character.userName);
    console.log(muncher.classList);
    muncher.style.position = 'absolute';
    muncher.style.left = (position % 6) * 100 + 'px';
    muncher.style.top = Math.floor(position / 6) * 100 + 'px';
    muncher.style.backgroundImage = character.marker;
    console.log(muncher);
    return muncher;
  };

  document.addEventListener('keydown', function (e) {
    let key = e.key;
    let user = character.userName;
    switch (key) {
      case 'ArrowRight': //Right arrow key
        moveRight(user);
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowLeft': //Left arrow key
        moveLeft(user);
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowUp': //Up arrow key
        moveUp(user);
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
      case 'ArrowDown': //Down arrow key
        moveDown(user);
        console.log(position);
        moveCharacter.moveResponse(position, answerObject);
        break;
    }
  });

  function moveRight(user) {
    let character = document.querySelector(`.${user}`);
    if (parseInt(character.style.left) < 500) {
      position++;
      character.style.left = parseInt(character.style.left) + 100 + 'px';
    }
  }

  function moveLeft(user) {
    let character = document.querySelector(`.${user}`);
    if (parseInt(character.style.left) > 0) {
      position--;
      character.style.left = parseInt(character.style.left) - 100 + 'px';
    }
  }

  function moveUp(user) {
    let character = document.querySelector(`.${user}`);
    if (parseInt(character.style.top) > 0) {
      position = position - 6;
      character.style.top = parseInt(character.style.top) - 100 + 'px';
    }
  }

  function moveDown(user) {
    let character = document.querySelector(`.${user}`);
    if (parseInt(character.style.top) < 400) {
      position = position + 6;
      character.style.top = parseInt(character.style.top) + 100 + 'px';
    }
  }
  return { createMuncher, position, answerObject };
})();

export default character;
