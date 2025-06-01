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

// Challenge 3: Perimeter of a Rectangle
function perimeterOfRectangle (length: number, width: number) {
    return 2 * (length + width);
}
let perimeter1: number = perimeterOfRectangle(6, 7); // 26
let perimeter2: number = perimeterOfRectangle(20, 10); // 60
console.log(perimeter1);
console.log(perimeter2);

// Challenge 4: Check Negative
function isNegative (num: number) {
    return num < 0;
}
let checkNegative1: boolean = isNegative(-23); // true
let checkNegative2: boolean = isNegative(55); // false
console.log(checkNegative1);
console.log(checkNegative2);

// Challenge 5: Can I Drive
function qualifyToDrive (name: string, age: number) {
    if (age >= 18) {
        return `${name} is old enough to drive.`;
    } else {
        return `${name} is not old enough to drive yet.`;
    }
}
let qualify: string = qualifyToDrive("Jane", 22);
console.log(qualify);
let qualify1: string = qualifyToDrive("June", 12);
console.log(qualify1);

// Challenge 6: Finding Largest Number
function findLargest(a: any, b: any, c: any) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let largest1: number = findLargest(5, 9, 3); // 9
console.log(largest1);
let largest2: number = findLargest(10, 10, 10); // 10
console.log(largest2);
let largest3: number = findLargest(-1, -5, -3); // -1
console.log(largest3);

// Challenge 7: BMI Calculator
function calculateBMI(weight: number, height: number) {
    let bmi: number = weight / (height * height);
    let result: string;

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
    return `Your BMI is ${bmi} - ${result}`;
}

let bmi1: string = calculateBMI(68, 1.75); //Your BMI is 22.2 - Normal weight
console.log(bmi1);
let bmi2: string = calculateBMI(85, 1.8); //Your BMI is 26.2 - Overweight
console.log(bmi2);