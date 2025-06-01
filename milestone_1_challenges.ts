// Challenge 1: Return sum of two numbers
function addition (num1: number, num2: number) {
    return num1 + num2;
}
let sum1: number = addition(3, 5);
let sum2: number = addition(-6, 9);
console.log(sum1); // 8
console.log(sum2); // 3

// Challenge 2: Convert Minutes into Seconds
function convert (minutes: number) {
    return minutes * 60;
}
let seconds1: number = convert(5);
let seconds2: number = convert(2);
console.log(seconds1); // 300
console.log(seconds2); // 120