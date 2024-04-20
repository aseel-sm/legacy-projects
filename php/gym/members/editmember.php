<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="table.css">
    <link rel="stylesheet" href="button.css">
    <link rel="stylesheet" href="add.css">
    <title></title>
  </head>
  <body>
    <section id="sidebar">
      <img src="gym.svg" alt="not loaded">
    <h2>GYMNASIUM</h2>
        <a href="http://localhost/gym/Home/details.html">Home</a>
      <a href="http://localhost/gym/members/members.php">Members</a>

      <a href="http://localhost/gym/equipments/equip.php">Equipments</a>
      <a href="http://localhost/gym/trainers/Trainers.php">Trainers</a>
          <a href="http://localhost/gym/pay/pay.php">Payment Status</a>
  <a href="http://localhost/gym/editlogin.php">Account</a>

    </section>
    <section id="navbar">
    <a href="http://localhost/gym/index.php">  <button type="button" name="button" id="logout">logout</button></a>

    </section>
    <section id="pageview">
      <?php
      include "sql.php";
      $Sn=$_GET['id'];
      echo $Sn;
      $result=$conn->query("select *from reg where Sn=$Sn");
      $row=mysqli_fetch_assoc($result);
       ?>
      <form class="" action="save.php?id=<?php echo $Sn; ?>" method="post">
    Name    <input type="text" name="name" value="<?php echo $row['name']; ?>" placeholder="username" class="samea" disabled><br>
    Gender    <input type="text" name="gender" value="<?php echo $row['Gender']; ?>" placeholder="genter" class="sameb" disabled><br>
        Age<input type="text" name="age" value="<?php echo $row['age']; ?>" placeholder="age" class="sameb"><br>
      About  <input type="text" name="issues" value="<?php echo $row['issues']; ?>" placeholder="about Member" class="samea"><br>
        Fees<input type="number" name="fees" value="<?php echo $row['fee']; ?>" placeholder="New fees(Rs)" class="sameb"><br>
        Mobile No<input type="number" name="phno" value="<?php echo $row['phno']; ?>" placeholder="Mobile Number" class="sameb"><br>
        <button type="submit" name="button" class="submit">Save</button>
      </form>


      </div>


    </section>

  </body>
</html>
