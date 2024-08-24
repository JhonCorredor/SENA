
// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 5: Polimorfismo
Objetivo: Aplicar polimorfismo.
• Añade un método describir() en Persona que imprima una descripción genérica.
• Sobrescribe el método describir() en Estudiante para que incluya la 
información de grado.
• Llama al método describir() en un objeto de tipo Persona y otro de tipo 
Estudiante.
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
    describir(){
        return `Hola soy ${this.#nombre} esta es mi descripción en persona`;
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
    describir(){
        return `Hola soy ${this.getnombre()} estoy en el sena estudiando`;
    }
    estudiar(){
        return `Estoy estudiando`;
    }
} 
const estudiante1 = new estudiante('Isabel','17','Octavo');

console.log(persona1.describir());
console.log(estudiante1.describir());