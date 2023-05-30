let person = {
    name: 'Romulo',
    age: 36,
    hobbies: ['Coding', 'Cooking'],
    greet: function() {
        console.log('Hi there!');
    }
};

// person.age = 35;
person.isAdmin = true;

console.log(person);

delete person.age;
// person.age = undefined;
// person.age = null;

console.log(person);