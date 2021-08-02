
import firebaseConfig from firebaseConfix.js;
import firebase from '../node_modules/firebase/app';
import '../node_modules/firebase/firestore';

const highScore = (() => {

  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true,
  };
  firestore.settings(settings);

  var ref = firebase.database().ref();                           
  ref.on("value", function(snapshot){
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
  });

  // if user is new on this device, create local storage on this device

  const populateStorage = function (savedScores) {
    localStorage.setItem('savedScores', savedScores);
  };
        
  // retrieve local storage stored on device
        
  const retrieveStorage = function (highScores) {
    const savedScores = JSON.parse(localStorage.getItem('savedScores'));
    savedScores.forEach((element) => highScores.push(element));
  };
        
  // add to do list to local storage
    
  const placeInStorage = function (highScores) {
    localStorage.setItem('savedScores', JSON.stringify(highScores));
    database.collection('high-scores').doc(name).set(highScores).then(() => {
      console.log("Document successfully written!");
    });

  };

  // tests local storage and decides what to do based on those results
  
  const testLocalStorage = (
    highScores,
    savedScores,
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
      if (!localStorage.getItem('savedScores')) {
        populateStorage(highScores, savedScores);
      } else {
        retrieveStorage(highScores);
      }
    } else {
      console.log('High scores can not be saved to device.');
    }
  }

  return { placeInStorage, retrieveStorage, testLocalStorage }
})();
  
  export default highScore;