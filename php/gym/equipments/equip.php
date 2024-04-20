<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="table.css">
    <link rel="stylesheet" href="button.css">
    <link rel="stylesheet" href="navbar.css">
    <link rel="stylesheet" href="details.css">
    <title></title>


  </head>
  <body style="background-color:#fae8e3">

    <h1>Equipments</h1>
      <a href="addequip\addequip.html"><button type="button" name="button" id="addmember" style="float:left; width:3cm;">Add Equipments</button></a>
        <a href="http://localhost/gym/Home/details.html"><button type="button" id="addmember"name="button"  style="float:left; width:2cm; margin-bottom:4px;">Home</button></a>

    <div class="table" >
      <table style="background-color:#e6c9c1">
        <tbody>

        <tr>
          <th id="sn">Equipment ID</th>
          <th>Name</th>
          <th>Quantity</th>
       <th>Options</th>

        </tr>
      <?php

      include "sql.php";

      $result=$conn->query("select *from equipments");
      if($result->num_rows>0)
      {



        while ($row=mysqli_fetch_assoc($result)) {
        echo "<tr><td>EQ" .$row['sno']  . "</td><td>" . $row['name'] . "</td><td>" .$row ['qty'] ;?> </td><td>
<a href="editequip.php?id=<?php echo $row['sno'];?>& name=<?php echo $row['name']; ?>"><button  id="abtn" type="button" name="button">Edit</button></a>

      <a href="delete.php?id=<?php echo $row['sno']; ?>"><button  id="bbtn" type="button" name="button">Delete</button></a>    </td></tr>
            <?php

        }}
        else {
          echo "No data";
        //  $conn->close();
        } ?>

      </tbody>

      </table>
<br><br>
<h3>Total Equipments:<?php
$result=$conn->query("select count(*) as id from equipments");
$row=mysqli_fetch_assoc($result);
echo $row['id']; ?></h3>


    </div>

  </body>
</html>
