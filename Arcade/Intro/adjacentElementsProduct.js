function adjacentElementsProduct(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1]
  for(let i = 0; i < inputArray.length - 1; i++){
      let product = inputArray[i] * inputArray[i+1]
      if (product > maxProduct){
          maxProduct = product
      }
  }
  return maxProduct
}

