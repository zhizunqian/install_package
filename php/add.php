<?php 
sleep(2);
	$mysqli=new mysqli("localhost","root","","test");
	// ------------------------------增
	$sql = "INSERT INTO `student`( `xuehao`, `name`, `sex`, `age`, `score`) VALUES (100,\"A\",\"AA\",12,12)";
	$mysqli->query($sql);
 ?>