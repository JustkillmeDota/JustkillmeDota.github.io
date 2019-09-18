function plus() {

var num1, num2, result;

num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1 + num2;

document.getElementById('rez').innerHTML = result;
}

function minus() {

var num1, num2, result;

num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1 - num2;

document.getElementById('rez').innerHTML = result;
}

function ymn() {

var num1, num2, result;

num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1 * num2;

document.getElementById('rez').innerHTML = result;
}

function delit() {

var num1, num2, result;

num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result = num1 / num2;

document.getElementById('rez').innerHTML = result;

if (num2 == 0) {
	alert('Деление на 0 невозможно!')
}
}
document.getElementById('slider-left');
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 128
	if (left == -640) {
		left = 0;
	}
	polosa.style.left = left+'px'
}

document.getElementById('slider-right');
var right = 0;

function sliderRight(){
	right = right + 128
	if (right == 128) {
		right = 0;
	}
	polosa.style.left = right+'px'
}
function findage(){

imp = document.getElementById("input").value;
imp = parseInt(imp);

if (imp < 18 && imp > 0) {
	alert("Пройти нельзя. Вход с восемнадцати лет!")
}
if (imp >= 18) {
	alert("Пройти можно.")
}
if (imp == -123456789987654321){
	alert('Нестеров Пидрила тупая!')
}
}
function calcul_two_plusa() {
		var num5, num6, rezalt;

		num5 = document.getElementById('n5').value;
		num5 = parseInt(num5);

		num6 = document.getElementById('n6').value;
		num6 = parseInt(num6);
		
		rezalt = num5 + num6;

		alert("результат: " + rezalt);
}
function calcul_two_minusa() {
		var num5, num6, rezalt;

		num5 = document.getElementById('n5').value;
		num5 = parseInt(num5);

		num6 = document.getElementById('n6').value;
		num6 = parseInt(num6);

		rezalt = num5 - num6;

		alert("результат: " + rezalt);
}
function calcul_two_ymna() {
		var num5, num6, rezalt;

		num5 = document.getElementById('n5').value;
		num5 = parseInt(num5);

		num6 = document.getElementById('n6').value;
		num6 = parseInt(num6);

		rezalt = num5 * num6;

		alert("результат: " + rezalt);
}
function calcul_two_delita() {
		var num5, num6, rezalt;

		num5 = document.getElementById('n5').value;
		num5 = parseInt(num5);

		num6 = document.getElementById('n6').value;
		num6 = parseInt(num6);

		rezalt = num5 / num6;

		alert("результат: " + rezalt);
}
