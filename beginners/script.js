function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Infinity'; // or any error message
                break;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}
