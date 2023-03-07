const defaultValue = 0.0;
let currentValue = defaultValue;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentValue, calcDescription);
}

function add() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue += userInputValue;
    createAndWriteOutput('+', initialResult, userInputValue);
    logEntries.push(userInputValue);
    console.log(logEntries[1]);
}

function subtract() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue -= userInputValue;
    createAndWriteOutput('-', initialResult, userInputValue);

}

function multiply() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue *= userInputValue;
    createAndWriteOutput('*', initialResult, userInputValue);
}

function divide() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue /= userInputValue;
    createAndWriteOutput('/', initialResult, userInputValue);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
