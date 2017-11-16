<?php

session_start();
$stuloginid = $_SESSION['stuloginid'];
$student_sem = $_POST['stu_sem'];
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

$check = "UPDATE student_signup SET stusem='$student_sem' where id='$stuloginid'";
$result = $conn->query($check);

if ($conn->query($check) === true) { 
    $flag = 1;
} else {
  $flag = 0;
    echo "Error: " . $sql . "<br>" . $conn->error;
}
echo json_encode($flag);
$conn->close();
