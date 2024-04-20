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
    $age=$_POST['age'];
    $fee=$_POST['fees'];
    $issues=$_POST['issues'];
//    echo $issues;
    $phno=$_POST['phno'];
    $pass=$_POST['password'];


    $sql="Update reg set age=$age,fee=$fee,phno=$phno,issues='$issues' where Sn=$Sn";

    if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
    header ("Location:http://localhost/gym/userview/Home/details.html");
} else {
    echo "Error updating record:" . $conn->error;
}
     ?>
  </body>
</html>
