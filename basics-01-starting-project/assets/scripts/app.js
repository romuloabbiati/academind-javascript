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

function writeToLog(
    operationIdentifier, 
    previousNumber, 
    currentNumber, 
    newResult) {
        logEntry = {
            operation: operationIdentifier,
            previousNumber: previousNumber,
            currentNumber: currentNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
}

function add() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue += userInputValue;
    createAndWriteOutput('+', initialResult, userInputValue);
    writeToLog('ADD', initialResult, userInputValue, currentValue);
}

function subtract() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue -= userInputValue;
    createAndWriteOutput('-', initialResult, userInputValue);
    writeToLog('SUBTRACT', initialResult, userInputValue, currentValue);
}

function multiply() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue *= userInputValue;
    createAndWriteOutput('*', initialResult, userInputValue);
    writeToLog('MULTIPLY', initialResult, userInputValue, currentValue);
}

function divide() {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    currentValue /= userInputValue;
    createAndWriteOutput('/', initialResult, userInputValue);
    writeToLog('DIVIDE', initialResult, userInputValue, currentValue);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
