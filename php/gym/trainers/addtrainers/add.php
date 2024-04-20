<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
  <meta http-equiv = "refresh" content = "1; url =http://localhost/gym/trainers/trainers.php" />
    <title></title>
  </head>
  <body>
    <?php
    include "sql.php";

    
    $name=$_POST['name'];
    $phne=$_POST['phne'];
    $shift=$_POST['shift'];
    $sql="INSERT INTO `trainers`(`Name`,`Phne`,`Shift`) VALUES ('$name','$phne','$shift')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  //  header("Location:C:\wamp64\www\gym\Home");
  header ("Location:http://localhost/gym/trainers/Trainers.php");
     ?>
     
  </body>
</html>
