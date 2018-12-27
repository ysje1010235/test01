console.log($("#bt_run")[0]);
console.log(document.getElementById("#bt_run"));

 $("#bt_run").click(function(){
/* $("#box1").animate({
 "margin-left":"90%",
 "margin-top":"100px"
 },1000,"linear",function(){
	 $(this).css({
		"margin-left":0,

	 }); 
 }) */

 //애니메이트할것(함수),시간,효과,끝난다음나오는것(함수)

 /* $(".box").eq(0).animate({"left":"90%"},1000,function(){
	console.log("0번박스 이동 끝")
  });
  $(".box").eq(1).animate({"left":"90%"},1000,function(){
	console.log("0번박스 이동 끝")
  }); */

 
	/* $(".box").eq(0).stop(true,true).animate({"left":"90%"},1000, function(){
		  //console.log("0번 박스 이동 끝!");
		  $(this).stop().animate({"left":0},1000);
 
	});
	$(".box").eq(1).delay(1000).animate({"left":"90%"},1000,function(){
			 console.log("1번 박스 이동 끝!");
 
	}); */

/* var speed = 1000;
$(".box").each(function(i){
	$(this).delay(i*speed).animate({"left":"90%"},speed,function(){
      $(this).animate({"left":0},speed);

	});
});
 */
$(".box").eq(0).stop().animate({"left":"90%"}, 1000, function(){
	$(this).stop().animate({"left":0}, 1000);
	$(".box").eq(1).stop().animate({"left":"90%"}, 1000, function(){
		$(this).stop().animate({"left":0}, 1000);
		$(".box").eq(2).stop().animate({"left":"90%"}, 1000, function(){
			$(this).stop().animate({"left":0}, 1000);
		});
	});
});
});



