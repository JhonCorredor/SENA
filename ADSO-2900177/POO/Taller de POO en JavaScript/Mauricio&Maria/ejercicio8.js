// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO


/**
 * Ejercicio 8: Abstracción
Objetivo: Implementar abstracción.
• Crea una clase abstracta FiguraGeometrica con un método abstracto 
calcularArea().
• Implementa clases Cuadrado y Círculo que extiendan FiguraGeometrica e 
implementen calcularArea().
• Crea objetos de estas clases y calcula sus áreas
 */
class figuraGeometrica{
    constructor(){
    }
    calcularArea(){
    }
}

class cuadrado extends figuraGeometrica{
    constructor(lado){
        super();
        this.lado = lado;
    }
    calcularArea(){
        return  `El area del cuadrado es: ${this.lado * this.lado} `;
    }
}

class circulo extends figuraGeometrica{
    constructor(radio){
        super();
        this.radio = radio;
    }
    calcularArea(){
        return  `El area del circulo  es: ${3.1416 * this.radio * this.radio} `;   
    }  
}

const cuadrado1 = new cuadrado(5);
const circulo1 = new circulo(6);
console.log(cuadrado1.calcularArea());
console.log(circulo1.calcularArea());