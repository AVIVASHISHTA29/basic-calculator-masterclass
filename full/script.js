let display = document.getElementById('calculator-display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function calculateResult() {
    try {
        display.value = eval(display.value.replaceAll('^', '**'));
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
