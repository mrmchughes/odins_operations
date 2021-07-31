import gameOver from './game-over.js';

const checkGameOver = (() => {
  
  const displayLives = (livesLost) => {
    let livesRemain = 3 - livesLost;
    let livesHeader = document.getElementById('lives-header');
    livesHeader.innerText = 'Lives remaining: ' + livesRemain;
  }

  const checkLives = (answerObject) => {
    
    let livesLost = 0;
    
    for (let i = 0; i < 30; i++) {
      let wrongAnswer = 
        (!answerObject.numbersArray[i].isCorrect) && 
        (answerObject.numbersArray[i].selected);
      if (wrongAnswer) {
        livesLost = livesLost + 1;
        console.log(livesLost);
        displayLives(livesLost);
      }
      if (livesLost >= 3) {
        gameOver.endScreen();
      }
    }

  }

  return { checkLives, displayLives };
})();

export default checkGameOver;