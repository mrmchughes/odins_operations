import score from './score.js';
import highScore from './highScore.js';
import { startMenu } from './startMenu.js';
import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/end-page.css');

const gameOver = (() => {

  const endScreen = () => {

    // page clear

    document.body.innerHTML = '';

    // adds Score class for high score list

    class Score {
      constructor(name, points) {
        this.name = name;
        this.points = points;
      }
    }

    // defintes variables

    let highScores = [];
    let savedScores = [];
    const placeHolderUserName = 'Test User';
    const finalScore = score.getScore();

    // const userName = document.getElementById('userNameInput').value;
    //const finalScore = score.js -> scoreNumber.value//
    //const highScore = score.highScore.value?//

    const gameOverInstructions = document.createElement('p');
    gameOverInstructions.style.padding = '10px';
    gameOverInstructions.innerHTML = 'Sorry, but that is a game over. If you would like to play again, please press the reset button. Otherwise, you can close the game.';
    document.body.appendChild(gameOverInstructions);

    const finalScoreDiv = document.createElement('p');
    finalScoreDiv.style.padding = '10px';
    finalScoreDiv.innerHTML = `Congrats, ${placeHolderUserName}, your final score is ${finalScore}.`; //Congrats, ${username}, your final score was ${finalScore.value}.//
    document.body.appendChild(finalScoreDiv);

    // const highScoreDiv = document.createElement('p');
    // highScoreDiv.style.padding ='10px';
    // highScoreDiv.innerHTML = `The current high score is ${finalScore}.`; //The current high score is ${highScore.value}//
    // document.body.appendChild(highScoreDiv);

    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    resetButton.className = 'reset-button';
    document.body.appendChild(resetButton);

    resetButton.addEventListener('click', function(){
        startMenu();
    })

    // tests and retrieves high scores from local storage

    highScore.testLocalStorage(highScores, savedScores);
    addHighScore(highScores);

    // renders list of high scores 
    // TODO: renders list of top 10 high score in order
  
    function renderHighScores(highScores) {
      highScores.forEach((element) => render(element.name, element.points));
    
      function render() {
        const box = document.createElement('box');
        const table = document.createElement('table');
        const row = table.insertRow(0);
        for (let i = 0; i < 2; i++) {
          const cell = document.createElement('td');
          cell.innerHTML = arguments[i];
          row.appendChild(cell);
        }
      table.appendChild(row);
      box.appendChild(table);
      document.body.appendChild(box);
      }
    }

    // adds most recent score to high score list

    function addHighScore(highScores) {

      const name = placeHolderUserName;
      const points = finalScore;

      const newScore = new Score(name, points);
    
      highScores.push(newScore);
      highScores.forEach((element) => (savedScores = element));
      highScore.placeInStorage(highScores);
      renderHighScores(highScores);
    }
  }

  return { endScreen };
  
})();

export default gameOver;