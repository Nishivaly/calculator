const displayBox = document.querySelector('#display');
const operands = document.querySelector('#operands');

let numOne;
let operator;
let numTwo;

let currentDisplay = displayBox.textContent;


function processDisplay() {
    const opArray = currentDisplay.split(" ");

    let num1;
    let num2;

    opArray.forEach((num, i, arr) => {
        if (num == '+' || num == '-' || num == '/' || num == '*') {

            num1 = i > 0 ? arr[i - 1] : null;
            num2 = i < arr.length - 1 ? arr[i + 1] : null;
            switch (num) {
                case '+':
                    result = add(num1, num2);
                    arr.splice(0, 3, result);
                    break;
                case '-':
                    result = subtract(num1, num2);
                    arr.splice(0, 3, result);
                    break;
                case '*':
                    result = multiply(num1, num2);
                    arr.splice(0, 3, result);
                    break;
                case '/':
                    result = divide(num1, num2);
                    arr.splice(0, 3, result);
                    break;
            }
        }
    });

    console.log(opArray)
}

function updateDisplay() {
    currentDisplay = displayBox.textContent;
}

// function operate(numOne, operator, numTwo) {
//     switch (operator) {
//         case '+':
//             add(numOne, numTwo);
//             break;
//         case '-':
//             subtract(numOne, numTwo);
//             break;
//         case '*':
//             multiply(numOne, numTwo);
//             break;
//         case '/':
//             divide(numOne, numTwo);
//             break;
//     }
// }

function add(left, right) {
    return parseInt(left) + parseInt(right)
}

function subtract(left, right) {
    return parseInt(left) - parseInt(right)
}

function multiply(left, right) {
    return parseInt(left) * parseInt(right)
}

function divide(left, right) {
    return parseInt(left) / parseInt(right)
}

operands.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (displayBox.textContent == 0) {
            displayBox.textContent = '';
        }
        switch (e.target.id) {
            case '7':
                displayBox.textContent += 7;
                break;
            case '8':
                displayBox.textContent += 8;
                break;
            case '9':
                displayBox.textContent += 9;
                break;
            case '/':
                displayBox.textContent += ' / ';
                break;
            case '4':
                displayBox.textContent += 4;
                break;
            case '5':
                displayBox.textContent += 5;
                break;
            case '6':
                displayBox.textContent += 6;
                break;
            case 'x':
                displayBox.textContent += ' * ';
                break;
            case '1':
                displayBox.textContent += 1;
                break;
            case '2':
                displayBox.textContent += 2;
                break;
            case '3':
                displayBox.textContent += 3;
                break;
            case '-':
                displayBox.textContent += ' - ';
                break;
            case '0':
                displayBox.textContent += 0;
                break;
            case 'dot':
                displayBox.textContent += '.';
                break;
            case '=':
                processDisplay();
                break;
            case '+':
                displayBox.textContent += ' + ';
                break;
            case 'clear':
                displayBox.textContent = 0;
                break;
        }
        updateDisplay();
    }
});