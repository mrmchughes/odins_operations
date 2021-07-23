import moveCharacter from './moveCharacter.js';

let character = (() => {

  const createAvatar = (userName, marker) => ({ userName, marker });
  const player = createAvatar('Player', "url('../images/goldenmuncher_100.gif')");
  const enemy = createAvatar('Enemy', "url('../images/enemy.gif')");

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

const placeAvatar = (character) => {

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

  const createMuncher = (answerObj) => {
    position = spawn();
    answerObject = answerObj;
    let character = player;
    const playerAvatar = placeAvatar(character);
    return playerAvatar;
  }

  const createEnemy = () => {
    position = spawn();
    let character = enemy;
    const enemyAvatar = placeAvatar(character);
    return enemyAvatar;
  }

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

  // moves selected avatar

  const moveUser = (key, user) => {
    switch (key) {
      case 'ArrowRight': //Right arrow key
        moveRight(user);
        console.log(position);
        (user === 'Player') ? moveCharacter.moveResponse(position, answerObject): null;
        break;
      case 'ArrowLeft': //Left arrow key
        moveLeft(user);
        console.log(position);
        (user === 'Player') ? moveCharacter.moveResponse(position, answerObject): null;
        break;
      case 'ArrowUp': //Up arrow key
        moveUp(user);
        console.log(position);
        (user === 'Player') ? moveCharacter.moveResponse(position, answerObject): null;
        break;
      case 'ArrowDown': //Down arrow key
        moveDown(user);
        console.log(position);
        (user === 'Player') ? moveCharacter.moveResponse(position, answerObject): null;
        break;
    }
  };

  // moves player avatar upon keystroke

  document.addEventListener('keydown', function (e) {
    let key = e.key;
    let user = character.userName;
    moveUser(key, user);
  });

  const moveEnemy = () => {
    let randomMovement = Math.floor(Math.random() * 4) + 1;
    console.log(randomMovement);
    switch (randomMovement) {
      case 1: //Right arrow key
        return 'ArrowRight';
        break;
      case 2: //Left arrow key
        return 'ArrowLeft';
        break;
      case 3: //Up arrow key
        return 'ArrowUp';
        break;
      case 4:
        return 'ArrowDown';
        break;
    }
  };

  // moves enemy every 3 seconds

  function displayEnemy() {
    setInterval(function() {
      let key = '';
      let user = enemy.userName;
      key = moveEnemy();
      console.log(`move enemy ${key}`);
      moveUser(key, user);
      // TODO: return position number and check that against the position of the player avatar
    }, 3000);
  }

  displayEnemy();


  return { createMuncher, createEnemy, position, answerObject };
})();

export default character;
