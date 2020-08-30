function firstDuplicate(a) {
  for (let i = 0; i < a.length; i++){
    console.log('i: ' + i)
    console.log ('before a[Math.abs(a[i]) - 1]: ' + a[Math.abs(a[i]) - 1])
      if(a[Math.abs(a[i]) - 1] < 0) 
      {
         
         console.log('Math.abs(a[i]):'+Math.abs(a[i]))
          return Math.abs(a[i])
      }
      let j = Math.abs(a[i]) - 1
      console.log('array index: ' + j )
      console.log('after a[Math.abs(a[i])-1]: ' + -a[Math.abs(a[i])-1])
      a[Math.abs(a[i])-1] = -a[Math.abs(a[i]) - 1]
      
  }
  return -1
}

let a = [2, 1, 3, 5, 3, 2]
firstDuplicate(a)