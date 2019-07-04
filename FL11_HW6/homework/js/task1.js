let a1 = prompt('Enter a1', '');
let a2 = prompt('Enter a2', '');
let b1 = prompt('Enter b1', '');
let b2= prompt('Enter b2', '');
let c1= prompt('Enter c1', '');
let c2= prompt('Enter c2', '');
const middle = 2;

let number1 = (parseFloat(a1)+parseFloat(b1))/middle;
let number2 = (parseFloat(a2)+parseFloat(b2))/middle;

if (number1 === parseFloat(c1) && number2 ===parseFloat(c2)) {
	console.log(true);
}else{
	console.log(false);
}