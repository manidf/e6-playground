
// foreach takes the first element in the array and passes it to the iterator function.
// the iterator function is the function we passed into the foreach
console.group('foreach');

const color = [
    'red',
    'blue',
    'green'
];

color.forEach(function(color) {
    console.log(color);
});
console.groupEnd();

// create an array of numbers
// create a variable to hold them
// loop over the array, increment the sum variable
// print the sum variable
console.group('numbers');
let numbers = [1,2,3,4,5,6,7,8,9,10,11];
let sum = 0;

function adder(numbers) {
    sum += numbers;
}

numbers.forEach(adder);

/* 
 * with an anonymous function  

numbers.forEach(function(number) {
    sum += number;
});

*/

sum;

console.log(sum);
console.groupEnd();

export default {};