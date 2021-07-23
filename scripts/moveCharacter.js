import score from './score.js';

const moveCharacter = (() => {

  let answerCorrect;
  let selectedGrid;
  let beenSelected;

  const changeSelected = (position, answerObject) => {

    answerCorrect = answerObject.numbersArray[position].isCorrect;

    // mutates array to indicate that square has been selected previously

    let newNumbersArray = {
      answer: answerObject.numbersArray[position].answer, 
      isCorrect: answerCorrect, 
      selected: false,
    };

    answerObject.numbersArray.splice(position, 1, newNumbersArray);
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

      changeSelected(position, answerObject)
    }
  }  

  // changes grid square based on whether correct or incorrect selection is made
  // score will only change if selected is marked as false

  const selectSquare = () => {

    if (answerCorrect) {
      if (!beenSelected) { 
        score.changeScore(10);
        beenSelected = true;
        selectedGrid.style.backgroundColor = 'hotpink';

      // TODO: add sound for correct choice
      }
    } else {
      if (!beenSelected) {
        score.changeScore(-5);
        beenSelected = true;
        selectedGrid.style.backgroundColor = 'red';

        // TODO: add sound for incorrect choice
      }
    }
  }

  // selects correct answer by either pressing space bar or enter key

  document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.code === 'Space') {
      selectSquare();
    }
  });

  // selects correct answer upon double mouseclick

  document.addEventListener('dblclick', function () {
    selectSquare();
  })

  return { moveResponse };

})();

export default moveCharacter;