const fs = require('fs');

// Read the file
const data = fs.readFileSync('columns.txt', 'utf8');
const lines = data.split('\n');

// Initialize two empty arrays for the columns
const number1 = [];
const number2 = [];

// Iterate through each line and split the columns
lines.forEach(line =>
{
    const [col1, col2] = line.split(/\s+/);
    if (col1 && col2)
    {
        number1.push(parseInt(col1, 10));
        number2.push(parseInt(col2, 10));
    }
});

// Print the arrays
console.log("Number 1:", number1);
console.log("Number 2:", number2);