$(function(){
	var data;
	call=function(x){
		data=x;
	};
	$("<script>").attr("src","http://192.168.2.240/php/jsonp.js").appendTo(document.body);
})