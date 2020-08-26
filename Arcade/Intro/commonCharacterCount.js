function commonCharacterCount(s1, s2) {
  let com = [], c = 0
  for(let i = 0x61; i < 0x7b; i++) {
      let s = String.fromCharCode(i)
      if(s1.includes(s) && s2.includes(s)) com.push(s)
  }
  
  for(let e of com) {
      let a = 0, b = 0
      for(let v of s1) if(v == e) a++
      for(let v of s2) if(v == e) b++
      c += Math.min(a, b)
  }
  
  return c
}
