//Variables from html
const screen = document.getElementById("screen");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const evaluateButton = document.getElementById("equals");
const decimal = document.getElementById("decimal");

//Keydown event listener
window.addEventListener("keydown", (event) => {
    keybFunctionality(event.key);
})

//Event Listeners
clearButton.addEventListener("click", () => clearScreen());

deleteButton.addEventListener("click", () => deleteKey());

evaluateButton.addEventListener("click", () => evaluate());

decimal.addEventListener("click", () => decimalPlace());

numberButtons.forEach((element) => {
    element.addEventListener("click", () => changeNumber(element.textContent));
});

operatorButtons.forEach((element) => {
    element.addEventListener("click", () => changeOperator(element.textContent));
});

//Keyboard triggers functionality
function keybFunctionality(keyb) {
    if (keyb === "Backspace" || keyb === "d") {
        deleteKey();
    }
    if (isNaN(keyb) == false) {
        changeNumber(keyb);
    }
    if (keyb === "=" || keyb === "Enter") {
        evaluate();
    }
    if (keyb === "+" || keyb === "-") {
        changeOperator(keyb);
    }
    if (keyb === "/") {
        changeOperator("÷");
    }
    if (keyb === "*" || keyb === "x") {
        changeOperator("×");
    }
    if (keyb === ".") {
        decimalPlace();
    }
    if (keyb === "Escape") {
        clearScreen();
    }
}

//Value Variables
let a = 0;
let b = 0;
let operator = "";
let result = 0;


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
    if (b == 0) {
        secondValue();
    }
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
    result = Math.round(result * 1000) / 1000;
    screen.textContent = result;
    resetVariables();
}

//Changing screen value inline with button presses
function clearScreen() {
    screen.textContent = 0;
    resetVariables();
}

//Resets all variables back to default
function resetVariables() {
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

//Adds decimal place
function decimalPlace() {
    /*if (screen.textContent.charAt(screen.textContent.length - 1) !== ".") {
        screen.textContent = screen.textContent + ".";
    }*/
    let check = false;
    let arr = screen.textContent.split("");
    arr.forEach((element) => {
        if (element === ".") {
            check = true;
        }
    });
    if (check == false) {
        screen.textContent = screen.textContent + ".";
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