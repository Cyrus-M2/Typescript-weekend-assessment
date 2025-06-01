// Challenge 1: Return sum of two numbers
function addition(num1, num2) {
    return num1 + num2;
}
var sum1 = addition(3, 5);
var sum2 = addition(-6, 9);
console.log(sum1); // 8
console.log(sum2); // 3
// Challenge 2: Convert Minutes into Seconds
function convert(minutes) {
    return minutes * 60;
}
var seconds1 = convert(5);
var seconds2 = convert(2);
console.log(seconds1); // 300
console.log(seconds2); // 120
// Challenge 3: Perimeter of a Rectangle
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}
var perimeter1 = perimeterOfRectangle(6, 7); // 26
var perimeter2 = perimeterOfRectangle(20, 10); // 60
console.log(perimeter1);
console.log(perimeter2);
