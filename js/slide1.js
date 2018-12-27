var n = 0;
var interval = setInterval(ani, 2000);
var end = $(".banner").lenght - 1;

$(window).on("resize",function(){
  $(".banners").height( $(".banner").eq(0).height());
}); //브라우저 사이즈가 변한다면 리사이즈라는 이벤트가 발생한다, 리사이즈라는 이벤트가 발생하면 이런 함수가 실행된다.
//이런 함수: 배너의 첫번째 사이즈의 높이
$(window).trigger("resize"); //키자마자 리사이즈해줘라




$(".banner").each(function(i){
  $(this).css({"left":(i*100)+"%"});
});



function ani(){
	$(".banners > ul").stop().animate({"left":(-n*100)+"%"},500,function(){
	 //n++; n=n+n
	 if(n == end){n = 0;}		
	 else{n ++;}
	});
}