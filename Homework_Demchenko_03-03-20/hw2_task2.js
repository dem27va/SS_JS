let valuesArr = [];
let amountArr = [];

//Вводим стоимости в массив с проверкой введенных значений в цикле do...while
for (let i = 1; i < 4; i++){
    let inputOK = false;
    let input = '';
    do{
        input = Number(prompt(`Введите цену песка вида ${i}`));
        if (input > 0 && input <= 100){
            valuesArr.push(input);
            inputOK = true;
        }
        else {alert('Неверный ввод. Введите число от 1 до 100')}
    }while(inputOK == false);
}

//Вводим веса в массив с проверкой введенных значений в цикле do...while
for (let j = 1; j < 4; j++){
    inputOK = false;
    input = '';
    do{
        input = Number(prompt(`Введите кол-во песка, помещающегося в емкость ${j}`));
        if (input > 0 && input <= 100){
            amountArr.push(input);
            inputOK = true;
        }
        else {alert('Неверный ввод. Введите число от 1 до 100')}
    }while(inputOK == false);
}

//Сортируем массивы по убыванию
valuesArr.sort(function(a, b) {return b - a});
amountArr.sort(function(a, b) {return b - a});

//Вычисляем и водим результат
let jackpot = valuesArr[0]*amountArr[0];
alert(`В случае наилучшего заполнения емкостей будет получено ${jackpot}руб.`);