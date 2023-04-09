const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
}

const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
}

person.greet(); // a function that is stored within an object is called method

startGameBtn.addEventListener('click', startGame); // indirect call