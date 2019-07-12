function reverseNumber(reversed) {
    let str ='';
    let reversedNumber = ''+reversed;
    let firstEl= reversedNumber < 0? 1:0;
    let srtLen = reversedNumber.length;
    for (let i = srtLen - 1; i >= firstEl; i--) {
        str += reversedNumber[i];
    }
    let rev = reversedNumber < 0 ? '-' + str : str;
    return parseInt(rev);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));