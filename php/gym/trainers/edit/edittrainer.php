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
      <h2>BODY BUILD</h2>
        <a href="http://localhost/gym/Home/details.html">Home</a>
      <a href="http://localhost/gym/members/members.php">Members</a>

      <a href="http://localhost/gym/equipments/equip.php">Equipments</a>
      <a href="http://localhost/gym/trainers/Trainers.php">Trainers</a>
        <a href="http://localhost/gym/pay/pay.php">Payment Status</a>
          <a href="http://localhost/gym/editlogin.php">Account</a>


    </section>
    <section id="navbar">
      <button type="button" name="button" id="logout">logout</button>

    </section>
    <section id="pageview">
      <div id="addbox">
        <?php
        include "sql.php";

        $Sn=$_GET["id"];
        $name=$_GET['name'];
          $shift=$_GET['shift'];
          $ph=$_GET['ph'];
 ?>
        <form class="" action="save.php?id=<?php echo $Sn; ?>" method="post">
          <input type="text" name="name" value="<?php echo $name; ?>" placeholder="trainer name" class="samea" disabled>
          <input type="text" name="phne" value="<?php echo $ph; ?>" placeholder="phone number" class="samea">
          <input type="text" name="shift" value="<?php echo $shift; ?>" placeholder="shift" class="samea">
          <button type="submit" name="button" class="submit">Save</button>

        </form>


      </div>


    </section>

  </body>
</html>
