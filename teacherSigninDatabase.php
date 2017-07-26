<?php

$teacher_username = $_POST['teacher_username'];
$teacher_password = $_POST['teacher_password'];
$flag = 0;

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
  die("Connection Failed: " . mysql_error());
} else {
}

$check = "SELECT * FROM teacher_signup WHERE Email Like '$teacher_username' AND Password like '$teacher_password'";
$result = $conn->query($check);

if ($result->num_rows > 0) {
  $flag = 0;
} else {
  $flag = 1;
}

echo json_encode($flag);
$conn->close();
 ?>
