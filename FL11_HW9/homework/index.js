function getNumbers(arr){
    let str = arr.match(/\d+/g);
    if (str !== null) {
        let str1= Array.from(str, Number);
        return str1;
    }else{
        return [];
    }

}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));


function findTypes() {
    let arr =[];
    let count =0;
    let newArr=[];
    let current = null;
    let argLen=arguments.length;
    for (let j=0; j<argLen; j++) {
        let result = typeof arguments[j];
        arr.push(result);
    }
    for (let i=0; i<arr.length+1; i++) {
        arr.sort();
        if (arr[i] !==current) {
            if (count > 0) {
                newArr.push(current + ':' + count);
            }
            current = arr[i];
            count = 1;
        } else {
            count++;
        }
    }

    console.log(newArr);
}
findTypes('number');
findTypes(null, 5, 'hello');
findTypes(null, 5, 'string', 6, 'string');

function executeforEach(arr, element) {
    let arrLen = arr.length;
    for (let j = 0; j < arrLen; j++) {
        element(arr[j]);
    }
}
function element(el) {
    console.log(el)
}
executeforEach([1,2,3],
    function(el) {
    console.log(el)
});

function mapArray(arr, counter) {
    let arrLen=arr.length;
    for (let j = 0; j < arrLen; j++) {
        arr[j] = counter(arr[j]);
    }
    executeforEach(arr, element);
    return arr;
}
function counter(el) {
    const value =3;
    return el + value
}
mapArray([2, 5, 8],
    function(el) {
    return el + 3
});

function filterArray(arr, filter) {
    let arrFil = new Array();
    let arrLen = arr.length;
    for (let j = 0, k = 0; j < arrLen; j++) {
        if (filter(arr[j])) {
            arrFil[k] = arr[j];
            k++;
        }
    }
    executeforEach(arrFil, element);
    return arrFil;
}
function filter(el) {
    const value = 3;
    return el > value;
}
filterArray([2, 5, 8],
    function(el) {
    return el > 3
});

function showFormattedDate(data){
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    switch(month.toString()) {
        case '0':
            month='Jan';
            break;
        case '1':
            month='Feb';
            break;
        case '2':
            month='Mar';
            break;
        case '3':
            month='Apr';
            break;
        case '4':
            month='May';
            break;
        case '5':
            month='Jun';
            break;
        case '6':
            month='Jul';
            break;
        case '7':
            month='Aug';
            break;
        case '8':
            month='Sep';
            break;
        case '9':
            month='Oct';
            break;
        case '10':
            month='Nov';
            break;
        case '11':
            month='Dec';
            break;
        default:
            console.log('I don\'t know month value');
            break;
    }

    console.log('Date: '+month+' '+day+' '+year);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(data){
    let date = new Date(data);
    let monCount = 12;
    let dayCount = 31;
    if (date.getMonth() < monCount) {
        if (date.getDate() < dayCount) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(dataOne, dataTwo) {
    const hour = 24;
    const sec = 60;
    const milliSec = 1000;
    let difference;
    if (dataOne < dataTwo) {
        difference = dataTwo.getTime() - dataOne.getTime();
    } else {
        difference = dataOne.getTime() - dataTwo.getTime()
    }
    let day = Math.round(difference/(milliSec*sec*sec*hour));
    return day;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
    let age = [];
    let peopleAd = [];
    const year = 365;
    let currentDate = new Date().toUTCString();
    let dataLen=data.length;
    for (let j = 0; j < dataLen; j++) {
        if (data[j].hasOwnProperty(' birthday ')) {
            age[j] = data[j][' birthday '];
        }
    }
    let ageLen= age.length;
    for (let j = 0; j < ageLen; j++) {
        peopleAd[j] = daysBetween(new Date(currentDate), new Date(age[j]));
        peopleAd[j] /= year;
        peopleAd[j] = Math.round(peopleAd[j]);
    }
    peopleAd = filterArray(peopleAd, filter);
    function filter(el) {
        const value = 18;
        return el > value;
    }
    let peopleAdLen=peopleAd.length;
    console.log(peopleAdLen);
}
getAmountOfAdultPeople([
        {
            '_id': '5b5e3168c6bf40f2c1235cd6',
            'index': 0,
            ' birthday ': '2016-03-18T00:00:00',
            'eyeColor': 'green',
            'name': 'Stein',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e3168e328c0d72e4f27d8',
            'index': 1,
            ' birthday ': '1991-02-11T00:00:00',
            'eyeColor': 'blue',
            'name': 'Cortez',
            'favoriteFruit': 'strawberry'
        },
        {
            '_id': '5b5e3168cc79132b631c666a',
            'index': 2,
            ' birthday ': '1984-04-17T00:00:00',
            'eyeColor': 'blue',
            'name': 'Suzette',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e31682093adcc6cd0dde5',
            'index': 3,
            ' birthday ': '1994-04-17T00:00:00',
            'eyeColor': 'green',
            'name': 'George',
            'favoriteFruit': 'banana'
        }
    ]
);

function keys(arr){
    let arrKey = [];
    let j = 0;
    for (let name in arr) {
        if (arr.hasOwnProperty(name)) {
            arrKey[j] = name;
            j++;
        }
    }
    return arrKey;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(arr){
    let array = [];
    let j = 0;
    for (let name in arr) {
        if (arr.hasOwnProperty(name)) {
            array[j] = arr[name];
            j++;
        }
    }
    return array;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));