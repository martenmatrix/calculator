function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator,num1, num2) {

    if (operatorsUsed === 0) return num2;

    let result;

    if (operator == '+') {
        result = add(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    } else if (operator == '*') {
        result = multiply(num1, num2);
    } else if (operator == '/') {
        result = divide(num1, num2);
    };

    return result;
};

function extendNumber(char) {
    newNumber = newNumber + char;
    showOnDisplay(newNumber);
};

function showOnDisplay(text) {
    const display = document.querySelector('#display p');
    display.textContent = text;
};

function clearDisplay() {
    const display = document.querySelector('#display p');
    display.textContent = "";
};

function clear() {
    clearDisplay();
    currentCount = null;
    newNumber = "";
    operatorsUsed = 0;
};

function calculate(operator) {
    operatorsUsed += 1;


    if (operator == '=') {
        notCalculatedNumber = document.querySelector('#display p').textContent;
        if (notCalculatedNumber == "") showOnDisplay(currentCount);
        calculate(lastOperator, currentCount, parseInt(notCalculatedNumber));
    } else {
        lastOperator = operator;
    };

    if (!(operatorsUsed == 2 || operator == '=')) {
    currentCount = operate(operator, currentCount, parseInt(newNumber));
    clearDisplay();
    };

    if (operatorsUsed == 2 || operator == '=') {
        showOnDisplay(currentCount);
        operatorsUsed = 0;
    };

    newNumber = "";
};

function addEventListeners() {
    const buttons = document.querySelectorAll(".digit");
    buttons.forEach(button => button.addEventListener('click', (e) => extendNumber(e.target.id)));

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => clear()); 

    const operatorButton = document.querySelectorAll('.operator, .result');
    operatorButton.forEach(operator => operator.addEventListener('click', (e) => {
        calculate(e.target.id);
    }));


    const equalsButton = document.querySelector('.result');
    equalsButton.addEventListener('click', () => calculate('='));
};

let lastOperator;
let newNumber = "";
let currentCount = null;
let operatorsUsed = 0;
addEventListeners();

//event listener to operators

//Create a counter for clicked operators, if equals 2 do the calculation or = was pressed

//if event listerner is clicked, convert the current string on the display without the operator to a number object
//make oldTextContent a global let, this will be used as last number
//in calculate clearDisplay
//check which operates was choosed by event.target
//do the calculation and add ther result to a global score which is at the beginning 0