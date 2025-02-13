<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Завдання 1</title>
</head>
<body>
<script>
let intVar = 10;
let floatVar = 5.5;
let stringVar = "Hello";
let boolVar = true;
console.log(typeof intVar, intVar);
console.log(typeof floatVar, floatVar);
console.log(typeof stringVar, stringVar);
console.log(typeof boolVar, boolVar);
intVar = "20";
boolVar = Number(boolVar);
console.log(typeof intVar, intVar);
console.log(typeof boolVar, boolVar);
const obj = { num: 42, text: "JavaScript", flag: false };
console.log(JSON.stringify(obj));   
</script>
</body>
</html>
