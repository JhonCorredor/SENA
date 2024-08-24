// Autor: Marìa Isabel Tovar Pastrana, Andrès Mauricio Noscue
// Fecha: 22 de Agosto del 2024
// Ejercicios POO

/**
 * Ejercicio 7: Relaciones de Composición
Objetivo: Implementar una relación de composición.
• Define una clase Biblioteca que contenga una lista de objetos Libro.
• Implementa métodos para añadir libros a la biblioteca y mostrar la lista de libros.
• Crea varios objetos Libro, añádelos a la biblioteca y muestra la lista en la consola.
 */


class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarLibro() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
    }
    mostrarLibrosBiblioteca() {
        console.log(`Biblioteca  de : ${this.nombre}`);
        for (let contadorLibro = 0; contadorLibro < this.libros.length; contadorLibro++) {

            this.libros[contadorLibro].mostrarLibro();
        }
    }
}

const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez');
const libro2 = new Libro('Odisea', 'Homero');
const libro3 = new Libro('Pedro Páramo', 'Juan Rulfo');

const biblioteca1 = new Biblioteca("La biblioteca contiene los siguientes libros: ");


biblioteca1.agregarLibro(libro1);
biblioteca1.agregarLibro(libro2);
biblioteca1.agregarLibro(libro3);


biblioteca1.mostrarLibrosBiblioteca();
