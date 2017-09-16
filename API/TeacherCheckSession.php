<?php
  session_start();
  if((isset($_SESSION['userloginid']) )) {
    // echo "seesion exists";
    $flag = 1;
    // header('Location: ../TeacherDashboard.html');
    // exit();
  } else {
    $flag = 0;
  }

echo json_encode($flag);
 ?>
