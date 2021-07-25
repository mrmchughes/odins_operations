// import {score} from './score.js';
import {startMenu} from './startMenu.js';
import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/end-page.css');

const gameOver = (() => {

    const endScreen = () => {
      document.body.innerHTML = '';
    
    // const userName = document.getElementById('userNameInput').value;
    //const finalScore = score.js -> scoreNumber.value//
    //const highScore = score.highScore.value?//

    const gameOverInstructions = document.createElement('p');
    gameOverInstructions.innerHTML = 'Sorry, but that is a game over. If you would like to play again, please press the reset button. Otherwise, you can close the game.';
    document.body.appendChild(gameOverInstructions);

    const finalScoreDiv = document.createElement('p');
    finalScoreDiv.innerHTML = '' //Congrats, ${username}, your final score was ${finalScore.value}.//
    document.body.appendChild(finalScoreDiv);

    const highScoreDiv = document.createElement('p');
    highScoreDiv.innerHTML = '' //The current high score is ${highScore.value}//
    document.body.appendChild(highScoreDiv);

    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    resetButton.className = 'reset-button';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', function(){
        startMenu();

    })
  }

  return { endScreen };

})();

export default gameOver;