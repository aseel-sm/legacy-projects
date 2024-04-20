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
  <body>

    <h1>Equipments</h1>

        <a href="http://localhost/gym/userview/Home/details.html"><button type="button" id="addmember"name="button"  style="float:left; width:2cm; margin-bottom:4px;">Home</button></a>

    <div class="table">
      <table>
        <tbody>

        <tr>
          <th id="sn">Equipment ID</th>
          <th>Name</th>
            </tr>
      <?php

      include "sql.php";

      $result=$conn->query("select *from equipments");
      if($result->num_rows>0)
      {



        while ($row=mysqli_fetch_assoc($result)) {
        echo "<tr><td>EQ" .$row['sno']  . "</td><td>" . $row['name'] . "</td></tr>"?>
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
