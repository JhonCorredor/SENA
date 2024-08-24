/**
 * POO - Abstracción
 * Autores: Ruben Felipe Tovar Aviles y Esteban Palomar Murcia
 * Fehca: 23 de agosto del 2024
 */

class figuraGeometrica {
    constructor(lado, radio) {
        this.lado = lado
        this.radio = radio
    }
    calcularArea(){}
}
    
class cuadrado extends figuraGeometrica{
    constructor(lado = "ERROR!! No hay valores"){
        super()
        this.lado = lado
    }

    calcularArea(){
        let area 
        if (typeof this.lado !== 'number') {
            area =this.lado
        }else{
            area = this.lado ** 2
            area = area.toFixed(0)
        }
        return area
    }
}

class circulo extends figuraGeometrica{
    constructor(radio = "ERROR!! No hay valores"){
        super()
        this.radio = radio
    }

    calcularArea(){
        let pi = Math.PI
        let area
        if (typeof this.radio != 'number') {
            area = this.radio
        }else{
            area = pi * (this.radio ** 2)
            area = area.toFixed(2)
        }
        return area
    }
}

// Objetos de la subclase cuadrado
const cuadrado1 = new cuadrado(4)
const cuadrado2 = new cuadrado()
console.log("El area del cuadrado es: " + cuadrado1.calcularArea())
console.log("El area del cuadrado es: " + cuadrado2.calcularArea())

// Objetos de la subclase circulo
const circulo1 = new circulo(12)
const circulo2 = new circulo()
console.log("El area del circulo es: " + circulo1.calcularArea())
console.log("El area del circulo es: " + circulo2.calcularArea())