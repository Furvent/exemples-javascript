function solution(a) {
  const storage = {};
  const counter = {char: '', count: 0}
  a.split('').forEach(char => {
    if (storage[char]) storage[char]++
    else storage[char] = 1
  })
  Object.keys(storage).forEach(key => {
    if (counter.count < storage[key]) {
      counter.count = storage[key];
      counter.char = key;
    }
  })

  return counter.count;
}

function solution2(a) {
  // const transformArrayToEval = (array) => {
  //   return array.reduce((acc, curr) => acc + " " + curr, ""
  // )}
  let evalResult = "";
  a.forEach(elem => {
    if (Array.isArray(elem)) {
      evalResult += solution2(elem)
    } else {
      evalResult += " " + elem
    }
  })
  return eval(evalResult);
}

console.log(solution2([12, '+', 42]));