

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
      background-image: url("bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    #login{
      width: 350px;
      height: 500px;
      margin-left: calc(50% - 150px);
      margin-top: 100px;
      background-color: white;
      box-shadow:2px 2px;
      border-radius: 10px;
      opacity: 70%;

    }
    #login img{
      width: 100px;
      margin-left: calc(50% - 50px);
      margin-top: 10px;
    }
    #login input{
      display: inline;
      color: #000000ff;
      border: 1px solid ##aae5f0;
      float: left;
      width: 90%;
      height: 1cm;
      background-color: white;
      margin-left:5%;
      margin-right:5%;
      margin-top:50px;
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
    .user button{
        border: 1px solid #000000ff;
        background: white;
        color: #000000ff;
        width: 100px;
        height: 25px;
        border-radius: 10px;

      }
    #bt:hover{
      background: #000000ff;
      color: white;
    }
    .user{
      margin-top: -50px;
      border-radius: 10px;
      float: right;

    }
    .user input{

      border-radius: 5px;
      opacity: 80%;
      box-shadow:0px 0px;
      border: 1px solid white;
    }
    </style>
  </head>


  <body style="background-color:#bfa49d" >

      <h1 style="font-family:cursive; font-style:italic; margin-bottom:-10px;">Welcome To Gymnasium</h1>
      <section class="user"  >
        <h5 style="margin:0px 0px 0px 0px;font-family:cursive; font-style:italic">User Login</h5>

        <form class="" action="authorise.php" method="post">

          <input type="text" name="username" value="" placeholder="<?php
            echo "Username";
          ?>" required>        <input type="Password" name="password" value="" placeholder="<?php  {
            echo "Password";
          } ?>" required>
          <button type="Submit" name="button" id="bt" style="width:2cm; height0.5cm;" >Login</button>
        </form>
    </section>


    </div>



  <div class="c1" style="float:left; width:40%; margin-left:440px;" >
    <section id="login" >
      <img src="gym.svg" alt="not loaded">
      <br>
      <h4 style="text-align:center; margin:0px 0px 0px 0px;font-family:cursive; font-style:italic;">Admin Login</h4>
      <form class="" action="authorise.php" method="post">
        <input  type="text" name="username" value="" placeholder="<?php
          echo "Username";
        ?>" required>
        <input type="Password" name="password" value="" placeholder="<?php  {
          echo "Password";
        } ?>" required>
        <button type="Submit" name="button" id="bt">Login</button>
      </form>


    </section>
  </div>




  </div>



  <script type="text/javascript">
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
      history.go(1);
  };
  </script>

  </body>
</html>
