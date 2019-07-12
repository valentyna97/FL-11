function addOne(x){
    return x+1;
}

function pipe () {
    let result = arguments[0];
    let argLen=arguments.length;
    for (let j=1; j<argLen; j++) {
        let temp = arguments[j](result);
        result = temp;
    }
    return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));