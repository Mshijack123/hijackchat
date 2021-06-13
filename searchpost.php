<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "beach";


$conn = new mysqli($host,$user,$password,$dbname);

$sql = "SELECT names , posts FROM details where posts IS NOT NULL";
$result = $conn->query($sql);
$product['data'] = array();

if ($result->num_rows > 0) {


    while($row = $result->fetch_assoc()) {
      
        $productitem = array(
            "name" => $row['names'] ,
            "posts"=>$row['posts']
            
            
            );
         array_push($product['data'],$productitem);
       
       
    }

    echo json_encode($product);
    


    } else {
      echo "0 results";


}

?>