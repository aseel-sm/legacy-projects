<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="pay.css">
    <link rel="stylesheet" href="button.css">
    <link rel="stylesheet" href="table.css">
    <link rel="stylesheet" href="navbar.css">
    <title></title>
    <style media="screen">
      #notpayedbtn{
background-color: #ed382b;
color: white;
      }
      #payedbtn{
        background-color: #09bd48;
        color: white;
      }
    </style>
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
      <a href="http://localhost/gym/index.php">  <button  type="button" name="button" id="logout" style="float:right;">logout</button></a>

    </section>
    <section id="pageview" style="background-color:#d4cdcb">
      <div class="table">
        <table>
          <tbody>

          <tr>
            <th>ID</th>
            <th id="sn">Members</th>
            <th>Status</th>
          </tr>
            <?php
            include "sql.php";
            $result=$conn->query("select *from reg");
            if($result->num_rows>0)



            while ($row=mysqli_fetch_assoc($result)) {
              echo "<tr><td>MEM" .$row['Sn'] .
              "</td><td>" .$row ['name'] . "</td>";
              if ($row['pay_status']==0) {
                  ?><td>  <button  id="notpayedbtn"type="button" name="button">Not Payed</button></td>
                <?php
              }else {
                  ?><td>   <button  id="payedbtn"type="button" name="button">Payed</button></td>
              <?php }} ?>
                  </tr>

        </tbody>

        </table>
      </div>

    </section>

  </body>
</html>
