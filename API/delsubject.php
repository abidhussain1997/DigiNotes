<?php
$delsubject = $_POST['carddelid'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

if (!$conn) {
    die("Connection Failed: " . mysql_error());
}

$getLocation = "SELECT * FROM subject WHERE SubjectID = $delsubject";
$LocationResult = $conn->query($getLocation);

$row = mysqli_fetch_assoc($LocationResult);
$dirPath = $row['Location'];

echo $dirPath;

if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            self::deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);

$deleterow = "DELETE FROM subject WHERE SubjectID = $delsubject";
$conn->query($deleterow);



$conn->close();
 ?>
