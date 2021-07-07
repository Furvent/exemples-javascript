const numbers = [1, 2, 3, 5, 8, 13, 21, 34];

function callForEachClassic() {
  numbers.forEach(function (number) {
    console.log(number);
  });
}

function callForEachArrow() {
  numbers.forEach((number) => {
    console.log(number);
  });
}

function callForEachNinjaArrow() {
  numbers.forEach((number) => console.log(number));
}

function callMap() {
  numbers
    .map((number) => number * number)
    .forEach((number) => console.log(number));
}

function callFilter() {
  numbers
    .filter((number) => number < 10)
    .forEach((number) => console.log(number));
}

function callReduce() {
  const resultat = numbers.reduce((accumulation, currentNumber) => {
    accumulation += currentNumber;
    return accumulation;
  });
  console.log(resultat);
}

// callFilter();
