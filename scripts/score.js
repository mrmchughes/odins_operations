import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/game-board.css');

const score = (() => {

  // initializes variables

  let scoreNumber = 0;

  // determines new score

  const changeScore = (change) => {
    scoreNumber = scoreNumber + change;
    let scoreHeader = document.getElementById('score-header');
    scoreHeader.innerText = 'Score: ' + scoreNumber;
  }

  // returns current score for use in game over screen

  const getScore = () => {
    return scoreNumber;
  }

  // resets score at end of game

  const resetScore = () => {
    scoreNumber = 0;
  }
  
  return { changeScore, getScore, resetScore };

})();

export default score;