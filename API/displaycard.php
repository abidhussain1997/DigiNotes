<?php
session_start();
$userloginid = $_SESSION['userloginid'];
$userloginname = $_SESSION['userloginname'];
$userloginemail = $_SESSION['userloginemail'];
$userlogincollegecode = $_SESSION['userlogincollegecode'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

$card = "SELECT * FROM subject WHERE TeacherID=$userloginid and TeacherClgCode='$userlogincollegecode'";
$cardresult = $conn->query($card);
$num = $cardresult->num_rows;
if (!$conn) {
    die("Connection Failed: " . mysql_error());
}
$numArray = array($num);
$cardData = array();
// $cardData['num'] = ($num);
while ($row = mysqli_fetch_assoc($cardresult)) {
    $cardData[]= array("subjectname"=>$row[SubjectName],
                        "subjectcourse"=>$row[SubjectCourse],
                        "subjectsem"=>$row[SubjectSem],
                      "subjectid"=>$row[SubjectID]);
}


  $arrmerg = array_merge($numArray, $cardData);
echo json_encode($arrmerg);
?>
