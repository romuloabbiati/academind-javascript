// task 1
const sayHello = (name) => {
  console.log('Hi ' + name);
}

sayHello('Romulo');

// task 2.1
const sayHi = (hi, name) => {
  console.log(hi, name);
}

sayHi('Hi', 'Romulo');

// task 2.2
const sayHiWithoutArguments = () => {
  console.log('Hi Romulo');
}

sayHiWithoutArguments('Hi', 'Romulo');

// task 2.3
const returnsHi = name => 'Hi ' + name;

console.log(returnsHi('Romulo'));

// task 3
const sayDefaultHello = (name, hi = 'Hello') => {
  console.log(hi, name);
}

sayDefaultHello('Romulo');

// task 4
const checkInput = (nonEmptyStringHandler, ...strings) => {
  let text = '';
  if(strings.includes(undefined)) {
    for(const string of strings) {
      text += string + ' ';
    }
    nonEmptyStringHandler(text);
  } else {
    console.log('No strings passed!');
  }
}

const showResult = (text) => {
  console.log(text + 'Romulo!');
}

checkInput(showResult);

// Max solution
function checkInput2(cb, ...strings) {
  let hasEmptyText = false;
  for(const text of strings) {
    if(!text) {
      hasEmptyText = true;
      break;
    }
    if(!hasEmptyText) {
      cb();
    }
  }
}

checkInput2(() => {
  console.log('All not empty!');
}, 'Hi', 'Romulo', '');

