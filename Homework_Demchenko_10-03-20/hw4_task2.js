const gameField = [[1, 1, 2],
                   [2, 1, 1],
                   [1, 2, 2]]
console.log(gameField);

//записывает в массив произведение элементов строк
function horizontal(arr){
    let horizArr = [];
    arr.forEach((el) => horizArr.push(el.reduce((pr, cur) => (pr * cur))));
    return horizArr;
}

//записывает в массив произведение элементов столбцов
function vertical(arr){
    let vertArr = [];
    for (i = 0; i < 3; i++){
        let acc = 1;
        for (j = 0; j < 3; j++){
            acc *= arr[j][i];
        }
        vertArr[i] = acc;
    }
    //console.log(verticalArr);
    //return verticalArr.some((el) => el == 1);
    return vertArr;
}

//возврящает произведение эл-тов по диагонали с 10 на 4 часа
function diagonal10_4(arr){
    let diag10_4Arr = [];
    arr.forEach((el, i) => diag10_4Arr.push(el[i])); 
    //console.log(diag10_4Arr);
    return diag10_4Arr.reduce((a, b) => a*b);
}

//возврящает произведение эл-тов по диагонали с 2 на 8 часов
function diagonal2_8(arr){
    let diag2_8Arr = [];
    arr.forEach((el, i) => diag2_8Arr.push(el[2-i])); 
    //console.log(diag2_8Arr);
    return diag2_8Arr.reduce((a, b) => a*b);
}

//Блок для проверок состояния доски чисто для справки
console.log('X horizontal is ' + horizontal(gameField).some ((el) => el == 1));
console.log('X vertical is ' + vertical(gameField).some ((el) => el == 1));
console.log('X diagonal 10-4 is ' + (diagonal10_4(gameField) == 1));
console.log('X diagonal 2-8 is ' + (diagonal2_8(gameField) == 1) + '\n\n');
console.log('0 horizontal is ' + horizontal(gameField).some ((el) => el / 8 == 1));
console.log('0 vertical is ' + vertical(gameField).some ((el) => el / 8 == 1));
console.log('0 diagonal 10-4 is ' + (diagonal10_4(gameField) / 8 == 1));
console.log('0 diagonal 2-8 is ' + (diagonal2_8(gameField) / 8 == 1));


//проверяем условия:
//если произведение эл-тов хотябы одной строки рано 0 - на поле еще есть место
//если произведение по горизонтали, вертикали или диагонялям равное 1 - победа Х
//если произведение по горизонтали, вертикали или диагонялям при делении на 8 дает 1 - победа 0
//в противном случае - ничья
function boardCheck(arr) {
    let result;
    if (horizontal(arr).some ((el) => el == 0)) {
        result = -1;
    } else if (horizontal(arr).some ((el) => el == 1) ||
                vertical(arr).some ((el) => el == 1) ||
                diagonal10_4(arr) == 1 ||
                diagonal2_8(arr) == 1) {
                    result = 1;
                } else if (horizontal(arr).some ((el) => el / 8 == 1) ||
                vertical(arr).some ((el) => el/ 8 == 1) ||
                diagonal10_4(arr) / 8 == 1 ||
                diagonal2_8(arr) / 8 == 1){
                    result = 2;
                } else {
                    result = 0;
                }
    return result;
}

//выводим результат
switch (boardCheck(gameField)) {
    case -1:
        alert('Игра еще не завершена');
        break;
    case 1:
        alert('Побеждает "Х"!');
        break;
    case 2:
        alert('Побеждает "0"!');
        break;
    case 0:
        alert('Ничья');
        break;
    default:
        alert('Похоже, произошла ошибка');
}