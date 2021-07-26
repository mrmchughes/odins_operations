import { gameController } from './gameController.js';

const nextLevel = (() => {

  // refreshes a new grid level of the same type

  const goToNextLevel = (answerObject) => {

    const practiceArea = answerObject.type;
    const level = 'intermediate';

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