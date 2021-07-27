import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/game-board.css');

const score = (() => {

  // initializes variables

  let scoreNumber = 0;
  let displayScore;

  const changeScore = (change) => {

    // determines new score

    scoreNumber = scoreNumber + change;

    const header =  document.getElementById('gameboard-header');

    // if score is displayed, remove old score

    if (typeof displayScore === 'object') {
      header.removeChild(displayScore);
    }

    // displays current score

    displayScore = document.createElement('h4');
    displayScore.id = 'display-score';
    displayScore.value = scoreNumber;
    displayScore.innerText = 'Score: ' + scoreNumber;
    header.appendChild(displayScore);

  }

  // returns current score for use in game over screen

  const getScore = () => {
    return scoreNumber;
  }
  
  return { changeScore, getScore };

})();

export default score;