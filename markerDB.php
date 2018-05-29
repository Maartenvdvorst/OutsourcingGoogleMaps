<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "map";
$datatable = "markers";

//$name = $_POST['name'];
//$latlng = $_POST['latlng'];
$funct = $_POST['funct'];

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//echo "Connected successfully  ";


if($funct === 'create')
{
  createMarker($_POST['name'],  $_POST['lat'],$_POST['lng']);
}


if ($funct === 'fetch')
{
  getMarker();
}

if ($funct === 'SetEigenschap')
{
  SetEigenschap($_POST['lat'],$_POST['lng'],$_POST['eigenschap']);
}
if ($funct === 'GetEigenschap')
{
  GetEigenschap($_POST['lat'],$_POST['lng']);
}



function SetEigenschap($lat,$lng,$eigenschap){
		  global $conn;
		$sql = "update markers set Eigenschap = CONCAT(Eigenschap,'$eigenschap ###') where lat = '$lat' and lng = '$lng'";
		if ($conn->query($sql) === TRUE) {
			echo "New record created successfully  ";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

}

function GetEigenschap($lat,$lng){
	$allmarkers = array();
		  global $conn;
		$sql = "select eigenschap from markers where lat = '$lat' and lng = '$lng'";
		$result = $conn->query($sql);
  if ($result->num_rows > 0)
  {
    while ($row = $result->fetch_assoc())
    {
		
		$eigenschappen = explode("###",$row['eigenschap']);
    }
  }else{
    echo "0 results";
  }
 
  echo json_encode($eigenschappen, JSON_PRETTY_PRINT);

}
function createMarker($name, $lat, $lng)
{
  global $conn;
$sql = "INSERT INTO markers (name, lat,lng) VALUES ( '$name', '$lat','$lng')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully  ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

}

function getMarker()
{
  
$allmarkers = array();
//var allmarkers = new Array();

  global $conn;
  $sql = "SELECT ID, name, lat, lng FROM markers";

  

  $result = $conn->query($sql);
  if ($result->num_rows > 0)
  {
    while ($row = $result->fetch_assoc())
    {
    //$newdata = array( 'name' => $row["name"], 'latlng' => $row["latlng"]);
   // $newdata = { "name" :  $row["name"], "latlng" : $row["latlng"] }
    array_push($allmarkers, array( "name" => $row["name"], "lat" => $row["lat"], "lng" => $row["lng"]));
    }
  }else{
    echo "0 results";
  }
  

  /*
  foreach ($allmarkers as $vals)
  {
    foreach ($vals as $st)
    {
      echo $st . "\n";
    }
  }

  //*/
  echo json_encode($allmarkers, JSON_PRETTY_PRINT);
}

?>