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
