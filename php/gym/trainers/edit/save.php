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
    $phne=$_POST['phne'];
    $shift=$_POST['shift'];
    echo $shift;
    $sql="update trainers set phne=$phne,shift='$shift' where Sn=$Sn";
    if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
      header ("Location:http://localhost/gym/trainers/Trainers.php");
  } else {
    echo "Error updating record: " . $conn->error;
  }
     ?>
  </body>
</html>
