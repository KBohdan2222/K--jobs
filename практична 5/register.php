<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password']; 

    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;

    setcookie('email', $email, time() + (7 * 24 * 60 * 60));

    header('Location: profile.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <h1>Реєстрація</h1>
    <form method="POST" action="register.php">
        <label for="name">Ім'я:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Пароль:</label><br>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Реєстрація</button>
    </form>
</body>
</html>