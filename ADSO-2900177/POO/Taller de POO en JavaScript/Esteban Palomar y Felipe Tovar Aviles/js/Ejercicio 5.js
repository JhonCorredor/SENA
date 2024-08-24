/**
 * POO - Poliformismo
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

    describir(){
        return "Mi nombre es " + this.#nombre + ", tengo " + this.#edad + " años. Mi color de cabello es negro, tengo ojos claros, soy alto y de contextura delgada";
    }

}

class Estudiante extends Persona {

    #grado

    constructor(nombre, edad, grado){
        super(nombre, edad)
        this.#grado = grado
    }

    // Metodos get para grado
    getGrado(){
        return this.#grado;
    }

    // Metodo set para grado
    setGrado(nuevoGrado){
        return this.#grado = nuevoGrado;
    }

    estudiar(){
        return "Estoy Estudiando"
    }

    describir() {
        return super.describir() + " Estoy en el grado " + this.#grado;
    }
}


const persona1 = new Persona("James Rodriguez", 33);
const estudiante1 = new Estudiante("James Rodriguez", 33, "Grado Once");

// Metodo describir de la clase Persona
console.log(persona1.describir())

// Metodo describir de la clase Estudiante
console.log(estudiante1.describir())
