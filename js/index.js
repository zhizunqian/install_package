$(function(){
/*	$("li:first-child").bind("click",function(){
		var a=$(this).attr("data-role");
		$(".iframe").attr("src",a);
	})
	$("li:last-child").bind("click",function(){
		var a=$(this).attr("data-role");
		$(".iframe").attr("src",a);
	})*/

	var restful={
		select:"/php/select.php",
		add:"/php/add.php",
		delete:"/php/delete.php",
		update:"/php/updata.php",
	}
	var d;
	var $table=$("table");
	// ---------------------------查
	$table.bind("xuanran",function(){
		$(this).find("tbody").empty().html(
			d.map(function(v){
				return ' <tr><th scope="row"><input type="text" name="xuehao" data-role="'+v.id+'" value="'+v.xuehao+'"></th> <td><input type="text"  data-role="'+v.id+'" name="name" value="'+v.name+'"></td> <td> 男<input data-role="'+v.id+'" type="radio" name="sex'+v.id+'" value="nan"> 女<input type="radio" data-role="'+v.id+'" name="sex'+v.id+'" value="nv"> </td><td>'+v.age+'</td> <td>'+v.score+'</td> <td><input type="checkbox" name="item" value="'+v.id+'"></td> </tr>'
			}).join(" ")
			);
		var x = $table.find('input[name^=sex]');
		x.prop('checked',true);
		d.forEach(function(value,i){
			if( value.sex == "nan" ){
				x.eq(i*2).prop('checked',true);
			}
		})
	 })


	var getdata=function(){
		$.ajax({
			url:restful.select,
			dataType:"json",
		})
		.done(function(data){
			d=data;
			$table.trigger("xuanran");
		})
	}
	setTimeout(function(){
		getdata();
		
	},0)
	// -----------------------------------------------------增
	$(".s3").bind("click",function(){
		$.ajax({
			url:restful.add,
		})
		.done(function(){
			getdata();
		})
	})
	//-------------------- ---------------------------单删除
	/*$(".s1").bind("click",function(){

		$.ajax({
			url:restful.delete,
		})
		.done(function(){
			var ids=$(":checked").parent().parent().children().first().text();
			if(!ids){
				alert("NO!");
				return;
			}
			$.ajax({
				url:restful.delete+"?id="+ids,
			})
			.done(function(){
				d=d.filter(function(v){
					return v.id!=ids;
				})
			$table.trigger("xuanran");
			})
		})
	})*/
	// ----------------------------------------------------选择
	var $xuanze = $('#xuanze');

	$xuanze.bind("click",function(){
		if($(this).prop("checked")){
			$table.find("input[name=item]").prop("checked",true);
		}
		else{
			$table.find("input[name=item]").prop("checked",false);
		}
	})

	$table.delegate("input[name=item]","click",function(){
		if(!$(this).prop("checked")){
			$xuanze.prop("checked",false);
		}
		if($table.find("input[name=item]:checked").length==d.length){
			$xuanze.prop("checked",true);
		}
	})
	// ------------------------------------------------------更新数据
	var timerId;
  $table.delegate('input[name=name],input[name=xuehao]','keyup',function(){
    var that =  this;
    var id = $(this).attr('data-role');
    clearTimeout(timerId);
    timerId = setTimeout(function(){
      $.ajax({
        url:restful.update,
        type:'post',
        data:{shuxing:$(that).prop('name'),value:$(that).val(),id:id}
      }).done(function(d){
      })
    },1000)
  })

	$table.delegate('input[name^=sex]','click',function(){
    var id = $(this).attr('data-role');
    $.ajax({
      url:restful.update,
      type:'post',
      data:{shuxing:'sex',value:$(this).val(),id:id}
    }).done(function(){
    })
  })

	// ----------------------------------------------------多删除
	$(".s1").bind("click",function(){
		var ids=$table.find("input[name=item]:checked").map(function(){
			return $(this).val();
		}).get();

		$.ajax({
			url:restful.delete+"?id="+ids,
			type:"post",
			data:{x:ids},
		})
		.done(function(){
			if(!ids.length){
				alert("NO!");
				return;
			}
			$xuanze.prop("checked",false);
			d=d.filter(function(v){
				return $.inArray(v.id,ids)==-1;
			})
			$table.trigger("xuanran");
		})
	})
	// --------------------同步中
	$(document).ajaxSend(function(){
		$(".s4").text("同步中.....");
	})
	$(document).ajaxSuccess(function(){
		$(".s4").text("同步完成");
	})
})