import score from './score.js';
import highScore from './highScore.js';
import startMenu from './startMenu.js';
import character from './character.js';
import { cssLoader } from './cssLoader.js';
cssLoader.load('./stylesheets/end-page.css');

const gameOver = (() => {

  const endScreen = () => {

    // defintes variables
  
    const userName = startMenu.getUserName();
    const finalScore = score.getScore();

    // page clear and turn off enemy functioning
    
    const gameboardHeader = document.getElementById('gameboard-header');
    const board = document.getElementById('game-board');
    document.body.removeChild(gameboardHeader);
    document.body.removeChild(board);
    character.unmountEnemy();

    const header = document.getElementById('header');
    const container = document.getElementById('container');

    const headerContent = document.createElement('div');
    headerContent.id = 'header-content';

    const gameOverInstructions = document.createElement('p');
    gameOverInstructions.style.padding = '10px';
    gameOverInstructions.innerHTML = 'Sorry, but that is a game over. If you would like to play again, please press the reset button. Otherwise, you can close the game.';
    headerContent.appendChild(gameOverInstructions);

    const finalScoreDiv = document.createElement('p');
    finalScoreDiv.style.padding = '10px';
    finalScoreDiv.innerHTML = `Congrats, ${userName}, your final score is ${finalScore}.`; //Congrats, ${username}, your final score was ${finalScore.value}.//
    headerContent.appendChild(finalScoreDiv);

    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset Game';
    resetButton.className = 'reset-button';
    resetButton.id = 'reset-button';
    headerContent.appendChild(resetButton);

    header.appendChild(headerContent);
    
    // adds Score class for high score list

    class Score {
      constructor(name, points) {
        this.name = name;
        this.points = points;
      }
    }

    let highScores = [];
    let savedScores = [];

    // creates default high score list

    const createHighScoreList = () => {
      for (let i = 0; i < 10; i++) {
        const name = 'Mighty Monster';
        const points = 100 * i;
        const newScore = new Score(name, points);
        highScores.push(newScore);
        }
      highScore.placeInStorage(highScores);
      return highScores;
    }

    // tests and retrieves high scores from local storage

    highScore.testLocalStorage(highScores, savedScores);

    // if there is no high score list in local storage, creates default list

    if (highScores.length === 0) {
      highScores = createHighScoreList();
    }

    addHighScore(highScores);

    // sorts and returns top 10 scores by changing object to array,
    // sorting the array, and then converting it back to an object of 10 results

    function sortScores(highScores) {
      let sortableScores = [];
      for (let i = 0; i < highScores.length; i++) {
        sortableScores.push([highScores[i].name, highScores[i].points]);
      }

      sortableScores.sort(function(a, b) {
        return b[1] - a[1];
      })

      // creates object with top 10 array results

      let sortedScores = [];
      for (let j = 0; j <10; j++) {
        let name = sortableScores[j][0];
        let points = sortableScores[j][1];
        const newScore = new Score(name, points);
        sortedScores.push(newScore);
     }

    return sortedScores;
  }

    // renders list of high scores 

    function renderHighScores(highScores) {
      let scoreBox = document.createElement('div');
      scoreBox.id = 'high-score-box';
      const highScoreTitle = document.createElement('h3');
      highScoreTitle.id = 'high-score-title';
      highScoreTitle.innerHTML = 'HIGH SCORES';
      scoreBox.appendChild(highScoreTitle);

      highScores = sortScores(highScores);
      highScore.placeInStorage(highScores);
      highScores.forEach((element) => render(element.points, element.name));


      function render() {

        const table = document.createElement('table');
        const row = table.insertRow(0);

        for (let i = 0; i < 2; i++) {
          const cell = document.createElement('td');
          cell.innerHTML = arguments[i];
          row.appendChild(cell);
        }

      table.appendChild(row);
      scoreBox.appendChild(table);
      }

      // scoreBox.appendChild(box);

      container.appendChild(scoreBox);
    }

    // adds most recent score to high score list

    function addHighScore(highScores) {

      const name = userName;
      const points = finalScore;

      const newScore = new Score(name, points);
    
      highScores.push(newScore);
      highScores.forEach((element) => (savedScores = element));
      renderHighScores(highScores);
    }

    resetButton.addEventListener('click', function() {
      header.removeChild(headerContent);
      const box = document.getElementById('high-score-box');
      container.removeChild(box);
      startMenu.drawHeader();
      score.resetScore();
    })
  }

  return { endScreen };
  
})();

export default gameOver;