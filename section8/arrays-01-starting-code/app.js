// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5, 2); // []
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const list = document.querySelectorAll('li');
// console.log(list);

// const moreNumbers = Array.from(list);
// console.log(moreNumbers);

// const hobbies = ['sports', 'cooking'];

// const personal = [36, 'Romulo', {moreDetails: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for(const data of analyticsData) {
//     for(const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// const hobbies = ['Cooking', 'Sports'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElement = hobbies.splice(-1, 1);
// console.log(hobbies);
// console.log(removedElement);


// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults.includes(10.99));

// console.log(storedResults, testResults);
// console.log(testResults.lastIndexOf(1.5));

// const personData = [{ name: 'Romulo' }, { name: 'Isabela' }];
// console.log(personData.indexOf({ name: 'Isabela' }));

// const isabela = personData.find((person, idx, persons) => {
//     return person.name === 'Isabela';
// });

// console.log(isabela);
// console.log(isabela, personData);

// isabela.name = 'Anna';
// console.log(isabela, personData);

// const romulosIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Romulo';
// });

// console.log(romulosIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = [];

// // for(const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }
// // console.log(taxAdjustedPrices);

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = [];

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});

console.log(taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if(a > b) {
        return 1;
    } else if(a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(sortedPrices);

console.log(sortedPrices.reverse());


// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6;
// });
// console.log(filteredArray);

const filteredArray = prices.filter(p => p > 6);
console.log(filteredArray);

// let sum = 0;

// for(const price of prices) {
//     sum += price;
// }

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0);

// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);


const data = 'new york;10.99;2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Romulo','Hipolito','Abbiati'];
const name = nameFragments.join(' ');
console.log(name);