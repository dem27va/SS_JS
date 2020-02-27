// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
/*
let name = prompt('Как тебя зовут?')
alert('Привет, ' + name + '!');
*/

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//Текущий год укажите в коде как константу.
/*
const CURRENT_YEAR = 2020;
let birthYear = prompt('Please enter your year of birth');  
alert('You are ' + (CURRENT_YEAR-Number(birthYear)) + ' yaers old');     //Выводим возраст на английском, чтобы избежать проблем с "год, года, лет"
*/

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
/*
let sideLength = prompt('Введите длину стороны квадрата');
alert('Периметр квадрата равен ' + Number(sideLength)*4);
*/

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
/*
const PI = 3.14159;
let radius = prompt("Введите радиус окружности");
let area = PI*(radius**2);
alert(area);  
*/

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
//Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
/*
let travelDist = prompt('Введите расстояние между двумя городами в километрах');
let travelTime = prompt('За сколько часов Вы хотите доехать из города А в город Б?');
let travelSpeed = travelDist / travelTime;
alert(`Требуемая скорость составляет ${travelSpeed}км/ч`);
*/

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
//Курс валюты храните в константе.
/*
const USD_EUR_RATE = 0.91;
let inUSD = prompt('Введите сумму в долларах США');
alert(`${inUSD} долларов США соответствует ${(inUSD*USD_EUR_RATE)} евро`);
*/

// 7. Пользователь указывает объем флешки в Гб.
//Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку
/*
let fileSize = 820;
let StorageCapacity = (prompt('Укажите объем флешки в Гб'))*1024;
let numberOfFiles = (StorageCapacity-StorageCapacity%fileSize)/fileSize;
alert(`На флешку поместится ${numberOfFiles} файла(ов) размером 820 Мб`);
*/

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
//Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
/*
let moneyBalance = prompt('Сколько у Вас денег?');
let chocoPrice = prompt("Сколько стоит шоколадка");
let numberOfChoco = (moneyBalance - moneyBalance%chocoPrice)/chocoPrice;
alert(`Вы можете купить ${numberOfChoco} шоколадки(ок) и у вас останется ${moneyBalance%chocoPrice} денег`);
*/

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед.
//Для решения задачи вам понадобится оператор % (остаток от деления).

let inputNumber = prompt('Введите трехзначное число');
let outputDigit1 = inputNumber%10;
let outputDigit2 = parseInt(inputNumber/10%10);
let outputDigit3 = parseInt(inputNumber/100);
alert(String(outputDigit1) + outputDigit2 + outputDigit3);