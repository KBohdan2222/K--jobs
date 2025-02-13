<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Завдання 2</title>
</head>
<body>
<script>
const num1 = Number(prompt("Введіть перше число:"));
const num2 = Number(prompt("Введіть друге число:"));
const num3 = Number(prompt("Введіть третє число:"));
const average = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", average);
console.log("Модуль першого числа:", Math.abs(num1));
console.log("Округлення вгору:", Math.ceil(average));
console.log("Округлення вниз:", Math.floor(average));
console.log("Піднесення до степеня:", Math.pow(num1, 2));
console.log("Чи ділиться середнє арифметичне на 5:", average % 5 === 0);
console.log("Чи може існувати трикутник:", (num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1));
</script>
</body>
</html>
