import score from './score.js';

const moveCharacter = (() => {

  let answerCorrect = 'true';
  let selectedGrid;

  // TODO: if square is moved through the second time, do not change color 

  const moveResponse = (position, answerObject) => {

    selectedGrid = document.getElementById('grid-' + position);
    answerCorrect = answerObject.numbersArray[position].isCorrect;

    // changes grid square color upon selection

    selectedGrid.style.backgroundColor = 'rgb(250, 155, 202)';
    selectedGrid.style.color = 'black';
  }  

  // changes grid square based on whether correct or incorrect selection is made

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (answerCorrect) {
        selectedGrid.style.backgroundColor = 'hotpink';
        score.changeScore(10);
        // TODO: add sound for correct choice
        } else {
        selectedGrid.style.backgroundColor = 'red';
        score.changeScore(-5);
        // TODO: add sound for incorrect choice
        }
    } else {
        selectedGrid.style.backgroundColor = 'rgb(250, 155, 202)';
    }
  });

  return { moveResponse };

})();

export default moveCharacter;