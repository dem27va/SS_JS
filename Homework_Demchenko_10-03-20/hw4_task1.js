const roomsArr = [['xxx', 5], ['xx', 1], ['xxxx', 7], ['x', 3]];
let need = prompt('Сколько стульева Вам не хватает?');
let iTake = [];

//console.log(roomsArr);


for (let i = 0; i < roomsArr.length; i++){
    if ((roomsArr[i][1] > roomsArr[i][0].length) && 
        (roomsArr[i][1] - roomsArr[i][0].length) <= (need)){ //если в комнате есть свободные стулья и стульев меньше или равно чем нам нужно
        
        iTake.push(roomsArr[i][1] - roomsArr[i][0].length); //берем стулья
        need -= (roomsArr[i][1] - roomsArr[i][0].length); //уменьшаем счетчик недостающих стульев

    } else if ((roomsArr[i][1] > roomsArr[i][0].length) && 
                (roomsArr[i][1] - roomsArr[i][0].length) > (need)){ //если в комнате есть свободные стулья и стульев больше, чем нам нужно)
        
                iTake.push(need); //берем стулья, не берем лишние
                need = 0; //обнуляем счетчик недостающих
                break;

            } else {                            
                iTake.push(0); //ничего не берем, если свободных стульев нет
            }  
        
}

if (need > 0){
    alert('Недостаточно стульев');
    console.log(`Недостаточно. Есть ${8-need} стульев, надо ${need}`);
}

//console.log(iTake);
alert(`Вы берете стулья в количестве: ${iTake} `);

