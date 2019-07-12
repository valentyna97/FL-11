function getMin() {
    let argLen = arguments.length,
        minEl = arguments[0];
    for (let i = 0; i < argLen; i++) {
        if (minEl > arguments[i]) {
            minEl = arguments[i];
        }
    }
    return parseInt(minEl);
}
console.log (getMin(3,0,-3));