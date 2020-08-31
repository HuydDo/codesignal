//Given the values of a, b, and c, your task is to calculate and return your total score.



function diceTotalScore(a, b, c) {
  if (a === b && b === c) {
      return 1000 * a
  } else if (a === b || b === c) {
      return 500 * b
  } else if (a === c) {
      return 500 * a
  } else {
      let minscore = Math.min(a, b)
      console.log(minscore)
      return Math.min(minscore, c) * 100
  };
};

//tests:
console.log(diceTotalScore(5, 5, 5))
console.log(diceTotalScore(3, 6, 3))
console.log(diceTotalScore(2, 6, 1))
