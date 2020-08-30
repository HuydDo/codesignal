function firstNotRepeatingCharacter(s) {
  let arr = []
  //26 letters
  for (let i = 0; i < 26; i++)
    arr.push(0)
  
    for(let e of s) {
    //charCodeAt return a number 0-65535
    // we check 1 char at the time so we use charCodeAt(0)
    //the value a-z = 97 - 122
      let c = e.charCodeAt(0) - 97
      
      // arr[e.charCodeAt(0) -97]++
      arr[c]++
      console.log('e: ' + e + ' ; c: ' + c)
      console.log(arr)
      
    }
  for(let e of s) if(arr[e.charCodeAt(0) - 97] == 1) 
    console.log(e)
  
  return "_"
}

let s = "abacabad"
firstNotRepeatingCharacter(s)