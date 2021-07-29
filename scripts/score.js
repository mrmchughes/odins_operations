import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/game-board.css');

const score = (() => {

  // initializes variables

  let scoreNumber = 0;
  let displayScore;
  let scoreHeader;

  const changeScore = (change) => {

    // determines new score

    scoreNumber = scoreNumber + change;

    // if score is displayed, remove old score

    if (typeof displayScore === 'object') {
      scoreHeader.removeChild(displayScore);
    }
 
    if (typeof scoreHeader == 'undefined') {
      scoreHeader =  document.createElement('div');
      scoreHeader.id = 'score-header';
      document.body.appendChild(scoreHeader);
    }

    // displays current score

    displayScore = document.createElement('h4');
    displayScore.id = 'display-score';
    displayScore.value = scoreNumber;
    displayScore.innerText = 'Score: ' + scoreNumber;
    scoreHeader.appendChild(displayScore);

  }

  // returns current score for use in game over screen

  const getScore = () => {
    return scoreNumber;
  }
  
  return { changeScore, getScore };

})();

export default score;