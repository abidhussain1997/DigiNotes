<?php
session_start();
$userloginid = $_SESSION['userloginid'];
$userloginname = $_SESSION['userloginname'];
$userloginemail = $_SESSION['userloginemail'];
$userlogincollegecode = $_SESSION['userlogincollegecode'];
echo "data is : " . $userloginid . " " . $userloginname . " " . $userloginemail . " " . $userlogincollegecode . "<br><br>";
// echo "<br>" . getcwd();

$subject_name = $_POST['subject_name'];
$subject_course = $_POST['subject_course'];
$subject_sem = $_POST['subject_sem'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
  die("Connection Failed: " . mysql_error());
}

if (!file_exists(getcwd() . '/Data/' . $userloginemail)) {
  echo "user folder creates ";
  mkdir(getcwd() . '/Data/' . $userloginemail, 0777, true);

  if (!file_exists(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course)) {
    echo "<br>course created ";
    mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course, 0777, true);
    if (!file_exists(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name)) {
      echo "<br> Subject added";
      mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name, 0777, true);
      $sublocation = getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name;
      echo "<br><br><br> location is : " . $sublocation;
      $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
      $conn->query($insertSubject);
    } else {
      echo "<br> subject already exists";
    }
  } else {
    mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name, 0777, true);
  }
} else {
  if (!file_exists(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course)) {
    echo "<br> course created ";
    mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course, 0777, true);
    if (!file_exists(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name)) {
      echo "<br> Subject added";
      mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name, 0777, true);
      $sublocation = getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name;
      echo "<br><br><br> location is : " . $sublocation;
      $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
      $conn->query($insertSubject);
    } else {
      echo "<br> subject already exists";
    }

  } else {
    if (!file_exists(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name)) {
      echo "Subject added";
      mkdir(getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name, 0777, true);
      $sublocation = getcwd() . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_name;
      echo "<br><br><br> location is : " . $sublocation;
      $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
      $conn->query($insertSubject);
    } else {
      echo "<br> subject already exists";
    }
  }
}



$conn->close();
 ?>
