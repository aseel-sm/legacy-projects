<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <meta http-equiv = "refresh" content = "1; url =http://localhost/gym/equipments/equip.php" />
    <title></title>
  </head>
  <body>
    <?php
      include "sql.php";
      echo $_GET['id'];
      $Sn=$_GET["id"];
      $conn->query("DELETE FROM `equipments` WHERE sno='$Sn'");




       ?>
  </body>
</html>
