<?php

$teachername = $_POST['teachername'];
$teacheremail = $_POST['teacheremail'];
$teacherpassword = $_POST['teacherpassword'];
$teacherclgcode = $_POST['teacherclgcode'];
$teacherpassword = sha1($teacherpassword);
$checkuser = 0;

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
    die("Connection failed: " . mysql_error());
} else {
    echo "Connected ";
}

$search = "SELECT Email FROM teacher_signup WHERE Email='$teacheremail'";
$searchresult = $conn->query($search);

if ($searchresult->num_rows > 0) {
    $checkuser = 1;
} else {
    $sql = "INSERT INTO teacher_signup VALUES (DEFAULT, '$teachername', '$teacheremail', '$teacherpassword', '$teacherclgcode')";
    if (!$conn->query($sql) === true) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

echo json_encode($checkuser);
$conn->close();
