<?php
  session_start();
  if((isset($_SESSION['userloginid']))) {
    $flag = 1;
} else if ((isset($_SESSION['stuloginname']))) {
    $flag = 2;
} else {
    $flag = 0;
}
echo json_encode($flag);
 ?>
