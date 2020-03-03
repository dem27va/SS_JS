/*
//1. Запросить у пользователя его возраст и определить, кем он является: 
//ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...)

let age = prompt('Введите Ваш возраст');
switch(true){
    case (age >= 0 && age <= 12):{
        alert('Вы - ребёнок');
        break;
    }
    case (age > 12 && age <= 18):{
        alert('Вы - подросток');
        break;
    }
    case (age > 18 && age <= 60):{
        alert('Вы - взрослый');
        break;
    }
    case (age > 60):{
        alert('Вы - пенсионер');
        break;
    }
}
*/

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
/*
let input = +prompt('Введите число от 0 до 9');
let output = '';
switch(input){
        case 0: {
            output = ')';
             break;
            }
        case 1: {
            output = '!';
              break;
            }
        case 2: {
            output = '@';
            break;
            }
        case 3: {
            result = '#';
            break;
            }
        case 4: {
            output = '$';
            break;
            }
        case 5: {
            output = '%';
            break;
            }
        case 6: {
            output = '^';
            break;
            }
        case 7: {
            output = '&';
            break;
            }
        case 8: {
            output = '*';
            break;
            }
        case 9: {
            output = '(';
            break;
            }
        default: {
            output = 'Введите число от 0 до 9';
            }
         }
            
alert(output);
*/

//3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
/*
let num = prompt('Введите трехзначное число');
let result = (num[0] == num[1] || num[0] == num[2] || num[1] == num[2] || num[0]==num[1]==num[2]) ? 'Yes' : 'No';
alert(result);
*/

//4. Запросить у пользователя год и проверить, високосный он или нет. 
//Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

//Неработающий вариант, почему??
/*
let year = prompt('Введите год');
console.log(year%400, year%4, year%100);
console.log(year%400 == 0 || (year%4==0 && year%100 !=0));
(year%400 == 0 || (year&4 == 0 && year%100 != 0)) ? alert('Високосный') : alert('Невисокосный');
*/

//Работающий вариант
/*
let year = prompt('Введите год');
if (year%400==0||(year%4==0 && year%100!=0)){
    alert ('Високосный');  
} else {
    alert ('Невисокосный');
}
*/

//5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.
/*
let num = prompt('Введите пятизначное число');
(num[0] == num[4] && num[1] == num[3]) ? alert('Палиндром') : alert('Не палиндром');
*/

//6. Написать конвертор валют.
//Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести:
//EUR, UAN или AZN, и получает в ответ соответствующую сумму.
/*
const rateEUR = 0.9;
const rateUAH = 24.86;
const rateAZN = 1.70;

let inUSD = prompt('Введите сумму в долларах');
let currency = prompt(`Выберите валюту: для EUR введите 1;
для UAH введите 2;
для AZN введите 3`);

switch (currency) {
    case '1':{
        alert(inUSD*rateEUR + ' EUR');
        break;   
    }
    case '2': {
        alert(inUSD*rateUAH + ' UAH');   
        break;  
    }
    case '3':{
        alert(inUSD*rateAZN + ' AZN');
        break; 
    }
}
*/

//7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
/*
let purchasePrice = prompt('Введите сумму покупки');
let discount = 0;

switch(true){
     case (purchasePrice>=200 && purchasePrice<300):{
        discount = 3;
        break;  
     }
     
     case (purchasePrice>=300 && purchasePrice<500):{
        discount = 5;
        break;  
     }
     case (purchasePrice>=500):{
        discount = 7;
        break;  
     }
}

alert(`Сумма к оплате со скидкой: ${purchasePrice-purchasePrice/100*discount}`);
*/

//8. Запросить у пользователя длину окружности и периметр квадрата.
//Определить, может ли такая окружность поместиться в указанный квадрат.
/*
let circle = +prompt('Введите длину окружности');
let perimeter = +prompt('Введите периметр квадрата');

(circle / Math.PI <= perimeter / 4) ? alert('Поместится') : alert('Не поместится');
*/

//9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//За  каждый правильный ответ начисляется 2 балла. 
//После вопросов выведите пользователю количество набранных баллов.
/*
let score = 0;
let questionPrompts = [
    'Какого цвета яблоки? \n(a) Зеленые \n (b) Синие \n (c) Коричневые',
    'Сколько дней в неделе? \n(a) Три \n (b) Пять \n (c) Семь',
    'Кто обитает на дне океана? \n(a) Чудище болотное \n (b) SpongeBob SquarePants \n (c) Собака Баскервилей'
]
let answers = ['a', 'c', 'b'];
console.log(questionPrompts.length);

for (i=0; i in questionPrompts; i++){
    let ans = '';
    ans = prompt(questionPrompts[i]);
    if (ans == answers[i]) {
        score +=2;
    }
}
alert(`Вы набрали ${score} очков`);
*/

//10. Запросить дату (день, месяц, год) и вывести следующую за ней дату.
//Учтите возможность перехода на следующий месяц, год, а также високосный год
let day = +prompt('Введите день');
let month = +prompt('Введите месяц');
let year = +prompt('Введите год');
let wrongInput = false;

function bissextile(year) {
    let isBissextile = false;
    if (year%400==0||(year%4==0 && year%100!=0)) {
        isBissextile = true;
    }
    return isBissextile;
}

switch (true) {
    case bissextile(year) && (day == 28 && month == 2): {
        day = 29;
        break;
    }
    case !bissextile(year) && (day == 28 && month == 2): {
        day = 1;
        month = 3;
        break;
     }
    case day == 31 && month == 12: {
        day = 1;
        month = 1;
        year += 1;
        break;
    }
    case day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10): {
        day = 1;
        month += 1;
        break;
    }
    case day == 30 && (month == 4 || month == 6 || month == 9 || month == 11): {
        day = 1;
        month += 1;
        break;
    }
    case day >= 1 && day < 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12): {
        day += 1;
        break;
    }
    case (day >= 1 && day < 28 && month == 2) || (day >= 1 && day < 30 && (month == 4 || month == 6 || month == 9 || month == 11)): {
        day += 1;
        break;
    }
    default: {
        wrongInput = true;        
    }
}
(wrongInput)? alert('Введите корректную дату') : alert(`${day}.${month}.${year}`);

