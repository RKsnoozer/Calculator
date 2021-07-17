//Variables from html
const screen = document.getElementById("screen");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const evaluateButton = document.getElementById("equals");


//Event Listeners
clearButton.addEventListener("click", () => clearScreen());

deleteButton.addEventListener("click", () => deleteKey());

evaluateButton.addEventListener("click", () => evaluate());

numberButtons.forEach((element) => {
    element.addEventListener("click", () => changeNumber(element.textContent));
});

operatorButtons.forEach((element) => {
    element.addEventListener("click", () => changeOperator(element.textContent));
});

//Value Variables
let a = 0;
let b = 0;
let operator = "";


//Four Main Methods
function addition(x, y) {
    return (+x + +y);
}

function subtraction(x, y) {
    return (x - y);
}

function multiplication(x, y) {
    return (x * y);
}

function division(x, y) {
    return (x / y);
}

//Evaluate
function evaluate() {
    let result = 0;
    if (b == 0) {
        secondValue();
    }
    /*switch (operator) {
        case "divide":
            result = division(a, b);
        case "multiply":
            result = multiplication(a, b);
        case "subtract":
            result = subtraction(a, b);
        case "add":
            result = addition(a, b);
    }*/
    if (operator === "divide") {
        result = division(a, b);
    }
    if (operator === "multiply") {
        result = multiplication(a, b);
    }
    if (operator === "subtract") {
        result = subtraction(a, b);
    }
    if (operator === "add") {
        result = addition(a, b);
    }
    screen.textContent = result;
}

//Changing screen value inline with button presses
function clearScreen() {
    screen.textContent = 0;
    a = 0;
    b = 0;
    operator = "";
}

//Deletes individual numbers from the screen
function deleteKey() {
    if (screen.textContent !== 0) {
        let text = screen.textContent;
        text = text.slice(0, -1);
        screen.textContent = text;
    }
}

//Live update for numbers on the screen changing
function changeNumber(element) {
    if (screen.textContent == 0) {
        resetScreen();
    }
    screen.textContent += element;
}

//Removes all values from the screen
function resetScreen() {
    screen.textContent = null;
}

//Stores the first number into a variable
function firstValue() {
    a = screen.textContent;
}

//Stores the second number into a variable
function secondValue() {
    b = screen.textContent;
}

//Runs check for if its a valid case to perform an operation
function verification(e) {
    if (e === "+") {
        operator = "add";
    }
    if (e === "-") {
        operator = "subtract";
    }
    if (e === "×") {
        operator = "multiply";
    }
    if (e === "÷") {
        operator = "divide";
    }
}

//Controls what to do when operational buttons are pressed
function changeOperator(element) {
    if ((a == 0) && (screen.textContent !== 0)) {
        firstValue();
        screen.textContent = 0;

        verification(element);

    } else if ((b == 0) && (a !== 0) && (screen.textContent !== 0)) {
        secondValue();
        evaluate();
    } else {

    }
}