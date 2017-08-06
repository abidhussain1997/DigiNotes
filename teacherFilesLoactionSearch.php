<?php
$subjectid = $_POST['cardsubid'];


$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
    die("Connection Failed: " . mysql_error());
} else {
}

$getLocation = "SELECT Location FROM subject WHERE SubjectID = $subjectid";
$LocationResult = $conn->query($getLocation);

$row = mysqli_fetch_assoc($LocationResult);
$location = $row['Location'];

session_start();
$_SESSION['loacation'] = $location;

echo  json_encode($location);
 ?>
