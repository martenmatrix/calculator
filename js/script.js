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

function round(number) {
    //rounds a number, so it does have 10 decimals
    let calculationNumber = Math.pow(10, 10);
    return Math.round(number * calculationNumber) / calculationNumber;
};

function extendNumber(char) {
    if (!allowInput) return;
    let oldNumber = (currentNumber == undefined) ? "" : currentNumber;

    if (resetDisplayOnNextAction) {
        currentNumber = "";
        resetDisplayOnNextAction = false;
    };

    if (currentNumber.length > 16) return;
    if (currentNumber.includes('.') && char == '.') return;
    if (char == '.' && currentNumber == "") return;
    currentNumber = String(oldNumber + char);

    showOnDisplay(currentNumber);
};

function showOnDisplay(text) {
    const display = document.querySelector('#display p');
    display.textContent = text;
};

function backspace() {
    if (currentNumber == "") return;
    if (!allowInput) return;

    currentNumber = currentNumber.slice(0, -1);
    showOnDisplay(currentNumber);

};

function clearDisplay() {
    const display = document.querySelector('#display p');
    display.textContent = "";
};

function clear() {
    clearDisplay();
    typeHistory = [];
    currentNumber = "";
    allowInput = true;
    resetDisplayOnNextAction = false;
};

function addToHistoryArray(charac) {
    typeHistory.push(charac);
};

function isOperator(string) {
    if (string == '+' || string == '-' || string == '/' || string == '*') {
        return true; 
    } else  {
        return false;
    };
}

function calculateArrayHistory() {

    let currentScore = (typeHistory.splice(0, 1))[0];
    //start value of total is the first values as it is not processed

    let currentOperator;
    let currentNumber;

    let dividedByZero = false;

    let total = typeHistory.reduce((total, currentEntry) => {

        if (isOperator(currentEntry)) {
            currentOperator = currentEntry;
        } else {
            currentNumber = currentEntry; 
        };

        if (currentOperator == "/" && currentNumber == "0") {
            dividedByZero = true;
        };

        if (!(currentOperator == undefined) && !(currentNumber == undefined)) {

            let result = operate(currentOperator, total, currentNumber);

            //reset values
            currentOperator = undefined;
            currentNumber = undefined;

            return result;
        };

        return total;

    }, currentScore);

    if (dividedByZero) {
        alert("You are unable to divide by 0.");
        window.location.reload();
    }

    return total;
};

function getLastHistory() { 
    lengthOfArray = typeHistory.length;
    if (lengthOfArray == 0) return undefined;

    lastElementAdded = typeHistory[lengthOfArray - 1];
    return lastElementAdded;
};

function calculate() {
    if (typeHistory.length < 2) return;

    typeHistory.push(parseFloat(currentNumber));
    currentNumber = "";
    clearDisplay();

    let result = calculateArrayHistory();

    typeHistory = [];
    extendNumber(result);
};

function manipulateHistory(operator) {
    allowInput = true;

    let lastElementAdded = getLastHistory();

    //check if input is empty or if first input
    if (!(currentNumber == "" && typeof lastElementAdded == "string")) {

    const isOperatorUsed = typeHistory.some((element) => isOperator(element));
    if (isOperatorUsed) {
        calculate();
        resetDisplayOnNextAction = true;
    } else {
        clearDisplay();
    };

    addToHistoryArray(parseFloat(currentNumber));
    addToHistoryArray(operator);
    };

    currentNumber = "";
};

function displayResult() {
    let lastOperator = getLastHistory();
    if ((isOperator(lastOperator) && (currentNumber == "")) 
        || (typeHistory.length < 2)) return;

    calculate()
    allowInput = false;
};

function addEventListeners() {
    const buttons = document.querySelectorAll(".digit");
    buttons.forEach(button => button.addEventListener('click', (e) => extendNumber(e.target.id))); 

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => clear()); 

    const deleteButton = document.querySelector('.backspace');
    deleteButton.addEventListener('click', () => backspace());

    const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach(button => button.addEventListener('click', (e) => manipulateHistory(e.target.id)));

    const equalsButton = document.querySelector('.result');
    equalsButton.addEventListener('click', () => displayResult());
};

function addHotKeys () {
    window.addEventListener('keydown', (event) => {
        isNumber = /^[0-9|.]$/.test(event.key);
        if (isNumber) {
            extendNumber(event.key);
        };

        if (isOperator(event.key)) {
            manipulateHistory(event.key);
        };

        if (event.key == "Delete") {
            clear();
        };

        if (event.key == "Backspace") {
            backspace();
        };

        if (event.key == "=") {
            displayResult();
        };
    });
};
let typeHistory = [];
let allowInput = true;
let usedOperators = 0;
let resetDisplayOnNextAction = false;
//displayed on display
let currentNumber = "";
addEventListeners();
addHotKeys();