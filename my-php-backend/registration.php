<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = mysqli_connect("localhost", "root", "", "react_two");

if (!$conn) {
    echo json_encode(["message" => "Connection failed: " . mysqli_connect_error()]);
    exit();
}

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
$last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
$phone_number = mysqli_real_escape_string($conn, $_POST['phone_number']);
$username = mysqli_real_escape_string($conn, $_POST['username']); 
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
$confirm_password = password_hash($_POST['confirm_password'], PASSWORD_BCRYPT);

$query = "INSERT INTO users (username, password, first_name, last_name, phone_number, confirm_password) VALUES ('$username', '$password', '$first_name', '$last_name', '$phone_number', '$confirm_password')";

if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "success", "message" => "Registration successful!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error: " . mysqli_error($conn)]);
}

mysqli_close($conn);
?>
