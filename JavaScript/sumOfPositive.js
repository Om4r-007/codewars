// inital value = 0
// itreaot through array
// check if positive
// add number to initial value



function positiveSum(arr) {
  let initalValue = 0;
  for (let i =0; i< arr.length ; i++){
    if (arr[i] > 0) {
        initalValue += arr[i]
    }
  }
  return initalValue
}

// 2nd solution

function positiveSum(arr) {
    return arr.filter((x) => x > 0)
    .reduce((acc , current) => acc + current , 0)
}