let ticketNo;

//Вводим номер билета и проверяем, чтобы он не был десятичным, текстом, слишком большим или меньше нуля
do{
    ticketNo = Number(prompt('Введите номер битела от 0 до 999999' ));
    if (!Number.isInteger(ticketNo)|| isNaN(ticketNo) || ticketNo >= 10**6 || ticketNo <= 0) {alert('Неверный ввод. Введите целое число от 0 до 999999')}
}while(!Number.isInteger(ticketNo) || isNaN(ticketNo) || ticketNo >= 10**6 || ticketNo <= 0);

//Превращаем введенное чило в строку
let ticketNoStr = ticketNo.toString();

//Проверяем длину веденного номера битела, если меньше 6, то дозаполняем '0'
if (ticketNoStr.length<6){
    ticketNoStr = '0'.repeat(6-ticketNoStr.length) + ticketNoStr;
}
console.log(ticketNoStr);

//Проверяем счастливый ли билет и выводим ответ
if ((+ticketNoStr[0] + +ticketNoStr[1] + +ticketNoStr[2]) == (+ticketNoStr[3] + +ticketNoStr[4] + +ticketNoStr[5])){
    alert('YES');
}
else{alert('NO')}
