<?php
session_start();

if (!isset($_SESSION['name'])) {
    header('Location: register.php');
    exit();
} else {
    header('Location: profile.php');
    exit();
}
?>