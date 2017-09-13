<?php

$teacher_username = $_POST['teacher_username'];
$teacher_password = $_POST['teacher_password'];
$flag = 0;
$teacher_password = sha1($teacher_password);

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
    $row = mysqli_fetch_assoc($result);
    $id = $row['ID'];
    $passwd = $row['Password'];
    $name = $row['Name'];
    $email = $row['Email'];
    $collagecode = $row['CollegeCode'];
    //Start your session
    session_start();
    //Store the name in the session
    $_SESSION['userloginid'] = $id;
    $_SESSION['userpassword'] = $passwd;
    $_SESSION['userloginname'] = $name;
    $_SESSION['userloginemail'] = $email;
    $_SESSION['userlogincollegecode'] = $collagecode;
} else {
    $flag = 1;
}

echo json_encode($flag);
$conn->close();
