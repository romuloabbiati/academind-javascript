// ASSIGNEMENT 1
const numbers = [10.99, 4.59, 6.77, 8.21, 3.01, 1.3];

// FILTER
let filteredNumbers = numbers.filter((number, index, numbers) => {
    return number > 5;
});
console.log(filteredNumbers);

// MAP
let mappedNumbers = numbers.map((number, index, numbers) => {
    const numberObject = { num: number };
    return numberObject;
});
console.log(mappedNumbers);

// REDUCE
let reducedNumbers = numbers.reduce((previousValue, currentValue, currentIndex, numbers) => {
    return previousValue * currentValue;
}, 1);
console.log(reducedNumbers);

// // ASSIGNEMENT 2

function findMax1(...numbers) {
    let currentMax = numbers[0];
    for(const number of numbers) {
        if(number > currentMax) {
            currentMax = number;
        }
    }
    return currentMax;
}
console.log('Current max is ' + findMax1(...numbers));

// const findMax = function(numbers) {
//     return Math.max(...numbers);
// };
// console.log(findMax(numbers));

// ASSIGNEMENT 3
function findMax2(...numbers) {
    let currentMax = numbers[0];
    let currentMin = numbers[0];
    for(const number of numbers) {
        if(number > currentMax) {
            currentMax = number;
        }
        if(number < currentMin) {
            currentMin = number;
        }
    }
    return [currentMin, currentMax];
}

const [min, max] = findMax2(...numbers);
console.log(min, max);


// let findMaximum = function(numbers) {
//     let max = Math.max(...numbers);
//     let min = Math.min(...numbers);
//     return [min, max];
// };
// const [min, max] = findMaximum(numbers);
// console.log(min, max);

// function findMaximum(numbers) {
//     return Math.max(...numbers);
// }

// console.log(findMaximum(numbers));

// ASSIGNEMENT 4
const userIds = new Set();
userIds.add(1);
userIds.add(2);
userIds.add(2);
console.log(userIds);