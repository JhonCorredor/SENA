/**
 * POO - Herencia
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
    
    // Metodos get para nombre y edad
    getNombre(){
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    // Metodo set para nombre y edad
    setNombre(nuevoNombre){
        return this.#nombre = nuevoNombre; 
    }
    setEdad(nuevaEdad){
        return this.#edad = nuevaEdad; 
    }

    saludar(){
        return "Hola " + this.#nombre + " tienes " + this.#edad + " años"
    }

}

class Estudiante extends Persona {

    #grado

    constructor(nombre, edad, grado){
        super(nombre, edad)
        this.#grado = grado
    }

    // metodo get para grado
    getGrado(){
        return this.#grado;
    }
    // metodo set para grado
    setGrado(nuevoGrado){
        return this.#grado = nuevoGrado;
    }

    estudiar(){
        return "Estoy Estudiando"
    }
}

const estudiante1 = new Estudiante("James Rodriguez ", 33, "Grado Once")

// Mostrar funcionalidad de herencia
console.log(estudiante1.saludar())

// Mostrar metodo especifico de la clase estudiante
console.log(estudiante1.estudiar())
