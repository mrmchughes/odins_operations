const moveCharacter = (() => {

  let answerCorrect = 'true';
  let selectedGrid;

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
        // TODO: add sound for correct choice
        } else {
        selectedGrid.style.backgroundColor = 'red';
        // TODO: add sound for incorrect choice
        }
    } else {
        selectedGrid.style.backgroundColor = 'rgb(250, 155, 202)';
    }
  });

  return { moveResponse };

})();

export default moveCharacter;