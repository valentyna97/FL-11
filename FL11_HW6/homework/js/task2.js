let a = prompt('Enter triangle sides length a', '');
let b = prompt('Enter triangle sides length b', '');
let c = prompt('Enter triangle sides length c', '');

if(!parseFloat(a) + parseFloat(b)>parseInt(c) 
	&& parseFloat(a) + parseFloat(c)>parseFloat(b) 
	&& parseFloat(b) + parseFloat(c)>parseFloat(a)){
	console.log('Triangle doesn’t exist');
}else{
	if (parseFloat(a) === parseFloat(b) && parseFloat(a)===parseFloat(c) && parseFloat(b)=== parseFloat(c)){
		console.log('Eequivalent triangle');
	} else { 
		if (parseFloat(a) === parseFloat(b) || parseFloat(b) === parseFloat(c) || parseFloat(c) ===parseFloat(a)){
		console.log('Isosceles triangle');
		}else{
			console.log('Normal triangle');
		}
	}
}