// Day 1: Historian Hysteria

// import {fs} from 'fs';

// fs.readFile('columns.txt', 'utf8', function(err, data) {



let number1: number[] = [
   3, 4, 2, 1, 3, 9, 3, 3,
];

let number2: number[] = [
    4, 3, 5, 3, 9, 3, 3, 3,
];

let isEqual: boolean = number1.length == number2.length;

console.log(isEqual);

let sum: number = 0;

function removeNegativeSign(value: number): number {
    return Math.abs(value);
}

console.log("data", 4 - 9)




console.log(number1);
let sortedNUmber1: number[] = number1.sort((a, b) => a - b);

console.log(sortedNUmber1);

let sortedNUmber2: number[] = number2.sort((a, b) => a - b);
console.log(sortedNUmber2);

for (let index = 0; index < sortedNUmber1.length; index++) {

    console.log("index:", index)
    console.log("num1:", sortedNUmber1[index], "num2:", sortedNUmber2[index])
    let diff: number = sortedNUmber1[index] - sortedNUmber2[index];

    console.log("a", removeNegativeSign(diff))

    sum = sum + diff;

    console.log(sum);

}