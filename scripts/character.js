import moveCharacter from './moveCharacter.js';

const character = (() => {

  //Randomly spawn on an interior square of the board

  const spawn = () => {
    let spawnSquares = [7, 8, 9, 10, 13, 16, 19, 20, 21, 22];
    let spawnIndex = Math.floor(Math.random() * spawnSquares.length - 1) + 1;
    let spawnSquare = spawnSquares[spawnIndex];
    return spawnSquare;
  };

  // establishes avatar class

  const createAvatar = (userName, marker, position) => ({ userName, marker, position });
  let playerPosition = spawn();
  let enemyPosition = spawn();
  const player = createAvatar('Player', "url('../images/goldenmuncher_100.gif')", playerPosition);
  const enemy = createAvatar('Enemy', "url('../images/enemy.gif')", enemyPosition);

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

  const moveUser = (key, character) => {
    switch (key) {
      case 'ArrowRight':
        moveRight(character);
        (character.userName === 'Player') ? moveCharacter.moveResponse(character.position, answerObject): null;
        return character.position;
      case 'ArrowLeft': 
        moveLeft(character);
        (character.userName === 'Player') ? moveCharacter.moveResponse(character.position, answerObject): null;
        return character.position;
      case 'ArrowUp': 
        moveUp(character);
        (character.userName === 'Player') ? moveCharacter.moveResponse(character.position, answerObject): null;
        return character.position;
      case 'ArrowDown':
        moveDown(character);
        (character.userName === 'Player') ? moveCharacter.moveResponse(character.position, answerObject): null;
        return character.position;
    }
  };

  // ends game when enemy attack is successful

  const enemyAttack = (enemyPosition, playerPosition) => {
    if (enemyPosition === playerPosition) {
      // TODO: connect to Game Over page
      console.log ('Game Over');
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

  // moves enemy every 3 seconds

  function displayEnemy() {
    setInterval(function() {
      let key = '';
      let user = enemy;
      key = moveEnemy();
      let enemyPosition = moveUser(key, user);
      let playerPosition = player.position;
      enemyAttack(enemyPosition, playerPosition);
    }, 3000);
  }

  displayEnemy();


  return { createMuncher, createEnemy, answerObject };
})();

export default character;
