
function isCryptSolution(crypt, solution) {
  for(let i = 0; i < 3; i++) {
      for(let c of solution){
          crypt[i] = crypt[i].replace(new RegExp(c[0], "g"), c[1]);
          console.log('c: ' + c + ' crypt[i]: ' + crypt[i])
      }
  }
  
  for(let s of crypt) if(/^0+\d+/g.test(s)) return false;
  
  return parseInt(crypt[0]) + parseInt(crypt[1]) == parseInt(crypt[2]);
}
let crypt = ["SEND", "MORE", "MONEY"]

let solution = [['O', '0'],
          ['M', '1'],
          ['Y', '2'],
          ['E', '5'],
          ['N', '6'],
          ['D', '7'],
          ['R', '8'],
          ['S', '9']]
          
isCryptSolution(crypt, solution)