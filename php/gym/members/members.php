<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="table.css">
    <link rel="stylesheet" href="button.css">
    <link rel="stylesheet" href="members.css">
    <title></title>
  </head>
  <body>
    <section id="sidebar" >
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
    <a href="addmember\addmember.html"><button type="button" name="button" id="addmember">Add Member</button></a>

    </section>
    <section id="pageview" style="background-color:#ebd0ca">
      <h2>Members</h2>
      <div class="table">
        <table>
          <tbody>

          <tr>
            <th id="sn">Member ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>About Member</th>
            <th>Phone NO</th>
            <th>Options</th>

            </tr>
        <?php
      include "sql.php";

        $result=$conn->query("select *from reg");
        if($result->num_rows>0)
        { ?>

          <?php
          while ($row=mysqli_fetch_assoc($result)) {
            echo "<tr><td>MEM" .$row['Sn'] .
            "</td><td>" .$row ['name'] .
            "</td><td>".$row ['Gender'] .
             "</td><td>" .$row ['age'] .
              "</td><td>" .$row ['issues'] .
              "</td><td>" .$row ['phno'] ;?> </td><td> <a href="editmember.php?id=<?php echo $row['Sn']; ?>"><button  id="abtn" type="button" name="edit">Edit</button></a>
            <a href="delete.php?id=<?php echo $row['Sn']; ?>">  <button  id="bbtn" type="button" name="delete">Delete</button</td> </a>
              <a href="pay.php?id=<?php echo $row['Sn']; ?>">  <button  id="bbtn" type="button" name="pay" <?php if($row['pay_status']==1) {?>hidden <?php }?>>Pay</button</td> </a> </tr>
                <?php
            //echo "<tr><td>" . $row[''] . "</td><td>" .$row [''] . "</td></tr"
          }}
          else {
            echo "no data";

          }
          ?>

        </tbody>

        </table>
        <br><br>
        <h3>Total Members:<?php
        $result=$conn->query("select count(*) as id from reg");
        $row=mysqli_fetch_assoc($result);
        echo $row['id']; ?></h3>


    </section>

  </body>
</html>
