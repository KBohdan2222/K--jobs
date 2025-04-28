<?php
session_start();

if (!isset($_SESSION['name'])) {
    header('Location: register.php');
    exit();
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];
$cookieEmail = isset($_COOKIE['email']) ? $_COOKIE['email'] : 'немає даних';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
</head>
<body>
    <h1>Профіль користувача</h1>
    <p>Ім'я: <?php echo htmlspecialchars($name); ?></p>
    <p>Email: <?php echo htmlspecialchars($email); ?></p>
    <p>Ваш email запамятали: <?php echo htmlspecialchars($cookieEmail); ?></p>
    <form action="logout.php" method="POST">
        <button type="submit">Вийти</button>
    </form>
</body>
</html>