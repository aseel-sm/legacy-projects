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
        <a href="http://localhost/gym/userview/Home/details.html">Home</a>
      <a href="http://localhost/gym/userview/editmembers.php">Your Account</a>

      <a href="http://localhost/gym/userview/equipments/equip.php">Equipments</a>
      <a href="http://localhost/gym/trainers/Trainers.php">Trainers</a>



    </section>
    <section id="navbar">
    <a href="http://localhost/gym/index.php">  <button type="button" name="button" id="logout">logout</button></a>

    </section>
    <section id="pageview">
      <?php
      include "sql.php";
      $sql=$conn->query("SELECT `user` FROM `temp`where sn=(select max(sn) from temp)");
      $q=mysqli_fetch_assoc($sql);
      $Sn=$q['user'];
      echo $Sn;
      $result=$conn->query("select *from reg where username='$Sn'");
      $row=mysqli_fetch_assoc($result);
      $Snn=$row['Sn'];
       ?>
      <form class="" action="save.php?id=<?php echo $Snn; ?>" method="post">
    Name    <input type="text" name="name" value="<?php echo $row['name']; ?>" placeholder="username" class="samea" disabled><br>
    Gender    <input type="text" name="gender" value="<?php echo $row['Gender']; ?>" placeholder="Gender" class="sameb" disabled><br>
        Age<input type="text" name="age" value="<?php echo $row['age']; ?>" placeholder="Age" class="sameb"><br>
      About  <input type="text" name="issues" value="<?php echo $row['issues']; ?>" placeholder="About Member" class="samea"><br>
        Fees<input type="number" name="fees" value="<?php echo $row['fee']; ?>" placeholder="New fees(Rs)" class="sameb"><br>
        Mobile No<input type="number" name="phno" value="<?php echo $row['phno']; ?>" placeholder="Mobile Number" class="sameb"><br>
        Username <input type="text" name="usern" value="<?php echo $row['username'] ?>" placeholder="Username" class="sameb" disabled>

        <button type="submit" name="button" class="submit">Save</button>
      </form>


      </div>


    </section>

  </body>
</html>
