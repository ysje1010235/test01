var n = 1	;

$(".banners > ul").append($(".banner").eq(0).clone()); //마지막이미지를 1번 이미지로 복ㅈㅔ

var end = $(".banner").length - 1;
var interval = setInterval(ani, 2000); //애니실행속도

$(window).on("resize", function(){
	$(".banners").height($(".banner").eq(0).height());
}).trigger("resize");

$(".banner").each(function(i){
	$(this).css({"left":(i*100)+"%"});
});

function ani(){
	$(".banners > ul").stop().animate({"left":(-n*100)+"%"}, 500, function(){ //애니속도
		if(n == end) {
			$(this).css({"left":0});
			n = 0;
		}
		else n++;
	});
}