var button1= document.querySelector('#button1');
var button2= document.querySelector('#button2');


button1.addEventListener('click', function(){
    result.innerHTML = "I'm right"
})

button2.addEventListener('click', function(){
    result.innerHTML = "No, I'm right!"
})

var object = document.querySelector('#object');

object.addEventListener('mouseover', function(){
	alert('Hey, I told you not to hover over me!')
})

document.addEventListener("keydown", function(event){
	var x = event.keyCode;
	var y = String.fromCharCode(x);
	document.getElementById("h1").innerHTML = y;

});

var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');

submit.addEventListener('click', check);

function check(){
	// console.log(username.value)
	if (username.value.length <= 14 && password.value == '12345678'){
		msg.innerHTML = "Congrats on knowing your username and password!"
	} else { 
		msg.innerHTML = "Incorrect username or password"
	}
};