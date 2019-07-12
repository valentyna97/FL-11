function addOne(x){
    return x+1;
}

function pipe (...funcs) {
    return function(x) {
        let result = x;
        for (let func of funcs) {
            result = func(result)
        }

        return result;
    }
}

console.log(pipe(addOne)(1));
console.log(pipe(addOne, addOne)(1));