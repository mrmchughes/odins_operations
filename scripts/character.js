let character = (() => {
  let createMuncher = () => {
    let muncher = document.createElement('div');
    muncher.classList.add('character');
    muncher.style.position = 'absolute';
    muncher.style.left = '0px';
    muncher.style.top = '0px';
    muncher.style.backgroundImage = "url('../images/goldenmuncher_100.gif')";
    return muncher;
  };

  document.addEventListener('keydown', function (e) {
    let key = e.key;
    switch (key) {
      case 'ArrowRight': //Right arrow key
        moveRight();
        break;
      case 'ArrowLeft': //Left arrow key
        moveLeft();
        break;
      case 'ArrowUp': //Up arrow key
        moveUp();
        break;
      case 'ArrowDown': //Down arrow key
        moveDown();
        break;
    }
  });

  function moveRight() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.left) < 500) {
      character.style.left = parseInt(character.style.left) + 100 + 'px';
    }
  }

  function moveLeft() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.left) > 0) {
      character.style.left = parseInt(character.style.left) - 100 + 'px';
    }
  }

  function moveUp() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.top) > 0) {
      character.style.top = parseInt(character.style.top) - 100 + 'px';
    }
  }

  function moveDown() {
    let character = document.querySelector('.character');
    if (parseInt(character.style.top) < 400) {
      character.style.top = parseInt(character.style.top) + 100 + 'px';
    }
  }
  return { createMuncher };
})();
//Comment here
export default character;
