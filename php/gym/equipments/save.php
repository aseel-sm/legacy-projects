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
    $count=$_POST['count'];
    $conn->query("UPDATE `equipments` SET `qty`=$count WHERE sno=$Sn");
        header ("Location:http://localhost/gym/equipments/equip.php");
     ?>
  </body>
</html>
