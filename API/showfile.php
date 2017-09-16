<?php
$fileid = $_POST['fileid'];
// $handle = fopen("DigiNotes\/Data\/abid\/F\/2\/QQ\/bill.pdf, "r");
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";
$conn = new mysqli($servername, $username, $password, $dbName);
if (!$conn) {
    die("Connection Failed: " . mysql_error());
}
$getFileLocation = "SELECT * FROM files WHERE FileID = '$fileid'";
$fileLocationResult = $conn->query($getFileLocation);
$row = mysqli_fetch_assoc($fileLocationResult);
$dirFilePath = $row['FileLocation'];
// echo $dirFilePath;
// echo "<script type='text/javascript'>window.location.href = " . $dirFilePath . ";</script>"
$conn->close();
// header("Location: $dirFilePath");
echo json_encode($dirFilePath);
exit;
?>
