<?php

$studentname = $_POST['studentname'];
$studentemail = $_POST['studentemail'];
$studentpassword = $_POST['studentpassword'];
$studentclgcode = $_POST['studentclgcode'];
$studentcourse = $_POST['studentcourse'];
$studentsem = $_POST['studentsem'];

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

$search = "SELECT email FROM student_signup WHERE email='$studentemail'";
$searchresult = $conn->query($search);

if ($searchresult->num_rows > 0) {
    echo $searchresult->num_rows;
    echo "<br>" . "User already exisits";
} else {
    $sql = "INSERT INTO student_signup VALUES (DEFAULT, '$studentname', '$studentemail', '$studentpassword', '$studentclgcode', '$studentcourse', $studentsem)";
    if ($conn->query($sql) === true) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
