<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Завдання 4</title>
</head>
<body>
<script>
const name = prompt("Введіть ваше ім'я:");
const birthYear = Number(prompt("Введіть рік народження:"));
const city = prompt("Введіть місто проживання:");
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(`Привіт, ${name}! Вам ${age} років.`);
if (age < 12) console.log("Ви - дитина.");
else if (age < 18) console.log("Ви - підліток.");
else if (age < 60) console.log("Ви - дорослий.");
else console.log("Ви - літня людина.");
const capitals = { "Україна": "Київ", "США": "Вашингтон", "Франція": "Париж" };
console.log(city in capitals ? "Ви живете в столиці!" : "Ваше місто не є столицею.");
</script>
</body>
</html>
