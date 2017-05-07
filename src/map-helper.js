
console.group('Map Helper');

const numbers = [1,2,3];
const doubledNumbers = [];

// ES5 
for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] + 2);
}

// ES5
doubledNumbers;
console.log('ES5',doubledNumbers)

// E6
// Return a new array, don't mutate the original array in large applications
const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log('ES6', doubled);

// for each element in the numbers array we pass each number into 
// the iterator function, each value gets doubled and added to the 
// new array.

console.groupEnd();
