<?php
error_reporting( ~E_NOTICE ); // avoid notice
session_start();
if(isset($_SESSION['user'])!="")
{
 header("Location: home.php");
}
include_once 'dbconnect.php';

if(isset($_POST['btn-signup']))
{
 $uname = mysql_real_escape_string($_POST['uname']);
 $email = mysql_real_escape_string($_POST['email']);
 $upass = md5(mysql_real_escape_string($_POST['pass']));
 $imgFile = $_FILES['user_image']['name'];
 $tmp_dir = $_FILES['user_image']['tmp_name'];
 $imgSize = $_FILES['user_image']['size'];
   
 $upload_dir = 'user_images/'; // upload directory
 
 $imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // get image extension
  
 // valid image extensions
 $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
  
 // rename uploading image
 $userpic = rand(1000,1000000).".".$imgExt;
    
 // allow valid image file formats
 if(in_array($imgExt, $valid_extensions)){   
  // Check file size '5MB'
  if($imgSize < 5000000)    {  
    move_uploaded_file($tmp_dir,$upload_dir.$userpic);
    }
  else{
    $errMSG = "Sorry, your file is too large.";
    }
 }
 else{
    $errMSG = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";  
 }
 
 if(mysql_query("INSERT INTO users(username,email,password,userpic) VALUES('$uname','$email','$upass','$userpic')"))
 {
  ?>
        <script>alert('successfully registered ');</script>
        <?php
 }
 else
 {
  ?>
        <script>alert('error while registering you...');</script>
        <?php
 }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login & Registration System</title>
<link rel="stylesheet" href="style.css" type="text/css" />

</head>
<body>
<center>
<div id="login-form">
<form method="post">
<table align="center" width="30%" border="0">
<tr>
<td><input type="text" name="uname" placeholder="User Name" required /></td>
</tr>
<tr>
<td><input type="email" name="email" placeholder="Your Email" required /></td>
</tr>
<tr>
<td><input type="password" name="pass" placeholder="Your Password" required /></td>
</tr>
<tr>
<td><input class="input-group" type="file" name="user_image" accept="image/*" /></td>
</tr>
<tr>
<td><button type="submit" name="btn-signup">Sign Me Up</button></td>
</tr>
<tr>
<td><a href="index.php">Sign In Here</a></td>
</tr>
</table>
</form>
</div>
</center>
</body>
</html>