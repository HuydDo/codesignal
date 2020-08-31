//Given the values of a, b, and c, your task is to calculate and return your total score.


function diceTotalScore(a, b, c){
    if(a === c && b === c && a === b){
        return 100 * (Math.min(a, b, c))
    }
  }


//tests:
console.log(diceTotalScore(5, 5, 5))
console.log(diceTotalScore(3, 6, 3))
console.log(diceTotalScore(2, 6, 1))
