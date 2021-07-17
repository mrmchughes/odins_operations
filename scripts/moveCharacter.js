const moveCharacter = (() => {

  const moveResponse = (position, answerObject) => {
    console.log('move character ' + position);
    console.log(answerObject);
  }

  return { moveResponse };

})();

export default moveCharacter;