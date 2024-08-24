// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 3: Encapsulamiento
Objetivo: Aplicar encapsulamiento a los atributos.
• Modifica la clase Persona para que los atributos nombre y edad sean privados.
• Implementa métodos públicos getNombre(), setNombre(), getEdad(), y 
setEdad() para acceder y modificar estos atributos.
• Usa estos métodos para modificar e imprimir los atributos de persona1
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
console.log(persona1.getnombre());
console.log(persona1.getedad());
persona1.setnombre("Mauro")
persona1.setedad(18)
console.log(persona1.getnombre());
console.log(persona1.getedad());