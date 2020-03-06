function twoOldest (arr){
    //let oldestArr = [];

    arr.sort(function(a, b) {return b - a});
    //oldestArr.push(arr[1]);
    //oldestArr.push(arr[0]);

    //return oldestArr;
    return arr.slice(-2);
}

//создаем пустой массив исходных данных и переменную с кол-вом эл-тов в нем
let inputArr = [];
let arrLength = 4;

//заполняем массив
for (let i=0; i < arrLength; i++){
    inputArr[i] = Number(prompt('Введите возраст'));    
}

//вызываем функцию и выводим результат
console.log(twoOldest(inputArr));
alert(`Два самых старших возраста: ${twoOldest(inputArr)}`);


