<?php 
	// $xuehao=$_GET["x"];
	/*$mysqli=new mysqli("localhost","root","","test");
	$sql = "UPDATE `student` SET`{$_POST['shuxing']}`="{$_POST['value']}" WHERE `id`='{$_POST['id']}'";
	$mysqli->query($sql);*/


	  $mysqli = new mysqli('localhost','root','','test');
   $sql = "UPDATE `student` SET `{$_POST['shuxing']}`='{$_POST['value']}' WHERE `id`='{$_POST['id']}'";     //修改
   $mysqli->query($sql);

 //创建对象对数据哭进行操作
  // echo json_encode($_POST);

  /*$my=new mysqli('localhost','root','','test');
//这其实是指定你的php文件区域
   $sql = "UPDATE `student` SET `{$_POST['shuxing']}`='{$_POST['value']}' WHERE `id`={$_POST['id']}";
 $my->query($sql)*/

?>

 <!-- ?> -->