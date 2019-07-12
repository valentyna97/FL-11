function isInteger(num) {
    if(num % 1 === 0){
        return true;
    }
    return false;
}
console.log( isInteger(5) );
console.log(isInteger(5.1));