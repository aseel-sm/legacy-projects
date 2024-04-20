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
    $gender=$_POST['gender'];
    $age=$_POST['age'];
    $issues=$_POST['about'];
    $fees=$_POST['fees'];
    $phno=$_POST['phno'];
    $user=$_POST['username'];
    $pass=$_POST['password'];

    $sql="INSERT INTO `reg`(`name`, `Gender`, `age`, `fee`, `issues`, `phno`,username) VALUES ('$name','$gender','$age','$fees','$issues','$phno','$user') ";
    $acc="INSERT into users VALUES ('$user','$pass',1)";
    $conn->query($acc);
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        header("Location:http://localhost/gym/members/members.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

             $conn->close();
             ?>
             <a href=""></a>
  </body>
</html>
