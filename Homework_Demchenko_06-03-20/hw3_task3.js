let inputStr = prompt('Введите фразу');

splitedStr = inputStr.split(' ');
console.log(splitedStr);

let minLength = splitedStr[0].length;

for (let i = 0; i < splitedStr.length; i++){
    if (minLength > splitedStr[i].length){
        minLength = splitedStr[i].length;
        minInd = i;
    }
}

alert(`Исходная фраза:
       ${inputStr}. 
       Самое короткое слово состит из  ${minLength} символов`);