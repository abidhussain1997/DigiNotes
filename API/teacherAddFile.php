<?php
session_start();
$subjectlocation = $_SESSION['loacation'];
$subjectid = $_SESSION['subjectid'];
$subjectlocation = $subjectlocation . "/";
$location = stripslashes($subjectlocation);
$target_path = $location . basename( $_FILES['file']['name']);
$fileName = basename( $_FILES['file']['name']);
$already_exists = false;
$error = false;
$invalid_file = false;

$servername = "localhost";
 $username = "root";
 $password = "";
 $dbName = "diginotes";

 $conn = new mysqli($servername, $username, $password, $dbName);
 if (!$conn) {
     die("Connection Failed: " . mysql_error());
 }

  if (isset($_FILES["file"]["type"])) {
    $validextensions = array("pdf", "doc", "docx", "ppt","pptx");
    $temporary = explode(".", $_FILES["file"]["name"]);
    $file_extension = end($temporary);


    if ((($_FILES["file"]["type"] == "application/pdf") || ($_FILES["file"]["type"] == "application/msword"))
    || ($_FILES["file"]["type"] == "application/mspowerpoint") || ($_FILES["file"]["type"] == "application/powerpoint") || ($_FILES["file"]["type"] == "application/vnd.ms-powerpoint")
    || ($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    && in_array($file_extension, $validextensions)) {
      if ($_FILES["file"]["error"] > 0)
      {
        $error = true;
        echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
      }
      else
      {
        if (file_exists($location . $_FILES["file"]["name"])) {
          $already_exists = true;
          echo $_FILES["file"]["name"] . " <span id='invalid'><b>already exists.</b></span> ";
        }
        else {
          $sourcePath = $_FILES['file']['tmp_name'];
          $targetPath = $location . $_FILES['file']['name'];

          move_uploaded_file($sourcePath,$targetPath) ;
          $addFileToDB = "INSERT INTO files VALUES (DEFAULT, '$fileName', '$file_extension', '$targetPath', $subjectid)";
          $conn->query($addFileToDB);
        }
      }
    }
    else
    {
      $invalid_file = true;
      echo "<span id='invalid'>***Invalid file Type***<span>";
    }
}



 ?>
