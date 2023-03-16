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

function calculateResult(calculationType) {
    if(calculationType !== 'ADD' &&
       calculationType !== 'SUBTRACT' &&
       calculationType !== 'MULTIPLY' && 
       calculationType !== 'DIVIDE') {
        return;
    }
       
    const userInputValue = getUserInput();
    const initialResult = currentValue;
    let mathOperator;
    if(calculationType === 'ADD') {
        currentValue += userInputValue;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT') {
        currentValue -= userInputValue;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY') {
        currentValue *= userInputValue;
        mathOperator = '*';
    } else {
        currentValue /= userInputValue;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, userInputValue);
    writeToLog(calculationType, initialResult, userInputValue, currentValue);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
