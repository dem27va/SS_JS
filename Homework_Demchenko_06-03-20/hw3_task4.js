let inStr = prompt('Введите строку');
let refinedStr = '';
let orderArr = [];

for (let i = 0; i < inStr.length; i++){
    if (Number.isInteger(+inStr[i]) && inStr[i] != ' '){
        refinedStr += '';
        orderArr.push(+inStr[i]-1);
    } else {
        refinedStr += inStr[i]
    }
}
console.log(inStr);
console.log(refinedStr);
console.log(orderArr);

let splitedStr = refinedStr.split(' ');
let outArr = [];

for (let j = 0; j < orderArr.length; j++){
    outArr[orderArr[j]] = splitedStr[j];
}
console.log(outArr);
let outStr = outArr.join(' ');
alert(outStr);