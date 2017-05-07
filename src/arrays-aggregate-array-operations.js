console.group('Aggregate Arrays');

const nums = [];

// ES5
for (let i = 0; i < 11; ++i) {
    nums[i] = i+1;    
}

const samenums = nums;
nums[0] = 400;
console.log(samenums[0]);

console.groupEnd();


