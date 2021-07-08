const myPromise = new Promise((resolve) => {
  console.log("init promise");
  // Début du code que la promesse doit exécuter quand elle sera appelée
  setTimeout(() => {
    resolve(42);
  }, 1500);
});

function callPromise() {
  myPromise.then((answer) => console.log("The answer is: " + answer));
}

// callPromise();
