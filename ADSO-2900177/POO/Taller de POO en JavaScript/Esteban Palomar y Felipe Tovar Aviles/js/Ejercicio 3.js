/**
 * POO - Encapsulamiento
 * Autores: Ruben Felipe Tovar Aviles y Esteban Palomar Murcia
 * Fehca: 22 de agosto del 2024
 */

class Persona {
    #nombre
    #edad

    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    // Metodos get y set para nombre
    getNombre(){
        return this.#nombre
    }

    setNombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }

    // Metodos get y set para edad
    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }

    saludar(){
        return "Hola " + this.#nombre + " tienes " + this.#edad + " años"
    }
}

const persona1 = new Persona("Luis Fernado Diaz Marulanda", 27)

// Resultado Normal
console.log(persona1.saludar())

// Acceder a los atributos privados: nombre y edad
console.log(persona1.getNombre())
console.log(persona1.getEdad())

// Establecer y mostrar nuevos valores a los atributos privados: nombre y edad
persona1.setNombre("Harry Kane")
console.log(persona1.getNombre())

persona1.setEdad(34)
console.log(persona1.getEdad())

console.log(persona1.saludar())

