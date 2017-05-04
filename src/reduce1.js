const arr = [1,2,3,4];

const added = arr.reduce((accumulator, item) => {
    console.log('adding ', accumulator, 'to ', item);
    return accumulator + item;
}, 0);

console.log(added);