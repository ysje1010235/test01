var log = console.log;

function add(a,b){
return a + b;
}
log(add(10,20));

var add2 = function(a,b){
return a + b;
}
log(add2(11,22));

$("body").on("click",add2);

(function add3(a,b){
 log(a + b);
}(15,25));
//iife 즉시실행함수! 캡슐화가 가능하다. 괄호로 묶어서 객체지향으로 즉시실행하는거임. 근데 이렇게하면 외부에서 선언해도 안 먹음
//배포시 다른 사용자들이랑 함수가 겹치지않기 위해 캡슐화를 시키는거임

var person = {
  age:24,
  gender:'F',
  name:'재은',
  getName: function(){
return "제 이름은 "+this.name+"입니다";
 }
};
person.name = "창용";
console.log(person.getName());

//위의 함수로 캡슐화 예시+ 새로운 생성자 만들기
var Person = (function(){
var age = 25;
var gender = 'M';
function Person(){
this.age = age;

}
return Person;

}());

var sje = new Person();
log(sje.age);