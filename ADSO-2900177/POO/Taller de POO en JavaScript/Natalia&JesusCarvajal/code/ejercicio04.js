class FiguraGeometica{
    _area;
    _nombre;

    constructor(nombre){
        this._nombre = nombre;
    }

    calcularArea(){
        return this._area;
    }
}

class Circulo extends FiguraGeometica{
    _radio;
    _pi;

    constructor(radio){
        super('Círculo');
        this._pi = 3.1416;
        this._radio = radio;
    }

    calcularArea(){
        this._area = this._pi * (this._radio ** 2);
        return `El area de tu ${this._nombre} con radio de: ${this._radio} es de (${this._area})`;
    }

}

class Cuadrado extends FiguraGeometica{
    _lado;

    constructor(lado){
        super('Cuadrado');
        this._lado = lado;
    }

    calcularArea(){
        this._area = this._lado * this._lado;

        return `El area de tu ${this._nombre} es de ${this._area}`;
    }
}

let circulo1 = new Circulo(5);
let circulo2 = new Circulo(20);

let cuadrado1 = new Cuadrado(30);
let cuadrado2 = new Cuadrado(4);

console.log('Areas de las figuras geometricas (Círculos)')
console.log(circulo1.calcularArea())
console.log(circulo2.calcularArea())

console.log();

console.log('Areas de las figuras geometricas (Cuadrado)')
console.log(cuadrado1.calcularArea())
console.log(cuadrado2.calcularArea())
