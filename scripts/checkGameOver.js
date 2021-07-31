import gameOver from './game-over.js';

const checkGameOver = (() => {

  // displays the number of wrong answers allowed
  
  const displayLives = (livesLost) => {
    let livesHeader = document.getElementById('lives-header');
    livesHeader.innerText = `Wrong answers: ${livesLost}/3`;
  }

  // checks to see if 3 wrong answers have been displayed

  const checkLives = (answerObject) => {
    
    let livesLost = 0;
    
    for (let i = 0; i < 30; i++) {
      let wrongAnswer = 
        (!answerObject.numbersArray[i].isCorrect) && 
        (answerObject.numbersArray[i].selected);
      if (wrongAnswer) {
        livesLost = livesLost + 1;
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