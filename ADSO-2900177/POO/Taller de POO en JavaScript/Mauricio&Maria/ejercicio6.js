// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 6: Constructores Múltiples (Simulación)
Objetivo: Simular constructores múltiples.
• Modifica la clase Libro (como el ejemplo anterior) para que acepte un título y autor 
opcionalmente, o use valores por defecto.
• Crea instancias de Libro utilizando diferentes combinaciones de parámetros y 
muestra los detalles.
 */

class libro{
    titulo = "Cien años de soledad";
    autor="Gabriel García Márquez";
    constructor(titulo, autor){
        if(titulo) this.titulo=titulo;
        if(autor) this.autor=autor;
    }

}
const libro1 = new libro();
const libro2 = new libro('Don Quijote de la Mancha', 'Miguel de Cervantes');
console.log(libro1)
console.log(libro2)



