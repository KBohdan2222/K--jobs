<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Завдання 3</title>
</head>
<body>
<script>
console.log("Найбільше число:", Math.max(num1, num2, num3));
console.log("Найменше число:", Math.min(num1, num2, num3));
console.log("Чи є хоча б одне число парним:", num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0);
console.log("Перевірка складної умови:", num1 > num2 && num2 < num3);
const isPrime = (num) => {
if (num < 2) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
};
console.log("Чи є число простим:", isPrime(num1));
</script>
</body>
</html>
