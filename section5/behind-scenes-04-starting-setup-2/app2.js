function getName() {
    return prompt('Your name: ', '');
}

function greet() {
    let username = getName();
    console.log('Hello ' + username);
}

greet();