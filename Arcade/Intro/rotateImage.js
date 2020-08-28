function rotateImage(a) {
  let arr = []
  //create 3x3 empty array
  for(let i = 0; i < a.length;  i++){
    arr.push(new Array(a[0].length))
    // console.log(arr)
  }

  for(let j = 0, k = a.length - 1; j < a[0].length; j++, k--){
    for(let l = 0; l < a.length; l++){
      arr[l][j] = a[k][l]
    }
  }
  console.log(arr)
  return arr

}


let a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

 rotateImage(a)