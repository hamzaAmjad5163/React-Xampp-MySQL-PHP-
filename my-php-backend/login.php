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

$email = mysqli_real_escape_string($conn, $_POST['email']); 
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE username = '$email'";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);

    if (password_verify($password, $user['password'])) {
        echo json_encode(["status" => "success", "message" => "Login successful!"]);
    } else {
        echo json_encode(["message" => "Invalid password."]);
    }
} else {
    echo json_encode(["message" => "No user found with that username."]);
}

mysqli_close($conn);
?>
