// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 4: Herencia
Objetivo: Implementar herencia entre clases.
• Crea una clase Estudiante que herede de Persona.
• Agrega un atributo adicional grado y un método estudiar() que imprima el 
mensaje “Estoy estudiando”.
• Crea un objeto estudiante1 y demuestra la funcionalidad de herencia y los 
métodos específicos de Estudiante.
 */

class persona{
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    setnombre(name){
        this.#nombre = name;
    }
    getnombre(){
        return this.#nombre;
    }
    getedad(){
        return this.#edad;
    }
    setedad(age){
        this.#edad = age;
    }
    
    saludar(){
        return `Hola soy ${this.#nombre}`
    }
}
const persona1 = new persona('Maria', '17');


class estudiante extends persona{
    constructor(nombre, edad, grado){
        super(nombre,edad)
        this.grado = grado;
    }
    
    estudiar(){
        return `Estoy estudiando`;
    }
} 
const estudiante1 = new estudiante('Isabel','17','Octavo');
console.log(estudiante1.grado);
console.log(estudiante1.getnombre());
console.log(estudiante1.getedad());
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());