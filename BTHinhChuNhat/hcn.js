let Rectangle = function (a, b) {
    this.a = a;
    this.geta = function () {
        return this.a;
    }
    this.b = b;
    this.getb = function () {
        return this.b;
    }
    this.getPerimeter = function () {
        return (this.a + this.b)*2;
    }
    this.getArea = function () {
        return this.a * this.b;
    }
}

function createRactangle() {
    let ctx = document.getElementById('myCanvas').getContext('2d'); 
    let rectangle = new Rectangle();
    ctx.moveTo(30, 30);
    ctx.lineTo(40, 40);
    ctx.lineTo(this.a, this.b);
    ctx.lineTo(40, 40);
    ctx.lineTo(this.b, this.a);
}
createRactangle();
let rectangle = new Rectangle(3, 5);
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
document.write(`Area: ${area} and Perimeter: ${perimeter}`);
