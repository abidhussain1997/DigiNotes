<?php
session_start();
$userloginid = $_SESSION['userloginid'];
$userloginname = $_SESSION['userloginname'];
$userloginemail = $_SESSION['userloginemail'];
$userlogincollegecode = $_SESSION['userlogincollegecode'];
echo "data is : " . $userloginid . " " . $userloginname . " " . $userloginemail . " " . $userlogincollegecode . "<br><br>";
// echo "<br>" . '..';

$subject_name = $_POST['subject_name'];
$subject_course = $_POST['subject_course'];
$subject_sem = $_POST['subject_sem'];

$servername = "localhost";
$username = "root";
$password = "";
$dbName = "diginotes";

$conn = new mysqli($servername, $username, $password, $dbName);

$card = "SELECT * FROM subject WHERE TeacherID=userloginid and TeacherClgCode='$userlogincollegecode'";
$result = $conn->query($card);
echo $result->num_rows;

if (!$conn) {
    die("Connection Failed: " . mysql_error());
}

if (!file_exists('..' . '/Data/' . $userloginemail)) {
    echo "user folder creates ";
    mkdir('..' . '/Data/' . $userloginemail, 0777, true);

    if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course)) {
        echo "<br>course created ";
        mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course, 0777, true);

        if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course) . "/" . $subject_sem) {
            echo "<br> Sem added";
            mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem, 0777, true);

            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        } else {
            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        }
    } else {
        if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course) . "/" . $subject_sem) {
            echo "<br> Sem added";
            mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem, 0777, true);

            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        } else {
            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        }
    }
} else {
    if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course)) {
        echo "<br>course created ";
        mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course, 0777, true);

        if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course) . "/" . $subject_sem) {
            echo "<br> Sem added";
            mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem, 0777, true);

            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        } else {
            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        }
    } else {
        if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course) . "/" . $subject_sem) {
            echo "<br> Sem added";
            mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem, 0777, true);

            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        } else {
            if (!file_exists('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name)) {
                echo "<br> Subject added";
                mkdir('..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name, 0777, true);
                $sublocation = '..' . '/Data/' . $userloginemail . "/" . $subject_course . "/" . $subject_sem . "/" . $subject_name;
                echo "<br><br><br> location is : " . $sublocation;
                $insertSubject = "INSERT INTO subject VALUES (DEFAULT, '$subject_name', '$subject_course', '$subject_sem' , '$userloginid', '$userlogincollegecode', '$sublocation')";
                if ($conn->query($insertSubject) === true) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $insertSubject . "<br>" . $conn->error;
                }
            } else {
                echo "<br> subject already exists";
            }
        }
    }
}

$conn->close();
