const startGameBtn = document.getElementById("start-game-btn");

let gameIsRunning = false;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
    return;
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

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    (cChoice === pChoice) ? 
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

startGameBtn.addEventListener('click', () => {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, so you `;
  if(winner === RESULT_DRAW) {
    message = message + 'had a draw!';
  } else if(winner === RESULT_PLAYER_WINS) {
    message = message + 'won!';
  } else {
    message = message + 'lost!';
  }
  alert(message);
  gameIsRunning = false;
});


// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;

  for(const num of numbers) {
    if(operation === 'SUM') {
      sum += validateNumber(num);
    } else if(operation === 'SUBTRACT'){
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
}

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

// const subtractUp = function(resultHandler, ...numbers) {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   }
//   let sum = 0;

//   for(const num of numbers) {
//     sum -= validateNumber(num);
//   }
//   resultHandler(sum);
// }

combine(showResult.bind(this, 'The result after adding all numbers is'), 'SUM', 1, 2, 3, 4, 5);
combine(showResult.bind(this, 'The result after adding all numbers is'), 'SUM', -1, 2, 5, 10, -2, 3, 22);
combine(showResult.bind(this, 'The result after subtracting all numbers is'), 'SUBTRACT', 1, 10, 15, 20);
