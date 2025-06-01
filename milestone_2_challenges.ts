// Challenge 1: Sum of Positive Numbers
function sumOfPositives(numbers: any) {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
console.log(sumOfPositives([1, -3, 5, -2, 9, -8])) //15