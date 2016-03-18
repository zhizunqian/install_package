$(function(){
	// var data;
	// call=function(x){
	// 	return x;
	// }
	// $("<script>")
	// .attr("src","http://www.baidu.com")
	// .appendTo(document.body);

	setTimeout(function(){
		
	$.ajax({
		// url:"http://api.map.baidu.com/telematics/v3/weather?location=112.56,37.73&output=json&ak=F0PsTcEg0F5s0L9ayxio3GTA", 
		// url:"http://192.168.3.93/jsonp.js",
		url:"/php/tt.php",
		type:"post",
		data:{id:112},
		// ---------------------------------------------------
		dataType:"json",
		// jsonpCallback:"call",
		// context:$(document),
		// converters:"json",
		// dataFilter:function(data,type){
		// 	return "190000000";
		// },
		// global:false,


		// -------------------------------------------------
		success:function(data){
			console.log(data);
		},
		error:function(){
			console.log(8)
		},

		// async:false,
		// -----------------------------------------------------------
		// accepts:"text/a",
	})	
	// $(document).click(function(){
	// 	alert(1)
	// })
	/*$(document).ajaxSuccess(function(){
		$(document.body).css("background","red");
		})*/

	// $("h1").load("/css/a.html");
	})
	$(document).ajaxSend(function(){
		console.log("send")
	})
	$(document).ajaxStart(function(){
		console.log("start")
	})
	$(document).ajaxStop(function(){
		console.log("stop")
	})
	$(document).ajaxSuccess(function(){
		console.log("success")
	})
})