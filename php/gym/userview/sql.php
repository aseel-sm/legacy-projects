<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php

  $servername="localhost";
  $username="root";
  $password = "bcamysql";
  $dbname="gym";

  $conn = new mysqli($servername,$username,$password,$dbname);
  if($conn->connect_error)
  {
    die ("connection failed" . $conn->connect_error);
  }
  else {
  

  } ?>
  </body>
</html>
