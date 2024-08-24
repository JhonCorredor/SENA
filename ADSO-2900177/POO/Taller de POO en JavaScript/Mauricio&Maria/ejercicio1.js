// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 1: Definición de Clases y Objetos
Objetivo: Crear una clase básica y un objeto.
• Define una clase Persona con los atributos nombre y edad.
• Crea un objeto persona1 de la clase Persona e inicializa los atributos con valores.
• Imprime los valores de los atributos en la consola.
 */

class persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new persona('Maria', '17');
console.log(persona1)