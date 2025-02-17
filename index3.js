function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Невідома операція';
    }
}
const num1 = parseFloat(prompt('Введіть перше число:'));
const num2 = parseFloat(prompt('Введіть друге число:'));
const operation = prompt('Введіть операцію (+, -, *, /):');
const result = calculate(num1, num2, operation);
alert('Результат: ' + result);