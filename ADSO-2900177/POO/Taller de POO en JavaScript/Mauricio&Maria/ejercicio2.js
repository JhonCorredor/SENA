// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO


/** 
 * Ejercicio 2: Métodos en Clases
Objetivo: Agregar métodos a las clases.
• Extiende la clase Persona para que incluya un método saludar() que imprima un 
saludo personalizado en la consola.
• Invoca el método saludar() desde el objeto persona1.
 */
class persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
     saludar(){
        return `Hola soy ${this.nombre}`
     }
}
const persona1 = new persona('Maria', '17');
console.log(persona1.saludar())