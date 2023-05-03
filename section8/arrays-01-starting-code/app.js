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

const hobbies = ['Cooking', 'Sports'];
hobbies.push('Reading');
hobbies.unshift('Coding');
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
hobbies[5] = 'Swimming';
console.log(hobbies);