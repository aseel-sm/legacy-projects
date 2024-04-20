

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="login.css">
    <title>login</title>
    <style >
    body{
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      background: #f2f2f2;
    }
    #login{
      width: 300px;
      height: 400px;
      margin-left: calc(50% - 150px);
      margin-top: 100px;
      background: white;
      border: 1px solid #000000ff;
      border-radius: 10px;
    }
    #login img{
      width: 100px;
      margin-left: calc(50% - 50px);
      margin-top: 10px;
    }
    #login input{
      display: inline;
      color: #000000ff;
      border: 0px;
      border-bottom: 1px solid #000000ff;
      float: left;
      width: 90%;
      margin-left:5%;
      margin-right: 5%;
      margin-top: 50px;
    }
    #login button{
      border: 1px solid #000000ff;
      background: white;
      color: #000000ff;
      float: left;
      width: 100px;
      height: 25px;
      border-radius: 10px;
      margin-left: calc(50% - 50px);
      margin-top: 50px;
    }
    #bt:hover{
      background: #000000ff;
      color: white;
    }

    </style>
  </head>
  <body>
    <?php
    include 'sql.php';
    $result=$conn->query("select username from users where type=0");
    $row=mysqli_fetch_assoc($result);
     ?>
    <section id="login">
      <img src="gym.svg" alt="not loaded">
      <form class="" action="login-editsave.php" method="post">
        <input type="text" name="username" value="<?php echo $row['username']; ?>" placeholder="" required>
        <input type="Password" name="password" value="" placeholder="<?php
          echo "New Password";
         ?>">
        <button type="Submit" name="button" id="bt" style="width:3cm;">Save Changes</button>
      </form>


    </section>


  </body>
</html>
