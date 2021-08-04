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

function addToDisplay(char) {
    const display = document.querySelector('#display p');
    let textContent = display.textContent;
    display.textContent = textContent + char;
};

function clearDisplay() {
    const display = document.querySelector('#display p');
    display.textContent = "";
};

function addEventListeners() {
    const buttons = document.querySelectorAll(".digit, .operator, .special");
    buttons.forEach(button => button.addEventListener('click', (e) => addToDisplay(e.target.id)));

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => clearDisplay()); 
};

addEventListeners();