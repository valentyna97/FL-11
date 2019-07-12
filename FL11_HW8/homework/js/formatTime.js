function formatTime(num){
    let daysNum = Math.floor(num/1440);
    let hourNum = Math.floor((num -(daysNum*1440))/60);
    let minutesNum = Math.round(num%60);

    if(daysNum > 0){
        return(daysNum + " day(s) " + hourNum + " hour(s) "+ minutesNum +" minute(s)");
    }else{
        return(daysNum + " day(s) " + hourNum + " hour(s) "+ minutesNum +" minute(s)");
    }
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
