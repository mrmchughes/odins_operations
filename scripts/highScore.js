const highScore = () => {

  // if user is new on this device, create local storage on this device

  const populateStorage = function (myScore) {
    localStorage.setItem('highScoreList', myScore);
  };
        
  // retrieve local storage stored on device
        
  const retrieveStorage = function (myScore) {
    const highScoreList = JSON.parse(localStorage.getItem('highScoreList'));
    highScoreList.forEach((element) => myScore.push(element));
  };
        
  // add to do list to local storage
    
  const placeInStorage = function (myScore) {
    localStorage.setItem('highScoreList', JSON.stringify(myScore));
  };

  // tests local storage and decides what to do based on those results
  
  const testLocalStorage = (
    myScore,
    highScoreList,
  ) => {
    
    // determine if local storage is available on this device
        
    const storageAvailable = function (type) {
      let storage;
      try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return (
          e instanceof DOMException
          && (e.code === 22
          || e.code === 1014
          || e.name === 'QuotaExceededError'
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          && storage
          && storage.length !== 0
        );
      }  
    };

    if (storageAvailable('localStorage')) {
      if (!localStorage.getItem('mySavedList')) {
        populateStorage(myScore, highScoreList);
      } else {
        retrieveStorage(myScore);
      }
    } else {
      alert('List can not be saved to device.');
    }
  }

  return { placeInStorage, testLocalStorage }
}
  
  export default highScore;