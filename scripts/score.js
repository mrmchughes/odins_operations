import { cssLoader } from './cssLoader.js';

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
    };

    // displays current score

    displayScore = document.createElement('h4');
    console.log(typeof displayScore);
    displayScore.id = 'display-score';
    displayScore.innerText = 'Score: ' + scoreNumber;
    header.appendChild(displayScore);

  }
  
  return { changeScore };

})();

export default score;