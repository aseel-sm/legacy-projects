<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    include 'sql.php';

    $Sn=$_GET['id'];
    
    $conn->query("update reg set pay_status=1 where Sn=$Sn");
    header("Location:http://localhost/gym/members/members.php");

     ?>
  </body>
</html>
