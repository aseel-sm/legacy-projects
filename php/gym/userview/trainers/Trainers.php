<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title></title>
    <link rel="stylesheet" href="table.css">
    <link rel="stylesheet" href="button.css">
  </head>
  <body>
    <h1>Trainers</h1>

        <a href="http://localhost/gym/userview/Home/details.html"><button type="button" id="abtn"name="button">Home</button></a>
    <div class="table">
      <table>
        <tbody>

        <tr>
          <th id="sn">Trainer ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          </tr>
      <?php

      include "sql.php";
      $result=$conn->query("select *from trainers");
      if($result->num_rows>0)
      {



        while ($row=mysqli_fetch_assoc($result)) {
          echo "<tr><td>TR" .$row['Sn'] . "</td><td>" . $row['Name'] . "</td><td>" .$row ['Phne'] . "</td></tr>"?>
            <?php
        }}
        else {
          echo "No data";

        } ?>

      </tbody>

      </table>
    </div>
    <br><br>
    <h3>Total Trainers:<?php
    $result=$conn->query("select count(*) as id from trainers");
    $row=mysqli_fetch_assoc($result);
    echo $row['id']; ?></h3>

  </body>
</html>
