class FiguraGeometrica {
    constructor() {
    }
    calcularArea() {
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        console.log(`El area del cuadrado es: ${this.lado * this.lado}`);
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        console.log(`El area del circulo es: ${3.1416*(this.radio*this.radio)}`);
    }
}

const areaCuadrado = new Cuadrado(4);
const areaCirculo = new Circulo(5);

areaCuadrado.calcularArea()
areaCirculo.calcularArea()