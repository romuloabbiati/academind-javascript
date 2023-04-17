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

function calculate(operation) {
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    let operator;
    if(operation === 'ADD') {
        currentValue += userInputValue;
        operator = '+';
    } else if(operation === 'SUBTRACT') {
        currentValue -= userInputValue;
        operator = '-';
    } else if(operation === 'MULTIPLY') {
        currentValue *= userInputValue;
        operator = '*';
    } else {
        currentValue /= userInputValue;
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, userInputValue);
    writeToLog(operation, initialResult, userInputValue, currentValue);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
