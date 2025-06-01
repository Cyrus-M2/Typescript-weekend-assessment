// Challenge 1: Sum of Positive Numbers
function sumOfPositives(numbers: number[]) {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])) //15

// Challenge 2: Find Maximum Value
function findMax(array: number[]){
    let maximum: number = 0;
    for (let i: number = 0; i < array.length; i++ ) {
        if (array[i] > array[maximum]) {
            maximum = i;
        }
    }
    return array[maximum];
}
console.log(findMax([3, 7, 2, 9, 5])) // returns: 9
