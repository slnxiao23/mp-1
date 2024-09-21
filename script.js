// Function to check if the input is a valid number
function isValidInput(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return false;
    }
    return true;
}

// Addition function
function addition() {
    let num1 = document.getElementById("first-number").valueAsNumber;
    let num2 = document.getElementById("second-number").valueAsNumber;
    
    if (!isValidInput(num1, num2)) return;

    let result = num1 + num2;
    displayResult(result);
}

// Subtraction function
function subtraction() {
    let num1 = document.getElementById("first-number").valueAsNumber;
    let num2 = document.getElementById("second-number").valueAsNumber;
    
    if (!isValidInput(num1, num2)) return;

    let result = num1 - num2;
    displayResult(result);
}

// Multiplication function
function multiplication() {
    let num1 = document.getElementById("first-number").valueAsNumber;
    let num2 = document.getElementById("second-number").valueAsNumber;
    
    if (!isValidInput(num1, num2)) return;

    let result = num1 * num2;
    displayResult(result);
}

// Division function
function division() {
    let num1 = document.getElementById("first-number").valueAsNumber;
    let num2 = document.getElementById("second-number").valueAsNumber;
    
    if (!isValidInput(num1, num2)) return;

    if (num2 === 0) {
        alert("Division by zero is undefined.");
        return;
    }
    let result = num1 / num2;
    displayResult(result);
}

// Power function using a for loop
function power() {
    let base = document.getElementById("first-number").valueAsNumber;
    let exponent = document.getElementById("second-number").valueAsNumber;
    
    if (!isValidInput(base, exponent)) return;

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

// Clear function
function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

// Function to display the result and apply styling for negative numbers
function displayResult(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);

    // Apply red color for negative results
    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}
