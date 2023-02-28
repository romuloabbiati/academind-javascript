const task3Element = document.getElementById('task-3');

function showsAlert() {
    alert('Hello World!');
}

function showsName(name) {
    alert(name);
}

function showsConcatenatedParameters(sayGood, sayMorning, sayYourName) {
    return sayGood + ' ' + sayMorning + ' ' + sayYourName;
}

showsAlert();

showsName('Romulo');

task3Element.addEventListener('click', showsAlert);

alert(showsConcatenatedParameters('Good', 'Morning', 'Romulo'));