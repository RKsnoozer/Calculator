//Variables from html
const screen = document.getElementById("screen");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator");
const evaluateButton = document.getElementById("clear");


//Event Listeners
clearButton.addEventListener("click", () => clearScreen());

deleteButton.addEventListener("click", () => deleteKey());

evaluateButton.addEventListener("click", () => verification());

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
    return (x + y);
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
    switch (operator) {
        case "divide":
            result = division(a, b);
        case "multiply":
            result = multiplication(a, b);
        case "subtract":
            result = subtraction(a, b);
        case "add":
            result = addition(a, b);
    }
    screen.textContent = result;
}

//Changing screen value inline with button presses
function clearScreen() {
    screen.textContent = 0;
}

function deleteKey() {
    if (screen.textContent !== 0) {
        let text = screen.textContent;
        text = text.slice(0, -1);
        screen.textContent = text;
    }
}

function changeNumber(element) {
    if (screen.textContent == 0) {
        resetScreen();
    }
    screen.textContent += element;
}

function resetScreen() {
    screen.textContent = null;
}

function firstValue() {
    a = screen.textContent;
}

function secondValue() {
    b = screen.textContent;
}

function verification() {
    if ((a !== 0) && (b !== 0) && (operator !== "")) {
        evaluate();
    }
}

function changeOperator(element) {
    if ((a == 0) && (screen.textContent !== 0)) {
        firstValue();
        screen.textContent = 0;
        switch (element.textContent) {
            case "÷":
               operator = "divide";
            case "×":
                operator = "multiply";
            case "-":
                operator = "subtract";
            case "+":
                operator = "add";
        }
    } else if ((b == 0) && (a !== 0) && (screen.textContent !== 0)) {
        secondValue();
        evaluate();
    } else {

    }
}