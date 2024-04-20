<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <title></title>
  </head>
  <body>
    <?php
      include "sql.php";
     
      $Sn=$_GET['id'];
      echo $Sn;
      $conn->query("DELETE FROM `trainers` WHERE Sn='$Sn'");
  header ("Location:http://localhost/gym/trainers/Trainers.php");



       ?>
  </body>
</html>
