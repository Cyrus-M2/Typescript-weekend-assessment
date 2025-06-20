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
// Challenge 4: Check Negative
function isNegative(num) {
    return num < 0;
}
var checkNegative1 = isNegative(-23); // true
var checkNegative2 = isNegative(55); // false
console.log(checkNegative1);
console.log(checkNegative2);
// Challenge 5: Can I Drive
function qualifyToDrive(name, age) {
    if (age >= 18) {
        return "".concat(name, " is old enough to drive.");
    }
    else {
        return "".concat(name, " is not old enough to drive yet.");
    }
}
var qualify = qualifyToDrive("Jane", 22);
console.log(qualify);
var qualify1 = qualifyToDrive("June", 12);
console.log(qualify1);
// Challenge 6: Finding Largest Number
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b;
    }
    else {
        return c;
    }
}
var largest1 = findLargest(5, 9, 3); // 9
console.log(largest1);
var largest2 = findLargest(10, 10, 10); // 10
console.log(largest2);
var largest3 = findLargest(-1, -5, -3); // -1
console.log(largest3);
// Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
    var bmi = weight / (height * height);
    var result;
    if (bmi < 18.5) {
        result = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        result = "Overweight";
    }
    else {
        result = "Obese";
    }
    return "Your BMI is ".concat(bmi, " - ").concat(result);
}
var bmi1 = calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
console.log(bmi1);
var bmi2 = calculateBMI(85, 1.8); //Your BMI is 26.2 - Overweight
console.log(bmi2);
// Challenge 8: Greeting Based On Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return "Good morning, ".concat(name, "!");
    }
    else if (hour >= 12 && hour <= 17) {
        return "Good Afternoon, ".concat(name, "!");
    }
    else if (hour >= 18 && hour <= 21) {
        return "Good evening, ".concat(name, "!");
    }
    else {
        return "Good night, ".concat(name, "!");
    }
}
console.log(greetUser('Alice', 19));
// Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
    if (number % 15 === 0) {
        return "FizzBuzz";
    }
    if (number % 3 === 0) {
        return "Fizz";
    }
    if (number % 5 === 0) {
        return "Buzz";
    }
    return number.toString();
}
console.log(fizzBuzzCheck(3)); // Fizz
console.log(fizzBuzzCheck(10)); // Buzz
console.log(fizzBuzzCheck(15)); // FizzBuzz
console.log(fizzBuzzCheck(7)); // "7"  
// Challenge 10: Perimeter 2
function calculate_perimeter(shape, value) {
    if (shape === 's') {
        return 4 * value;
    }
    else if (shape === 'c') {
        return 6.28 * value;
    }
    else {
        return 'Try again';
    }
}
console.log(calculate_perimeter("s", 7)); //28
console.log(calculate_perimeter("c", 4)); //25.12
// Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumEvenNumbers(6)); // 12  (2 + 4 + 6)
console.log(sumEvenNumbers(10)); // 30  (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(5)); // 6   (2 + 4)
//  Challenge 12: Multiply by Itself
function powerUp(num, times) {
    var answer = 1;
    for (var l = 0; l < times; l++) {
        answer *= num;
    }
    return answer;
}
console.log(powerUp(2, 3)); // 8  (2 * 2 * 2)
console.log(powerUp(5, 0)); // 1  (anything to the zero power is 1)
console.log(powerUp(3, 4)); // 81 (3 * 3 * 3 * 3)
console.log(powerUp(0, 0)); // 1
// Challenge 13: Factorial Calculator
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        var answer = 1;
        for (var i = 1; i <= n; i++) {
            answer *= i;
        }
        return answer;
    }
}
console.log(factorial(0)); //1
console.log(factorial(4)); // 24  (1 * 2 * 3 * 4)
console.log(factorial(6)); // 720 (1 * 2 * 3 * 4 * 5 * 6)
// Challenge 14: Multiple Sum
function sumMultiples(n, divisor) {
    var sum = 0;
    for (var l = divisor; l <= n; l++) {
        if (l % divisor === 0) {
            sum += l;
        }
    }
    return sum;
}
;
console.log(sumMultiples(10, 2)); // 30  (2 + 4 + 6 + 8 + 10)
console.log(sumMultiples(15, 3)); // 45  (3 + 6 + 9 + 12 + 15)
console.log(sumMultiples(7, 5)); // 5
// Challenge 15: Sum of Digits
function sumDigits(num) {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = (num - (num % 10)) / 10;
    }
    return sum;
}
console.log(sumDigits(123)); // 6   (1 + 2 + 3)
console.log(sumDigits(4567)); // 22  (4 + 5 + 6 + 7)
console.log(sumDigits(0)); // 0
