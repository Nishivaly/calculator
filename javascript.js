const displayBox = document.querySelector('#display');
const operands = document.querySelector('#operands');

let numOne; // Left operand
let numTwo; // Right operand
let result; // Result of the operation
let lastOperator; // Latest operator selected (will be operator used)
let consecOp; // Check the operator selection isn't right after another
let opLastPressed = false; // Last button pressed was an operator
let equalLastPressed = false; // Allows input into result after pressing =

function useOperator(operator) {
    getNumbers();
    if (numOne !== undefined && numTwo !== undefined && lastOperator !== undefined && consecOp === false) {
        switch (lastOperator) {
            case '+':
                add(numOne, numTwo);
                break;
            case '-':
                subtract(numOne, numTwo);
                break;
            case 'x':
                multiply(numOne, numTwo);
                break;
            case '/':
                divide(numOne, numTwo);
                break;
        }
    }
    consecOp = true;
    lastOperator = operator;
    opLastPressed = true;
    equalLastPressed = false;
}

function updateResult(result) {
    numOne = truncateDecimals(result, 7);
    numTwo = undefined;
    opLastPressed = false;
    displayBox.textContent = numOne;
    result = undefined;
}

function truncateDecimals(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces); // e.g., 10^2 = 100 for 2 decimal places
    return Math.floor(num * factor) / factor;
}

function add(left, right) {
    result = Number(left) + Number(right);
    updateResult(result);
}

function subtract(left, right) {
    result = Number(left) - Number(right)
    updateResult(result);
}

function multiply(left, right) {
    result = Number(left) * Number(right)
    updateResult(result);
}

function divide(left, right) {
    result = Number(left) / Number(right)
    updateResult(result);
}

// Pressing = manually
function forceResult() {
    useOperator();
    lastOperator = undefined;
    equalLastPressed = true;
}

function setDisplay(input) {
    if (numOne !== undefined && opLastPressed === true && equalLastPressed === false) {
        displayBox.textContent = '';
        opLastPressed = false;
    }
    displayBox.textContent += input;
    consecOp = false;
}

function getNumbers() {
    if (numOne === undefined) {
        numOne = displayBox.textContent;
    } else {
        numTwo = displayBox.textContent;
    }

    if (numOne !== undefined && equalLastPressed === true) {
        numOne = displayBox.textContent;
    }
}

function clear() {
    numOne = undefined;
    numTwo = undefined;
    result = undefined;
    lastOperator = undefined;
    consecOp = false;
    opLastPressed = false;
    equalLastPressed = false
}

operands.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (displayBox.textContent == 0 &&
            e.target.id !== '=' &&
            e.target.id !== 'x' &&
            e.target.id !== '+' &&
            e.target.id !== '-' &&
            e.target.id !== '/'
        ) {
            displayBox.textContent = '';
        }
        switch (e.target.id) {
            case '7':
                setDisplay(7);
                break;
            case '8':
                setDisplay(8);
                break;
            case '9':
                setDisplay(9);
                break;
            case '/':
                useOperator('/');
                break;
            case '4':
                setDisplay(4);
                break;
            case '5':
                setDisplay(5);
                break;
            case '6':
                setDisplay(6);
                break;
            case 'x':
                useOperator('x');
                break;
            case '1':
                setDisplay(1);
                break;
            case '2':
                setDisplay(2);
                break;
            case '3':
                setDisplay(3);
                break;
            case '-':
                useOperator('-');
                break;
            case '0':
                setDisplay(0);
                break;
            case 'dot':
                setDisplay('.');
                break;
            case '=':
                forceResult();
                break;
            case '+':
                useOperator('+');
                break;
            case 'clear':
                displayBox.textContent = 0;
                break;
        }
    }
});