document.querySelector('.screen').innerHTML = ' <div class="tile"></div>'.repeat(100); //записываем в DIV "screen" 100 DIVов для плиток

let cooldown = 500; //задержка для setInterval
let lable = document.getElementById('lable');
//let tiles = document.querySelector('.screen').children;
let tilesArr = [...document.querySelector('.screen').children]; //создаем массив из детей DIVа "screen"
let counter = document.getElementById('counter');
let c = 0; //счетчик "отщелканных" плиток
let running = true; //флаг выполнения процесса заполнения поля

//Создаем массив для проверки состояния плиток и запоняем его нулями
let tileChecklist = new Array(100);
tileChecklist.fill(0);

function paintedTiles() {
    currInd = rand();
    ti = tilesArr[currInd];
           
    if (screenCheck(tileChecklist)) { //проверяем есть ли в массиве состояний плиток 0

        if (tileChecklist[currInd] === 0) { //проверяем не закрашена ли выбраная плитка
            ti.classList.add('tileOn'); //есди не закрашена - красим 
            tileChecklist[currInd] = 1; //ставим 1 для индекса вибранной плитки в массиве состояний
        } else {
            paintedTiles(); //если выбранная плитка закрашена - рекурсивно вызываем функцию, чтобы выбрать другую случайную плитку
        }

    } else {
        clearInterval(timer);
        lable.textContent = ('Заполнение завершено');
        lable.classList.add('complete');
        running = false;
    }
}

let timer = setInterval(paintedTiles, cooldown); //заполняем поле плитками

dismissTile();

function dismissTile() {
    document.querySelectorAll(".tile").forEach((element, n, all) => {
        element.addEventListener("click", () => {
            element.classList.remove("tileOn");
            
            if (tileChecklist[n] != 0) {
                tileChecklist[n] = 0;
                c++;
            }
            counter.textContent = "Отщелкано плиток: " + c;

            if (running == false && screenCheck(tileChecklist)) { //если процесс заполнения поля завершен И на поле остались пустые клетки - запускаем функцию заполнения
                timer = setInterval(paintedTiles, cooldown);
            }
        });
    });
}

//проверяем все ли "1" в массиве проверки состояния плиток
function screenCheck(arr) {
    return (arr.reduce((pr, el) => pr * el)) === 0;
}

function rand(min = 0, max = 99){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(tileChecklist);
