const ONE_CAN_OF_PAINT = 16;

let L_inputOK = false;
do{
    L = Number(prompt('Введите длину офса в метрах'));
    if (L>0 && L <=1000){
        L_inputOK = true;
    }
    else {alert('Неверный ввод. Введите число от 1 до 1000')}
}while(L_inputOK == false);

let W_inputOK = false;
do{
    W = Number(prompt('Введите ширину офса в метрах'));
    if (W > 0 && W <= 1000){
        W_inputOK = true;
    }
    else {alert('Неверный ввод. Введите число от 1 до 1000')}
}while(W_inputOK == false);

let H_inputOK = false;
do{
    H = Number(prompt('Введите высоту офса в метрах'));
    if (H > 0 && H <= 1000){
        H_inputOK = true;
    }
    else {alert('Неверный ввод. Введите число от 1 до 1000')}
}while(H_inputOK == false);

let wallArea = 2*(L+W)*H;
let paintCount = Math.ceil(wallArea/ONE_CAN_OF_PAINT);
alert(`Минимальное количество банок краски, необходимых для покраски стен в офисе: ${paintCount}шт.`);





