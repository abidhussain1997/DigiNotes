<?php
session_start();
$stuloginid = $_SESSION['stuloginid'];
$stuloginname = $_SESSION['stuloginname'];
$stuloginemail = $_SESSION['stuloginemail'];
$stulogincollegecode = $_SESSION['stulogincollegecode'];
$stucourse = $_SESSION['stuloginsubcourse'];
$stusem = $_SESSION['stuloginsubsem'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

$card = "SELECT * FROM subject WHERE  TeacherClgCode='$stulogincollegecode'AND SubjectCourse='$stucourse' AND SubjectSem='$stusem'  ";
$cardresult = $conn->query($card);
$num = $cardresult->num_rows;
if (!$conn) {
    die("Connection Failed: " . mysql_error());
}
$numArray = array($num);
$cardData = array();
// $cardData['num'] = ($num);
while ($row = mysqli_fetch_assoc($cardresult)) {
    $cardData[]= array("subjectname"=>$row['SubjectName'],
                        "subjectcourse"=>$row['SubjectCourse'],
                        "subsem"=>$row['SubjectSem'],
                      "subjectid"=>$row['SubjectID']);
}


  $arrmerg = array_merge($numArray, $cardData);
echo json_encode($arrmerg);
