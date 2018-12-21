// $("#box1").css("background-color","#ff0");


var test = "3"
$("#box1").css({"background-color": "#ff0"});
/* $("#box1").hover(function(){
  console.log("마우스올라감")
},function(){
  console.log("마우스내려감") 
}); */


$("#box1").on("mouseenter",function(){
	console.log("마우스올라감")
});
$("#box1").on("mouseleave",function(){
	console.log("마우스내려감")
});


console.log(test);