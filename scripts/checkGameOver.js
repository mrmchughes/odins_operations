import gameOver from './game-over.js';

const checkGameOver = (() => {

  const checkLives = (answerObject) => {
    
    let livesLost = 0;
    
    for (let i = 0; i < 30; i++) {
      let wrongAnswer = 
        (!answerObject.numbersArray[i].isCorrect) && 
        (answerObject.numbersArray[i].selected);
      if (wrongAnswer) {
        livesLost = livesLost + 1;
      }
      if (livesLost >= 3) {
        gameOver.endScreen();
      }
    }

  }

  return { checkLives };
})();

export default checkGameOver;