const moveCharacter = (() => {

  const moveResponse = (position, answerObject) => {
    console.log('move character ' + position);
    console.log(answerObject);

    // changes grid square color upon selection

    const selectedGrid = document.getElementById('grid-' + position);
    selectedGrid.style.backgroundColor = 'white';
    selectedGrid.style.color = 'black';
  }

  return { moveResponse };

})();

export default moveCharacter;