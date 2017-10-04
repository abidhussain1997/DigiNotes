<?php 
$delfileid = $_POST['filedelid'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
    die("Connection Failed: " . mysql_error());
}

$getLocation = "SELECT * FROM files WHERE FileID = $delfileid";
$LocationResult = $conn->query($getLocation);
$row = mysqli_fetch_assoc($LocationResult);
$filePath = $row['FileLocation'];
echo "path:" . $filePath;

$delfiledb = "DELETE FROM files WHERE FileID = $delfileid";
$deleteresult = $conn->query($delfiledb);
if(unlink ($filePath)){
  echo "File Deleted";
}
 ?>