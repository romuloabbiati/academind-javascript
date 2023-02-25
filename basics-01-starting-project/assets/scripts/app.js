const defaultResult = 0;

let currentResult = defaultResult;

// this string with back ticks and ${} is called template literal
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;


// there are many ways to write text in the form of a string, using single quotes ', double quotes " and backtick character `
// the latter is useful to interpolate with variables. The variable must be embedded with the following ${}
// if we've got a variable called currentNumber, to print this value as a string with backtick, the variable 
// should be represented like so ${currentNumber}

// there is a sintax in which we can escape certain elements like  backslash, for that we use double backslash
// to escape a single quote, I must use a backslash before a single quote. Same for double quotes.

// to tab, I need to use backslash before a "t" like so \t
// to add a linebreak/newline -> \n

currentResult = (currentResult + 10) * 3 / 2 - 1;

outputResult(currentResult, calculationDescription);