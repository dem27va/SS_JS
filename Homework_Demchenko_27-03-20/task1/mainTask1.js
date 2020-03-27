class Marker {
    constructor(color, inkValue) {
        this.color = color;
        this.inkValue = inkValue;
    }
    print(str) {
        let strArr = str.split('');
        let outStrArr = [];
         strArr.forEach(el => {
            if(this.inkValue > 0) {
                outStrArr.push(el);
                if(!/\s/.test(el)) {
                    this.inkValue -= 0.5;
                }
            }
        });
        console.log(`Ink level:  ${this.inkValue}%`);
        console.log(`/writing in ${this.color}/: `, outStrArr.join(''));        
    }
}

let text = prompt('Что Вы хотите написать марекром?', '123 4 567890123');
let marker1 = new Marker('red', 100);
marker1.print(text);

class RefillableMarker extends Marker {
    refill() {
        let toRefill = prompt('Сколько чернил (в %) вы хотели бы заправить?', 5);
        this.inkValue += Number(toRefill);
        console.log(`Текущий уровень чернил: ${this.inkValue}%`);
    }
}

let marker2 = new RefillableMarker('green', 75);
marker2.print(text);
marker2.refill();

