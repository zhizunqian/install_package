<?php 
sleep(2);
	/*echo "<pre>";
	print_r($_GET);
	echo "</pre>";*/
	/*$xx=$_GET["id"];
	$mysqli=new mysqli("localhost","root","","test");
	$sql = "DELETE FROM `student` WHERE `id`= ".$tmp;
	$mysqli->query($sql);*/
	
	$ids = $_POST['x'];
	$tmp = implode(" OR `id`=",$ids);
	$mysqli = new mysqli('localhost','root','','test');
	$sql = "DELETE FROM `student` WHERE `id`=".$tmp;
	$mysqli->query($sql);
?>

