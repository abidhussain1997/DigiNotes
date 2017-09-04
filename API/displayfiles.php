<?php

session_start();
$usersubid = $_SESSION['subjectid'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
    die("Connection Failed: " . mysql_error());
}

$filecard = "SELECT * FROM files WHERE SubjectID = $usersubid";
$filecardresult = $conn->query($filecard);
$filenum = $filecardresult->num_rows;


$filenumArray = array($filenum);
$filecardData = array();

while ($row = mysqli_fetch_assoc($filecardresult)) {
    $filecardData[] = array("fileName"=>$row[FileName],
                        "fileType"=>$row[FileType],
                        "fileLocation"=>$row[FileLocation],
                        "fileId"=>$row[FileID]);
}



$filearrmerg = array_merge($filenumArray, $filecardData);

echo json_encode($filearrmerg);
 ?>
