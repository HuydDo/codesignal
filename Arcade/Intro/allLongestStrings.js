function allLongestStrings(inputArray) {
  let max = inputArray.map( (e) => e.length) //return new array with provided func
      .reduce( (a, c) => c > a ? c : a);  //execute reduce func and return single output value
  return inputArray.filter( (e) => e.length == max);
}



let inputArray = ["aba", "aa", "ad", "vcd", "aba"]
let test = allLongestStrings(inputArray)
console.log(test)