<?php
include 'sql.php';
$user=$_POST['username'];
$pass=$_POST['password'];
$sql="update users set username='$user',password='$pass'";

if($conn->query($sql)==TRUE)
  {
    header ("Location:http://localhost/gym/Home/details.html");}
  else {
    echo "Invalid Log in ".$conn->error;
    //header ("Location:http://localhost/gym/index.php?f=1");

  }
 ?>
