<?php

$name = "Іван";
$age = 20;
$is_student = true;

echo "Мене звати $name, мені $age років я " . ($is_student ? "студент" : "не студент") . ".<br>";

$numbers = [1, 2, 3, 4, 5];
$sum = array_sum($numbers);

echo "Сума всіх елементів: $sum.<br>";

$user_info = [
    "name" => "Іван Іванов",
    "email" => "ivan@example.com",
    "phone" => "+380123456789"
];

echo "<ul>";
foreach ($user_info as $key => $value) {
    echo "<li>$key: $value</li>";
}
echo "</ul>";

if ($age > 18) {
    echo "Вік більше 18 років.<br>";
} else {
    echo "Вік 18 років менше.<br>";
}

$grade = 75; 

if ($grade >= 90) {
    echo "Оцінка: Відмінно";
} elseif ($grade >= 70) {
    echo "Оцінка: Добре";
} elseif ($grade >= 50) {
    echo "Оцінка: Задовільно";
} else {
    echo "Оцінка: Незадовільно";
}
?>