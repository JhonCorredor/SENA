class FiguraGeometrica {
    calcularArea() {
        throw new Error('El método calcularArea() debe ser implementado en la subclase.');
    }
}
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

const cuadrado = new Cuadrado(4);
const circulo = new Circulo(3);

console.log(`Área del cuadrado: ${cuadrado.calcularArea()} unidades cuadradas.`);
console.log(`Área del círculo: ${circulo.calcularArea()} unidades cuadradas.`);
