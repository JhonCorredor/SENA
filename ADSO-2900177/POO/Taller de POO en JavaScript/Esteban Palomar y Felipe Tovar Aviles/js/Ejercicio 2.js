/**
 * POO - Metodos en clases
 * Autores: Ruben Felipe Tovar Aviles y Esteban Palomar Murcia
 * Fehca: 22 de agosto del 2024
 */

class Persona {

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        return "Hola " + this.nombre + " tienes " + this.edad + "años"
    }
}

const persona1 = new Persona("Luis Fernado Diaz Marulanda", 27)

console.log("Nombre Persona: " + persona1.nombre)
console.log("Edad Persona: " + persona1.edad)