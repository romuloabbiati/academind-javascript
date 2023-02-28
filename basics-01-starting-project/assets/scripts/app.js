const defaultValue = 0.0;

let currentValue = defaultValue;

function add() {
    currentValue = currentValue + userInput.value;
    outputResult(currentValue, '');
}

addBtn.addEventListener('click', add);
