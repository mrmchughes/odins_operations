//when player selects wrong answer//
//display message saying, 'sorry, that is an incorrect answer//
//then reset the page or character?//

//when game over is triggered, display message (alert?) saying 'thanks for playing!'//
//have button appear after message to reset the game when pressed//

const gameOver = () => {
    alert('Sorry, but that is a game over.', 'If you would like to play again, please press the reset button.', 'Otherwise, please close the page.');

    const highScoreDiv = document.createElement('div');
    highScoreDiv.innerHTML = '' //High Score stored here//
    document.body.appendChild(highScoreDiv);

    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', gameBoard())
};


