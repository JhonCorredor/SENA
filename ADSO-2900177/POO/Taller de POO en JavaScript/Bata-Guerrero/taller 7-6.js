
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

    mostrarDetalles() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    añadirLibro(libro) {
        this.libros.push(libro);
        console.log(`Libro '${libro.titulo}' añadido a la biblioteca.`);
    }

    mostrarLibros() {
        console.log("Libros en la biblioteca:");
        this.libros.forEach(libro => libro.mostrarDetalles());
    }
}


const libro1 = new Libro("Niebla", "Miguel Unamuno");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");
const libro3 = new Libro("Cronicas de una muerte anunciada", "Gabriel Garcia Marquez");


const biblioteca = new Biblioteca();


biblioteca.añadirLibro(libro1);
biblioteca.añadirLibro(libro2);
biblioteca.añadirLibro(libro3);


biblioteca.mostrarLibros();


