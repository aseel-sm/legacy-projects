<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <title></title>
  </head>
  <body>
    <?php
  include "sql.php";
    $name=$_POST['name'];
    $qty=$_POST['count'];
    $sql="INSERT INTO `equipments`(`name`, `qty`) VALUES ('$name','$qty')";
    $conn->query($sql);
    echo "Added";
    header ("Location:http://localhost/gym/equipments/equip.php");

     ?>
  </body>
</html>
