<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    include 'sql.php';
    $user=$_POST['username'];
    $pass=$_POST['password'];
    $result=$conn->query('select *from users');
    while ($row=mysqli_fetch_assoc($result)) {



    if($user==$row['username'] && $pass==$row['password'])
      {if($row['type']==0)
        header ("Location:http://localhost/gym/Home/details.html");
        else {
          $id=$row['username'];
          $qq="INSERT INTO `temp`(user) VALUES ('$id')";

          if ($conn->query($qq) === TRUE) {
      //    echo "Record updated successfully";
        header ("Location:http://localhost/gym/userview/Home/details.html");
      } else {
          echo "Error updating record: " . $conn->error;
      }



        }
      }

      else {
        echo "Invalid Log in ";
      ?> <a href="http://localhost/gym/index.php">TRY AGAIN!</a><?php  }}
     ?>

  </body>
</html>
