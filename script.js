//Variables from html
const screen = document.getElementById("screen");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator");


//Event Listeners
clearButton.addEventListener("click", () => clearScreen());

deleteButton.addEventListener("click", () => deleteKey());

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
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

//Evaluate
function evaluate() {

}

//Changing screen value inline with button presses
function clearScreen() {
    screen.textContent = "0";
}

function deleteKey() {
    let text = screen.textContent;
    text = text.slice(0, -1);
    screen.textContent = text;
}

function changeNumber(element) {
    if (screen.textContent === "0") {
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

function changeOperator(element) {
    firstValue();
    switch (element) {
        case (element.textContent === "÷"):
           operator = "÷";
        case (element.textContent === "×"):
            operator = "×";
        case (element.textContent === "-"):
            operator = "-";
        case (element.textContent === "+"):
            operator = "+";
    }
    screen.textContent = "0";
}