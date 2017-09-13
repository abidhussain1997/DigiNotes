<?php 
  session_start();
  if((isset($_SESSION['stuloginname']))) {
    // echo "student session exists";
    $flag = 1;
  } else {
    $flag = 0;
  }
echo json_encode($flag);
 ?>