<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST["login"] ?? '';
    $password = $_POST["password"] ?? '';
    $confirmPassword = $_POST["confirm_password"] ?? '';

    if (!filter_var($login, FILTER_VALIDATE_REGEXP, ["options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]])) {
        echo "<p style='color: red;'>Логін повинен містити тільки букви та цифри.</p>";
    }
    elseif ($password !== $confirmPassword) {
        echo "<p style='color: red;'>Паролі не збігаються.</p>";
    }
    else {
        echo "<p style='color: green;'>Реєстрація успішна!</p>";
    }
} else {
    echo "<p style='color: red;'>Форма не була відправлена коректно.</p>";
}
?>