//import {score} from './score.js';//

//import {startContainer} from './startMenu.js';//

const gameOver = () => {
    //const username = startMenu.js -> startContainer -> userNameInput.text?//
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
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', function(){
        startMenu();
    })
};