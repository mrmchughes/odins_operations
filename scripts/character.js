import gameOver from './game-over.js';
import moveCharacter from './moveCharacter.js';

const character = (() => {

  // Randomly spawn on an interior square of the board

  const spawn = (avatar) => {
    let spawnSquares;
    if (avatar === 'player') {
      spawnSquares = [7, 9, 13, 19, 21];
    } else if (avatar === 'enemy') {
      spawnSquares = [8, 10, 16, 20, 22];
    }
    let spawnIndex = Math.floor(Math.random() * spawnSquares.length - 1) + 1;
    let spawnSquare = spawnSquares[spawnIndex];
    return spawnSquare;
  };

  // establishes avatar class

  const createAvatar = (userName, marker, position) => 
    ({ userName, marker, position });
  let enemyPosition = spawn('enemy');
  let playerPosition = spawn('player');

  const enemy = createAvatar(
    'Enemy', 
    "url('../images/bomb.png')", 
    enemyPosition
  );
  const player = createAvatar(
    'Player', 
    "url('../images/goldenmuncher_100.gif')", 
    playerPosition
  );
  
  // places character on the grid

  const placeAvatar = (character) => {

    let muncher = document.createElement('div');
    muncher.classList.add(character.userName);
    muncher.style.position = 'absolute';
    muncher.style.left = (character.position % 6) * 100 + 'px';
    muncher.style.top = Math.floor(character.position / 6) * 100 + 'px';
    muncher.style.backgroundImage = character.marker;
    return muncher;
  };

  // creates player avatar

  let answerObject;

  const createMuncher = (answerObj) => {
    answerObject = answerObj;
    let character = player;
    const playerAvatar = placeAvatar(character);
    return playerAvatar;
  }

  // creates enemy avatar

  const createEnemy = () => {
    let character = enemy;
    const enemyAvatar = placeAvatar(character);
    return enemyAvatar;
  }

  // moves selected character in designated direction
  
  function moveRight(character) {
    let user = document.querySelector(`.${character.userName}`);
    if (parseInt(user.style.left) < 500) {
      character.position++;
      user.style.left = parseInt(user.style.left) + 100 + 'px';
    }
  }

  function moveLeft(character) {
    let user = document.querySelector(`.${character.userName}`);
    if (parseInt(user.style.left) > 0) {
      character.position--;
      user.style.left = parseInt(user.style.left) - 100 + 'px';
    }
  }

  function moveUp(character) {
    let user = document.querySelector(`.${character.userName}`);
    if (parseInt(user.style.top) > 0) {
      character.position = character.position - 6;
      user.style.top = parseInt(user.style.top) - 100 + 'px';
    }
  }

  function moveDown(character) {
    let user = document.querySelector(`.${character.userName}`);
    if (parseInt(user.style.top) < 400) {
      character.position = character.position + 6;
      user.style.top = parseInt(user.style.top) + 100 + 'px';
    }
  }

  // player avatar movement directs to moveCharacter module 
  // which determines if answer selection is correct

  let movementSound = new Audio('../audio/movement.wav');

  // when player moves change color of the square and make movement sound

  const movement = (characterPosition, answerObject) => {
    moveCharacter.moveResponse(characterPosition, answerObject);
    movementSound.play();
  }

  const moveUser = (key, character) => {
    switch (key) {
      case 'ArrowRight':
        moveRight(character);
        (character.userName === 'Player') ? movement(character.position, answerObject): null;
        return character.position;
      case 'ArrowLeft': 
        moveLeft(character);
        (character.userName === 'Player') ? movement(character.position, answerObject): null;
        return character.position;
      case 'ArrowUp': 
        moveUp(character);
        (character.userName === 'Player') ? movement(character.position, answerObject): null;
        return character.position;
      case 'ArrowDown':
        moveDown(character);
        (character.userName === 'Player') ? movement(character.position, answerObject): null;
        return character.position;
    }
  };

  // ends game when enemy attack is successful
  let enemySound = new Audio ('../audio/enemy_hit.wav');
  const enemyAttack = (enemyPosition, playerPosition) => {
    if (enemyPosition === playerPosition) {
      enemySound.play();
      gameOver.endScreen();
    }
  }

  // moves player avatar upon keystroke

  document.addEventListener('keydown', function (e) {
    let key = e.key;
    let character = player;
    let playerPosition = moveUser(key, character);
    let enemyPosition = enemy.position;
    enemyAttack(enemyPosition, playerPosition);
  });

  // moves player with adjacent square clicked

  // TODO: improve responsiveness of click function but widening grid area

  document.addEventListener('click', function (e) {
    const dataIndex = parseInt(e.target.dataset.index);
    let key;
    let character = player;

    if (player.position + 1 === dataIndex) {
      key = 'ArrowRight';
    } else if (player.position - 1 === dataIndex) {
      key = 'ArrowLeft';
    } else if (player.position - 6 === dataIndex) {
      key = 'ArrowUp';
    } else if (player.position + 6 === dataIndex) {
      key = 'ArrowDown';
    }

    let playerPosition = moveUser(key, character);
    let enemyPosition = enemy.position;
    enemyAttack(enemyPosition, playerPosition);
  })

  const moveEnemy = () => {
    let randomMovement = Math.floor(Math.random() * 4) + 1;
    switch (randomMovement) {
      case 1:
        return 'ArrowRight';
      case 2: 
        return 'ArrowLeft';
      case 3: 
        return 'ArrowUp';
      case 4:
        return 'ArrowDown';
    }
  };

  // moves enemy at a speed determined by the difficulty level

  let move;

  function displayEnemy(speed) {
    move = setInterval(function() {
      let key = '';
      let user = enemy;
      key = moveEnemy();
      let enemyPosition = moveUser(key, user);
      let playerPosition = player.position;
      enemyAttack(enemyPosition, playerPosition);
    }, speed);
  }

  // stops enemy from moving at end of game

  function unmountEnemy () {
    clearInterval(move);
  }

  return { createMuncher, createEnemy, answerObject, displayEnemy, unmountEnemy };
})();

export default character;
