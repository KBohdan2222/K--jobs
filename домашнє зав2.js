<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання</title>
</head>
<body>
    <h1>завдання 2</h1>
function isPrime(n) {
            if (n <= 1) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }
        console.log("Завдання 2: Перевірка простоти числа 17 ->", isPrime(17));
        console.log("Перевірка простоти числа 18 ->", isPrime(18));
    </script>
</body>
</html>