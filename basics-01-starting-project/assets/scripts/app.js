const defaultValue = 0.0;

let currentValue = defaultValue;

function getUserInput() {
    return parseInt(userInput.value);
}

function add() {
    const userInputValue = getUserInput();
    const calcDescription = `${currentValue} + ${userInputValue}`;
    currentValue = currentValue + userInputValue;
    outputResult(currentValue, calcDescription);
}

addBtn.addEventListener('click', add);
