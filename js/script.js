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

function extendNumber(char) {
    let oldNumber = (currentNumber == undefined) ? "" : currentNumber;
    currentNumber = oldNumber + char;
    showOnDisplay(currentNumber);
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
    typeHistory = [];
    currentNumber = "";
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

    let total = typeHistory.reduce((total, currentEntry) => {
        console.log(1);
        if (isOperator(currentEntry)) {
            currentOperator = currentEntry;
        } else {
            currentNumber = currentEntry;
        };

        if (!(currentOperator == undefined) && !(currentNumber == undefined)) {

            let result = operate(currentOperator, total, currentNumber);

            //reset values
            currentScore = undefined;
            currentNumber = undefined;

            return result;
        };

        return total;

    }, currentScore);

    return total;
};

function getLastHistory() { 
    lengthOfArray = typeHistory.length;
    if (lengthOfArray == 0) return undefined;

    lastElementAdded = typeHistory[lengthOfArray - 1];
    return lastElementAdded;
};



function addEventListeners() {
    const buttons = document.querySelectorAll(".digit");
    buttons.forEach(button => button.addEventListener('click', (e) => extendNumber(e.target.id)));

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => clear()); 

    const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach(button => button.addEventListener('click', (e) => {

        let lastElementAdded = getLastHistory();

        //check if input is empty or if first input
        if (!(currentNumber == "" && typeof lastElementAdded == "string")) {
        addToHistoryArray(parseFloat(currentNumber));
        addToHistoryArray(e.target.id);
        };

        clearDisplay();
        currentNumber = "";
    }))
};

let typeHistory = [];

//displayed on display
let currentNumber;
addEventListeners();

//event listener to operators

//Create a counter for clicked operators, if equals 2 do the calculation or = was pressed

//if event listerner is clicked, convert the current string on the display without the operator to a number object
//make oldTextContent a global let, this will be used as last number
//in calculate clearDisplay
//check which operates was choosed by event.target
//do the calculation and add ther result to a global score which is at the beginning 0