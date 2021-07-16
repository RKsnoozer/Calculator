//Variables from html
const screen = document.getElementById("screen");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator");

numberButtons.forEach((element) => {
    element.addEventListener("click", () => changeNumber(element.textContent));
});

operatorButtons.forEach((element) => {
    element.addEventListener("click", () => changeOperator(element.textContent));
});


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