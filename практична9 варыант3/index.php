<?php
$categories = [
    [
        'name' => 'Техніка',
        'children' => [
            [
                'name' => 'Комп’ютери',
                'children' => [
                    ['name' => 'Ноутбуки'],
                    ['name' => 'Монітори'],
                ]
            ],
            [
                'name' => 'Смартфони',
                'children' => []
            ]
        ]
    ],
    [
        'name' => 'Меблі',
        'children' => [
            ['name' => 'Стільці'],
            ['name' => 'Столи']
        ]
    ]
];
function logNode($node) {
    echo "Перевіряємо вузол: " . $node['name'] . "<br>";
}
function findCategory($tree, $name, $callback) {
    foreach ($tree as $node) {
        $callback($node);

        if ($node['name'] === $name) {
            return $node;
        }

        if (isset($node['children']) && !empty($node['children'])) {
            $result = findCategory($node['children'], $name, $callback);
            if ($result) {
                return $result;
            }
        }
    }
    return null;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $searchName = $_POST['category_name'];
    echo "<h3>Результати пошуку для: $searchName</h3>";
    $foundCategory = findCategory($categories, $searchName, 'logNode');
    if ($foundCategory) {
        echo "Категорія знайдена: " . $foundCategory['name'];
    } else {
        echo "Категорію не знайдено.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пошук категорії</title>
</head>
<body>
    <form method="POST">
        <label for="category_name">Введіть назву категорії:</label>
        <input type="text" name="category_name" id="category_name" required>
        <button type="submit">Знайти</button>
    </form>
</body>
</html>