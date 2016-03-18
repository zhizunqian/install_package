<?php
// sleep(5);


sleep(2);

$mysqli = new mysqli("localhost", "root", "", "test");
// 错误提示
if ($mysqli->connect_errno) {
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}

$query = "SELECT * FROM student ORDER by ID";
$result = $mysqli->query($query);

// $row = $result->fetch_array(MYSQLI_ASSOC);
// $row = $result->fetch_array(MYSQLI_NUM);
$row = $result->fetch_all(MYSQLI_ASSOC);
// echo "<pre>";
echo json_encode($row);
// precint_r($row);
// echo "</pre>";
/*printf ("%s (%s)\n", $row[0], $row[1]);

$row = $result->fetch_array(MYSQLI_ASSOC);
printf ("%s (%s)\n", $row["Name"], $row["CountryCode"]);

$row = $result->fetch_array(MYSQLI_BOTH);
printf ("%s (%s)\n", $row[0], $row["CountryCode"]);

$result->free();

$mysqli->close();*/
?>