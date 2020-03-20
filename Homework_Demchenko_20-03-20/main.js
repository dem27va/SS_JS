
const screen = document.querySelector('.screen');
const btn1 = document.querySelector('.btn1');

let i = 0;

function generateBlock() {
    const b = document.createElement('DIV');
    b.style.top = getRnd(0, 9) + 'px';
    b.style.left = getRnd(0, 9) + 'px';
    //b.addEventListener('click', elCheck(this));
    console.log('\n', i);
    console.log('Current: ', b, b.style.top, b.style.left);
    //console.log(b, b.previousElementSibling);
    //console.log(b.previousElementSibling, b.nextElementSibling); //Почему я не могу так получить доступ к .previousElementSibling?
    return b;
}

function addBlock () {
    const screen = document.querySelector('.screen');
    screen.appendChild(generateBlock());
    //console.clear();
    console.log('Previous ', screen.children[i].previousElementSibling); //А так получить доступ могу?
    //console.log(screen.children[i].style.top, screen.children[i].style.left);
    if ((i > 0) && 
        (screen.children[i].style.top = screen.children[i].previousElementSibling.style.top) && 
        (screen.children[i].style.left = screen.children[i].previousElementSibling.style.left)) 
        {
            console.log('overlapping!!!');
            screen.children[i].style.top = getRnd(0, 9) + 'px';
            screen.children[i].style.left = getRnd(0, 9) + 'px';
        }
    //console.log(screen, screen.children, screen.children[0]); 
    //console.log(i);  
    i++;    
}


/*
let timerID = setInterval(() => {
    addBlock(i);
    i++;
}, 100);

setTimeout(() => {clearInterval(timerID);
    alert('Заполнение завершено');
    }, 1000);*/




screen.addEventListener('click', addBlock);


function getRnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 60; //Включно з мінімальним та виключаючи максимальне значення 
  
  }



