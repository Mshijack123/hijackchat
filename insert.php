<?php
header("allow-control-access-origin: *");
$request = $_SERVER["REQUEST_METHOD"];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "beach";
$dbconnect;
$conn;

//$_POST = json_decode(array_keys($_POST)[0], true);
   
//var_dump($_POST);

$conn = mysqli_connect($servername, $username, $password, $dbname);
   // $query = mysqli_query($dbconnect," INSERT INTO mobile ('names','phoneno') VALUES ('hi','702393') ";
    // use exec() because no results are returned
    
    //$jsons = file_get_contents('php://input');

    // Converts it into a PHP object
   // $data = json_decode($jsons);
   $data = json_decode(file_get_contents('php://input'), true);
    
   // echo $data["name"];
 // $_POST = json_decode(file_get_contents('https://php://input'));
    
    
    
    
    
$sql = "INSERT INTO details (names,email)
VALUES ('".$data["name"]."', '".$data["email"]."')";

if (mysqli_query($conn, $sql)) {
  echo "success";
  

    
  
  
  
  
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

