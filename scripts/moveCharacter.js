import checkGameOver from './checkGameOver.js';
import nextLevel from './nextLevel.js';
import score from './score.js';

const moveCharacter = (() => {

  let selectedGrid;
  let beenSelected;
  let currentPosition;
  let answerObj;

  const changeSelected = (position, answerObject) => {

    let answerCorrect = answerObject.numbersArray[position].isCorrect;

    // mutates array to indicate that square has been selected previously

    let newNumbersArray = {
      answer: answerObject.numbersArray[position].answer, 
      isCorrect: answerCorrect, 
      selected: true,
    };

    answerObject.numbersArray.splice(position, 1, newNumbersArray);
    console.log(answerObject.type);
    checkGameOver.checkLives(answerObject);
    nextLevel.checkComplete(answerObject);
  }

  const moveResponse = (position, answerObject) => {

    selectedGrid = document.getElementById('grid-' + position);
    beenSelected = answerObject.numbersArray[position].selected;

    // once grid square has been selected, selected property is changed to true 
    // and square can not be selected twice

    if (!beenSelected) {

      // changes grid square color upon selection

      selectedGrid.style.backgroundColor = 'rgb(250, 155, 202)';
      selectedGrid.style.color = 'black';
      answerObj = answerObject;
      currentPosition = position;
    }
  }  

  // changes grid square based on whether correct or incorrect selection is made
  // score will only change if selected is marked as false

  const selectSquare = (difficulty) => {

    let correctAnswer = answerObj.numbersArray[currentPosition].isCorrect;

    if (correctAnswer) {
      if (!beenSelected) { 
        score.changeScore(difficulty.baseScore);
        beenSelected = true;
        selectedGrid.style.backgroundColor = 'hotpink';
        changeSelected(currentPosition, answerObj);

      // TODO: add sound for correct choice
      }
    } else {
      if (!beenSelected) {

        // incorrect answer results in a reduction by half credit

        score.changeScore(-(difficulty.baseScore/2));
        beenSelected = true;
        selectedGrid.style.backgroundColor = 'red';
        changeSelected(currentPosition, answerObj);

        // TODO: add sound for incorrect choice
      }
    }
  }

  // selects correct answer by either pressing space bar or enter key

  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.code === 'Space') {
      selectSquare(answerObj.difficulty);
    }
  });

  // selects correct answer upon double mouseclick

  document.addEventListener('dblclick', function () {
    selectSquare(answerObj.difficulty);
  })

  return { moveResponse };

})();

export default moveCharacter;