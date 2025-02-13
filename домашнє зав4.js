 <!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання</title>
</head>
<body>
    <h1>завдання 4</h1>
 function factorial(n) {
            if (n === 0) return 1;
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
        console.log("Завдання 4: Факторіал 5 ->", factorial(5));
    </script>
</body>
</html>