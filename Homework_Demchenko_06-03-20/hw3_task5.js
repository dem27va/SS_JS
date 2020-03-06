/*function show() {
    round.style.background = backColor.value;
    round.style.width = radius.value + 'em';
    round.style.height = radius.value + 'em';
    console.log(round.style.width);
}*/

function show() {
    circle.style.background = backColor.value;
    circle.style.width = WiHe.value + 'em';
    circle.style.height = WiHe.value + 'em';
    circle.style.border = 10 + 'px solid';
    //circle.style.border-radius = WiHe.value/2 + 'em';
    console.log(circle.style.width);
}


btn1.onclick = show;