import { gameController } from './gameController.js';
import character from './character.js';
import score from './score.js';

const nextLevel = (() => {

  // refreshes a new grid level of the same type

  const goToNextLevel = (answerObject) => {

    // sets difficulty and practice area to the same as previously selected;

    const practiceArea = answerObject.type;
    let level = answerObject.difficulty.name;

    // clears header and board
 
    const header = document.getElementById('gameboard-header');
    document.body.removeChild(header);
    const board = document.getElementById('game-board');
    document.body.removeChild(board);

    character.unmountEnemy();

    // increases difficulty of game based on score

    let currentScore = score.getScore();

    if (currentScore > 2000) {
      level = 'fast';
    } else if (currentScore > 1000) {
      level = 'hard';
    } else if (currentScore > 500) {
      if (level === 'easy') {
        level = 'intermediate';
      } 
    }

    // draws new board

    gameController.startPlay(practiceArea, level);

  }

  const checkComplete = (answerObject) => {

    let gameComplete = true;

    // if all correct answers are selected, refreshes to a new grid
    
    for (let i = 0; i < 30; i++) {
      let unselectedAnswer = 
        (answerObject.numbersArray[i].isCorrect) && 
        (!answerObject.numbersArray[i].selected);
      if (unselectedAnswer) {
        gameComplete = false;
      }
    }   
    if (gameComplete) {
      goToNextLevel(answerObject)
    }
  }

  return { checkComplete };
})();

export default nextLevel;