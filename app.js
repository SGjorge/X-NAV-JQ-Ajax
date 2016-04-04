$(document).ready(function(){
	var changeDom = function(f){
		$.ajax(f)
		.done(function(data){
			$("#second").html("txt selected: " + data);
		})
		.fail(function( jqXHR,textStatus,errorThrown){
			$("#second").html("fail by: " + errorThrown);
		})
		.always(function(){
			alert("finish AJAX");
		});
	};

	var fich;
	$("li").click(function(what){
		fich = $(what.currentTarget).html();
		changeDom(fich);
	});
});