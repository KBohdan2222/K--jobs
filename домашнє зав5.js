 <!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання</title>
</head>
<body>
    <h1>завдання 5</h1>
 function findMinMax(arr) {
            return {
                max: Math.max(...arr),
                min: Math.min(...arr)
            };
        }
        let numbers = [3, 7, 1, 9, 2, 8];
        console.log("Завдання 5: Мінімум і максимум у масиві", numbers, "->", findMinMax(numbers));
    </script>
</body>
</html>