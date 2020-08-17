function checkPalindrome(inputString) {
  let str = ""
  for(let i = inputString.length; i >=0; i--) 
      str += inputString.charAt(i)
  return str === inputString
}
