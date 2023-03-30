const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// step 1
if(randomNumber > 0.7) {
    alert(`Random number was greater than 0.7, the value is ${randomNumber}`);
}

// step 2 and step 3
const numbers = [1, 2, 3, 4, 5, 6];

console.log("REGULAR FOR LOOP");
for(let i = numbers.length; i >= 0; i--){
    console.log(numbers[i]);
}

console.log("FOR-OF LOOP");
for(const el of numbers) {
    console.log(el);
}

// step 4
const anotherRandomNumber = Math.random();
if((randomNumber > 0.7 && anotherRandomNumber > 0.7) || ((randomNumber <= 0.2) || (anotherRandomNumber <= 0.2))) {
    alert('both are greater than 0.7 or at least one variable is less than or equal to 0.2');
}