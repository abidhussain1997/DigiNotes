<?php
$student_username = $_POST['student_username'];
$student_password = $_POST['student_password'];
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
$check = "SELECT * FROM student_signup WHERE email='$student_username' AND password='$student_password'";
$result = $conn->query($check);
if ($result->num_rows > 0) {
    $flag = 0;
        $row = mysqli_fetch_assoc($result);
        $stuid = $row['id'];
        $name = $row['name'];
        $email = $row['email'];
        $collagecode = $row['collegecode'];
        $stucourse = $row['stucourse'];
        $stusem = $row['stusem'];
        //Start your session
        session_start();
        //Store the name in the session
        $_SESSION['stuloginid'] = $stuid;
        $_SESSION['stuloginname'] = $name;
        $_SESSION['stuloginemail'] = $email;
        $_SESSION['stulogincollegecode'] = $collagecode;
        $_SESSION['stuloginsubcourse'] = $stucourse;
        $_SESSION['stuloginsubsem'] = $stusem;

} else {
    $flag = 1;
}

echo json_encode($flag);
$conn->close();
