<?php
$conn = mysqli_connect("localhost","root","","cc105",3307,"C:/xampp/mysql/mysql.sock");
$database = mysqli_select_db($conn,'cc105');

if($conn -> connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM registeredusers";
$result = $conn->query($sql);
if($result->num_rows > 0)
{
    while($row[] = $result -> fetch_assoc())
    {
        $tem = $row;
        $json = json_encode($tem);
    }
}else{
    echo "No Results found.";
}
echo $json;

$conn->close();
?>