const startGameBtn = document.getElementById("start-game-btn");

let gameIsRunning = false;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const DEFAULT_USER_CHOISE = ROCK;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOISE} for you!`)
    return DEFAULT_USER_CHOISE;
  }
  return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice) => (cChoice === pChoice) ? 
    RESULT_DRAW : 
    (cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK) ?
    RESULT_PLAYER_WINS : 
    RESULT_COMPUTER_WINS;

// const getWinner = function(cChoice, pChoice) {
//     if(cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if(cChoice === ROCK && pChoice === PAPER ||
//               cChoice === PAPER && pChoice === SCISSORS ||
//               cChoice === SCISSORS && pChoice === ROCK) {
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMPUTER_WINS;
//     }
// }

// anonymous function
// const start = function() {
//     console.log('Game is starting...', age);
// }

// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }
// console.dir(startGame);
// person.greet();

startGameBtn.addEventListener('click', function () {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
