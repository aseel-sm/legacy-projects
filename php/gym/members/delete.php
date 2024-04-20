<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <meta http-equiv = "refresh" content = "1; url =http://localhost/gym/members/members.php" />
    <title></title>
  </head>
  <body>
    <?php
      include "sql.php";
      $Sn=$_GET["id"];
      $result=$conn->query("select *from reg where Sn='$Sn'");
      $row=mysqli_fetch_assoc($result);
      $user=$row['username'];
      $conn->query("DELETE FROM `reg` WHERE Sn='$Sn'");
      $conn->query("DELETE FROM `users` WHERE username='$user'");
  header ("Location:http://localhost/gym/members/members.php");



       ?>
  </body>
</html>
