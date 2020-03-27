class Circle {
    constructor(rad) {
        this.radius = rad;
    }

    get circleRadius() {
        return `Радиус круга: ${this.radius}`;
    }

    set circleRadius(value) {
        this.radius = value;
    }

    get circleDiameter() {
        return `Диаметр круга: ${this.radius * 2}`;
    }

    circumference() {
        let cir = 2 * Math.PI*this.radius;
        console.log('Длина окружности составляет: ', cir);
    }

    circleArea() {
        let areaC = Math.PI * this.radius ** 2;
        console.log('Площадь круга составляет: ', areaC);
    }
}

let circle1 = new Circle(5); //Создаем новый круг с диаметром 5

console.log(circle1); //Выводим новый круг для проверки

console.log('Применяем getter для радиуса. ', circle1.circleRadius); 
circle1.circleRadius = prompt('Введите радиус круга для демонстрации работы setter: '); //Применяем setter
console.log('Применяем getter для диаметра. ', circle1.circleDiameter);

circle1.circumference();
circle1.circleArea();

