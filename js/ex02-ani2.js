/* function boxAni(){
	var speed = 1000;
	$(".box").each(function(i){
		$(this).delay(i*speed).animate({"left":"90%"},speed,function(){
		  $(this).animate({"left":0},speed);
		});
	});
	};
	 
	 $("#bt_run").on("click",function(){
	 $(this).off("click");
	boxAni();
	}); */

	function boxAni(){
		var speed = 1000;
		$(".box").each(function(i){
			$(this).delay(i*speed).animate({"left":"90%"}, speed, function(){
				$(this).animate({"left":0}, speed);
				//console.log($(this).index(), $(".box").length);
				if($(this).index() == $(".box").length - 1) {
					$("#bt_run").prop("disabled", false);
				}
			});
		});
	}
	$("#bt_run").on("click", function(){
		$(this).prop("disabled", true);
		boxAni();
	});