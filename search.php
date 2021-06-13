<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "beach";


$conn = new mysqli($host,$user,$password,$dbname);

$sql = "SELECT names  FROM details";
$result = $conn->query($sql);
$product['name'] = array();

if ($result->num_rows > 0) {


    while($row = $result->fetch_assoc()) {
      
        $productitem = array(
            "name" => $row['names'] 
            
            
            );
         array_push($product['name'],$productitem);
       
       
    }

    echo json_encode($product);
    


    } else {
      echo "0 results";


}

?>